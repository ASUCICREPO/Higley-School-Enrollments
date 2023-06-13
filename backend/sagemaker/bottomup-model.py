!pip install xgboost
import pandas as pd
import xgboost as xgb
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import copy
import os
import sagemaker
import boto3
from sagemaker.amazon.amazon_estimator import get_image_uri
from sagemaker.tuner import IntegerParameter
from sagemaker.tuner import ContinuousParameter
from sagemaker.tuner import HyperparameterTuner
from sagemaker.predictor import csv_serializer, json_deserializer
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import TimeSeriesSplit
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error
import math
import sys
import time
from sklearn.model_selection import TimeSeriesSplit
from xgboost import XGBClassifier
from sklearn.metrics import precision_score, recall_score, accuracy_score
import json

current_directory=os.getcwd()
files = os.listdir(current_directory)
for file in files:
    if file.endswith('.csv'):
        print(file)
        os.remove(os.path.join(current_directory, file))
s3_client= boto3.client('s3')

bucket_name = 'higley-output-bucket'
objects = s3_client.list_objects_v2(Bucket=bucket_name)
if 'Contents' in objects:
    objects_to_delete = [{'Key': obj['Key']} for obj in objects['Contents']]
    s3_client.delete_objects(Bucket=bucket_name, Delete={'Objects': objects_to_delete})
    print("All files deleted successfully.")
else:
    print("No files found in the bucket.")

output_bucket_name='higley-input-bucket'
prefix = 'Artifacts'
key = 'XGBoost-Regressor'
current_path='/home/ec2-user/SageMaker/'
Training_file='train.csv'
Validation_file='validation.csv'

def predict_values(data,column_name,input_values):
    target=data[column_name]
    final=data.drop(columns=column_name)

    X = np.array(final).astype('float32')
    y = np.array(target).astype('float32')
    y = y.reshape(-1,1)

    testing_size=0.15
    validation_size=0.5

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size =testing_size )
    X_test, X_val, y_test, y_val = train_test_split(X_test, y_test, test_size =validation_size )

    train_data = pd.DataFrame({'Target': y_train[:,0]})
    for i in range(X_train.shape[1]):
        train_data[i] = X_train[:,i]

    val_data = pd.DataFrame({'Target':y_val[:,0]})
    for i in range(X_val.shape[1]):
        val_data[i] = X_val[:,i]
    
    train_data.to_csv(os.path.join(current_path,Training_file), header = False, index = False)
    val_data.to_csv(os.path.join(current_path,Validation_file), header = False, index = False)
    sagemaker_session = sagemaker.Session()
    
    with open(os.path.join(current_path,Training_file),'rb') as f:
        boto3.Session().resource('s3').Bucket(output_bucket_name).Object(os.path.join(prefix, 'train', key)).upload_fileobj(f)
    s3_train_data = 's3://{}/{}/train/{}'.format(output_bucket_name, prefix, key)
    print('uploaded training data location: {}'.format(s3_train_data))

    with open(os.path.join(current_path,Validation_file),'rb') as f:
        boto3.Session().resource('s3').Bucket(output_bucket_name).Object(os.path.join(prefix, 'validation', key)).upload_fileobj(f)
    s3_validation_data = 's3://{}/{}/validation/{}'.format(output_bucket_name, prefix, key)
    print('uploaded validation data location: {}'.format(s3_validation_data))

    output_location = 's3://{}/{}/output'.format(output_bucket_name, prefix)
    print('training artifacts will be uploaded to: {}'.format(output_location))
    
    container = get_image_uri(boto3.Session().region_name, 'xgboost','0.90-2')
    
    role = sagemaker.get_execution_role()
    
    Xgboost_regressor1 = sagemaker.estimator.Estimator(container,
                                       role, 
                                       train_instance_count = 1, 
                                       train_instance_type = 'ml.m5.2xlarge',
                                       output_path = output_location,
                                       sagemaker_session = sagemaker_session)
    
    Xgboost_regressor1.set_hyperparameters(max_depth = 10,
                           objective = 'reg:linear',
                           colsample_bytree = 0.3,
                           alpha = 10,
                           eta = 0.1,
                           num_round = 30,
                           early_stopping_rounds=3
                           )
    train_input = sagemaker.session.s3_input(s3_data = s3_train_data, content_type='csv',s3_data_type = 'S3Prefix')
    valid_input = sagemaker.session.s3_input(s3_data = s3_validation_data, content_type='csv',s3_data_type = 'S3Prefix')
    data_channels = {'train': train_input,'validation': valid_input}
    
    hyperparameter_ranges={
    'max_depth': IntegerParameter(2,10),
    'alpha':IntegerParameter(1,10),
    'eta':ContinuousParameter(0,1),
    'colsample_bytree':ContinuousParameter(0,1),
    'num_round':IntegerParameter(10,50)
    }
    
    objective_metric_name='validation:rmse'
    tuner=HyperparameterTuner(Xgboost_regressor1,objective_metric_name,hyperparameter_ranges,strategy='Bayesian',objective_type='Minimize',max_jobs=1,max_parallel_jobs=1)
    tuner.fit(data_channels,include_cls_metadata=False)
    Xgboost_regressor = tuner.deploy(initial_instance_count = 1, instance_type = 'ml.m5.2xlarge')
    Xgboost_regressor.serializer = csv_serializer
    result=Xgboost_regressor.predict(input_values)
    Xgboost_regressor.delete_endpoint()
    return result

bucket_name='higley-input-bucket'
def download_file(file_name):
    try:
        path='/home/ec2-user/SageMaker/'+file_name
        s3_client.download_file(bucket_name, file_name,path)
        return path
        
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            print("The object does not exist.")
        else:
            raise
            
files_path=download_file('new_intakes_by_school_raw.csv')
intakes=pd.read_csv(files_path)
intakes=intakes.rename(columns={'Year':'YEAR'})
le = LabelEncoder()

intakes_schools=list(intakes['School'])
intakes['School'] = le.fit_transform(intakes['School'])
school_map={}
encoded_schools=list(intakes['School'])

for i in range(len(encoded_schools)):
    if encoded_schools[i] not in school_map:
        school_map[encoded_schools[i]]=intakes_schools[i]
    else:
        pass
    
intakes['GRADE']=0
for index,row in intakes.iterrows():
    grade=intakes['Grade'][index]
    if grade=='PS':
        intakes['GRADE'][index]=13
    elif grade=='KG':
        intakes['GRADE'][index]=14
    else:
        intakes['GRADE'][index]=int(intakes['Grade'][index])
        
intakes=intakes.drop('Grade',axis=1)
data=copy.deepcopy(intakes)
unique_years=sorted(data['YEAR'].unique())
latest_year=max(unique_years)

files_path=download_file('prediction_dataset.csv')
prediction=pd.read_csv(files_path)

prediction_data=data[data['YEAR']==latest_year]
prediction_data=prediction_data.drop(['YEAR','New_Intake'],axis=1)

next_year=latest_year+1
prediction_data['Total_Population']=list(prediction[prediction['Year']==next_year]['Total_Population'])[0]
prediction_data['GDP in Billions of dollars']=list(prediction[prediction['Year']==next_year]['GDP in Billions of dollars'])[0]
prediction_data['Per Capita Income']=list(prediction[prediction['Year']==next_year]['Per Capita Income'])[0]
prediction_data['District_Population']=list(prediction[prediction['Year']==next_year]['District_Population'])[0]
prediction_data['Total Units']=list(prediction[prediction['Year']==next_year]['Total Units'])[0]
prediction_data['Rate     ']=list(prediction[prediction['Year']==next_year]['Rate     '])[0]
prediction_data['District_Households']=list(prediction[prediction['Year']==next_year]['District_Households'])[0]
prediction_data['Developments']=list(prediction[prediction['Year']==next_year]['Developments'])[0]

values_list=[list(prediction[prediction['Year']==next_year]['Total_Population'])[0],list(prediction[prediction['Year']==next_year]['GDP in Billions of dollars'])[0],list(prediction[prediction['Year']==next_year]['Per Capita Income'])[0],list(prediction[prediction['Year']==next_year]['District_Population'])[0],list(prediction[prediction['Year']==next_year]['Total Units'])[0],list(prediction[prediction['Year']==next_year]['Rate     '])[0],list(prediction[prediction['Year']==next_year]['District_Households'])[0],list(prediction[prediction['Year']==next_year]['Developments'])[0]]
unique_years=sorted(data['YEAR'].unique())
print(unique_years)

years_list={}

for year in unique_years:
    
    modified_data=copy.deepcopy(data)
    train_data = modified_data[modified_data['YEAR']==year].drop('YEAR',axis=1)
    test_data = modified_data[modified_data['YEAR']!=year].drop('YEAR',axis=1)
    
    X_train = train_data.drop(columns =['New_Intake'])
    y_train = train_data['New_Intake']
    
    X_test = test_data.drop(columns =['New_Intake'])
    y_test = test_data['New_Intake']
    
    model = XGBRegressor(objective='reg:squarederror', n_estimators=100, max_depth=3, learning_rate=0.1, colsample_bytree=0.7, subsample=0.7)

    model.fit(X_train, y_train)
    
    predict = model.predict(X_test)
    
    if year not in years_list:
        years_list[year]={}
        
    print('Training')
    predict_train = model.predict(X_train)
    years_list[year]['TrainAccuracy'] = mean_squared_error(y_train, predict_train)
    
    print('Test')
    years_list[year]['TestAccuracy'] = mean_squared_error(y_test, predict)
    
df=pd.DataFrame(years_list).transpose()
df_sorted = df.sort_values('TestAccuracy', ascending=True)

testing_count=len(unique_years)//4
training_count=len(unique_years)-testing_count

print(training_count,testing_count)

training_years=list(df_sorted.iloc[:training_count].index)
print(training_years)
testing_years=list(df_sorted.iloc[training_count:].index)
print(testing_years)

modified_data=copy.deepcopy(data)
train_data = modified_data[modified_data['YEAR'].isin(training_years)].drop('YEAR',axis=1)
test_data = modified_data[modified_data['YEAR'].isin(testing_years)].drop('YEAR',axis=1)
    
X_train = train_data.drop(columns =['New_Intake'])
y_train = train_data['New_Intake']
    
X_test = test_data.drop(columns =['New_Intake'])
y_test = test_data['New_Intake']
    
model = XGBRegressor(objective='reg:squarederror',n_estimators=100, max_depth=3, learning_rate=0.1, colsample_bytree=0.7, subsample=0.7)
model.fit(X_train, y_train)

print('Training')
predict_train = model.predict(X_train)
print("MSE = {}".format(mean_squared_error(y_train, predict_train)))

print('Testing')
predict = model.predict(X_test)
print("MSE = {}".format(mean_squared_error(y_test, predict)))

result=list(model.predict(prediction_data))
result=[math.ceil(num) if num > 0 else 0 for num in result]

prediction_data['New_Intake']=result

for index,row in prediction_data.iterrows():
    prediction_data['School'][index]=school_map[prediction_data['School'][index]]
for index,row in prediction_data.iterrows():
    grade=prediction_data['GRADE'][index]
    if grade==13:
        prediction_data['GRADE'][index]='PS'
    elif grade==14:
        prediction_data['GRADE'][index]='KG'
    else:
        prediction_data['GRADE'][index]=str(prediction_data['GRADE'][index])
prediction_data=prediction_data[['School','GRADE','New_Intake']]
target_path='/home/ec2-user/SageMaker/'+'Future_Intakes.csv'
prediction_data.to_csv(target_path,index=False)

target_file='Future_Intakes.csv'
target_path=current_path+target_file
upload_bucket='higley-input-bucket'
s3_client.upload_file(target_path, upload_bucket, target_file)

files_path=download_file('new_intakes_raw.csv')
data=pd.read_csv(files_path).drop(['REPEAT','DROPOUTS'],axis=1)
new_data=pd.read_csv('new_intakes_by_school_raw.csv')
for index,row in data.iterrows():
    year=data['YEAR'][index]
    data['INTAKES'][index]=sum(list(new_data[new_data['Year']==year]['New_Intake']))
data=data.drop('YEAR',axis=1)
intake=predict_values(data,'INTAKES',values_list)

def bytes_2_array(x):
    
    l = str(x).split(',')
    
    l[0] = l[0][2:]
    l[-1] = l[-1][:-1]
    
    for i in range(len(l)):
        l[i] = float(l[i])
        
    l = np.array(l).astype('float32')
    
    return l.reshape(-1,1)

intakes=math.ceil(bytes_2_array(intake)[0][0])

d={}
d['INTAKE']=intakes
current_path='/home/ec2-user/SageMaker/'
results_dataframe=pd.DataFrame([d],index=None)
results_dataframe.to_csv(os.path.join(current_path,'counts.csv'),index=False)

target_file='counts.csv'
target_path=current_path+target_file
upload_bucket='higley-input-bucket'
s3_client.upload_file(target_path, upload_bucket, target_file)


files_path=download_file('new_data.csv')
data=pd.read_csv(files_path)
data=data.drop('ACTIVITY',axis=1)

data['REPEAT_SCHOOL']=0

for index,row in data.iterrows():
        person_name=data['PERSON_GU'][index]
        year=data['Year'][index]
        school_name=data['SCHOOL'][index]
        
        next_year=year+1
        student_data=data[data['PERSON_GU']==person_name]
        new_school=-1
        
        if next_year in list(student_data['Year']):
            student_data=student_data[student_data['Year']==next_year]
            new_school=list(student_data['SCHOOL'])[0]
            
        if school_name==new_school:
            data['REPEAT_SCHOOL'][index]=1
        
data_copy=copy.deepcopy(data)

prediction_data=data_copy[data_copy['Year']==latest_year]
modified_prediction=prediction_data.drop(['PERSON_GU','Year','REPEAT','REPEAT_SCHOOL'],axis=1)

unique_years=sorted(data['Year'].unique())
unique_years.pop()
print(unique_years)

years_list={}

for year in unique_years:
    print(year)
    
    modified_data=data.drop(['PERSON_GU','REPEAT_SCHOOL'],axis=1)
    train_data = modified_data[modified_data['Year']==year].drop('Year',axis=1)
    test_data = modified_data[modified_data['Year']!=year].drop('Year',axis=1)
    
    X_train = train_data.drop(columns =['REPEAT'])
    y_train = train_data['REPEAT']
    
    X_test = test_data.drop(columns =['REPEAT'])
    y_test = test_data['REPEAT']
    
    model = XGBClassifier(learning_rate=0.01, n_estimators=500,max_depth=20)

    model.fit(X_train, y_train)
    
    predict = model.predict(X_test)
    
    if year not in years_list:
        years_list[year]={}
        
    predict_train = model.predict(X_train)
    years_list[year]['TrainPrecision']=precision_score(y_train, predict_train)
    years_list[year]['TrainRecall']=recall_score(y_train, predict_train)
    years_list[year]['TrainAccuracy']=accuracy_score(y_train, predict_train)
        
    years_list[year]['TestPrecision']=precision_score(y_test, predict)
    years_list[year]['TestRecall']=recall_score(y_test, predict)
    years_list[year]['TestAccuracy']=accuracy_score(y_test, predict)
    
df=pd.DataFrame(years_list).transpose()
df_sorted = df.sort_values('TestAccuracy', ascending=False)

testing_count=len(unique_years)//4
training_count=len(unique_years)-testing_count

print(training_count,testing_count)

training_years=list(df_sorted.iloc[:training_count].index)
print(training_years)
testing_years=list(df_sorted.iloc[training_count:].index)
print(testing_years)

modified_data=data.drop(['PERSON_GU','REPEAT_SCHOOL'],axis=1)
train_data = modified_data[modified_data['Year'].isin(training_years)].drop('Year',axis=1)
test_data = modified_data[modified_data['Year'].isin(testing_years)].drop('Year',axis=1)
    
X_train = train_data.drop(columns =['REPEAT'])
y_train = train_data['REPEAT']
    
X_test = test_data.drop(columns =['REPEAT'])
y_test = test_data['REPEAT']
    
model = XGBClassifier(learning_rate=0.01, n_estimators=500,max_depth=20)
model.fit(X_train, y_train)

predict = model.predict(X_test)
predict_train = model.predict(X_train)

print('Training')
print("Precision = {}".format(precision_score(y_train, predict_train)))
print("Recall = {}".format(recall_score(y_train, predict_train)))
print("Accuracy = {}".format(accuracy_score(y_train, predict_train)))
    
print('Testing')
print("Precision = {}".format(precision_score(y_test, predict)))
print("Recall = {}".format(recall_score(y_test, predict)))
print("Accuracy = {}".format(accuracy_score(y_test, predict)))

predict = model.predict(modified_prediction)
prediction_data['REPEAT']=predict

years_list={}

for year in unique_years:
    print(year)
    
    modified_data=data.drop(['PERSON_GU','REPEAT'],axis=1)
    train_data = modified_data[modified_data['Year']==year].drop('Year',axis=1)
    test_data = modified_data[modified_data['Year']!=year].drop('Year',axis=1)
    
    X_train = train_data.drop(columns =['REPEAT_SCHOOL'])
    y_train = train_data['REPEAT_SCHOOL']
    
    X_test = test_data.drop(columns =['REPEAT_SCHOOL'])
    y_test = test_data['REPEAT_SCHOOL']
    
    model = XGBClassifier(learning_rate=0.01, n_estimators=500,max_depth=20)

    model.fit(X_train, y_train)
    
    predict = model.predict(X_test)
    
    if year not in years_list:
        years_list[year]={}
        
    predict_train = model.predict(X_train)
    years_list[year]['TrainPrecision']=precision_score(y_train, predict_train)
    years_list[year]['TrainRecall']=recall_score(y_train, predict_train)
    years_list[year]['TrainAccuracy']=accuracy_score(y_train, predict_train)
        
    years_list[year]['TestPrecision']=precision_score(y_test, predict)
    years_list[year]['TestRecall']=recall_score(y_test, predict)
    years_list[year]['TestAccuracy']=accuracy_score(y_test, predict)
    
df=pd.DataFrame(years_list).transpose()
df_sorted = df.sort_values('TestAccuracy', ascending=False)

testing_count=len(unique_years)//4
training_count=len(unique_years)-testing_count

print(training_count,testing_count)

training_years=list(df_sorted.iloc[:training_count].index)
print(training_years)
testing_years=list(df_sorted.iloc[training_count:].index)
print(testing_years)

modified_data=data.drop(['PERSON_GU','REPEAT'],axis=1)
train_data = modified_data[modified_data['Year'].isin(training_years)].drop('Year',axis=1)
test_data = modified_data[modified_data['Year'].isin(testing_years)].drop('Year',axis=1)
    
X_train = train_data.drop(columns =['REPEAT_SCHOOL'])
y_train = train_data['REPEAT_SCHOOL']
    
X_test = test_data.drop(columns =['REPEAT_SCHOOL'])
y_test = test_data['REPEAT_SCHOOL']
    
model = XGBClassifier(learning_rate=0.01, n_estimators=500,max_depth=20)
model.fit(X_train, y_train)

predict = model.predict(X_test)
predict_train = model.predict(X_train)

print('Training')
print("Precision = {}".format(precision_score(y_train, predict_train)))
print("Recall = {}".format(recall_score(y_train, predict_train)))
print("Accuracy = {}".format(accuracy_score(y_train, predict_train)))
    
print('Testing')
print("Precision = {}".format(precision_score(y_test, predict)))
print("Recall = {}".format(recall_score(y_test, predict)))
print("Accuracy = {}".format(accuracy_score(y_test, predict)))

predict = model.predict(modified_prediction)
prediction_data['REPEAT_SCHOOL']=predict

modified_prediction_data=prediction_data[['PERSON_GU','SCHOOL','GRADE','REPEAT','REPEAT_SCHOOL']]

files_path=download_file('school_map.csv')
school_map=pd.read_csv(files_path)

enrollments=copy.deepcopy(data_copy)

grade_school_pair={}

for index,row in enrollments.iterrows():
    school=enrollments['SCHOOL'][index]
    grade=enrollments['GRADE'][index]
    
    if grade not in grade_school_pair:
        grade_school_pair[grade]=[]
     
    if school not in grade_school_pair[grade]:
        grade_school_pair[grade].append(school)
        
import statistics
result={}

for index,row in modified_prediction_data.iterrows():
    person_name=modified_prediction_data['PERSON_GU'][index]
    grade=modified_prediction_data['GRADE'][index]
    school=modified_prediction_data['SCHOOL'][index]
    repeat_school=modified_prediction_data['REPEAT_SCHOOL'][index]
    repeat=modified_prediction_data['REPEAT'][index]
    
    next_grade=grade+1
    
    if next_grade==15:
        next_grade=1
    
    if repeat==1 and grade!=12:
        
        school_name=school_map[str(school)][0]
        
        if repeat_school==1 and school in grade_school_pair[next_grade]:
            if school_name not in result:
                result[school_name]={}
            if grade not in result[school_name]:
                result[school_name][grade]=0
            result[school_name][grade]+=1
            
        else:
            ada=list(prediction_data[prediction_data['PERSON_GU']==person_name]['ADA'])[0]
            performance=list(prediction_data[prediction_data['PERSON_GU']==person_name]['PERFORMANCE'])[0]
            ethinicty=list(prediction_data[prediction_data['PERSON_GU']==person_name]['ETHNICITY_RACE'])[0]
            city=list(prediction_data[prediction_data['PERSON_GU']==person_name]['CITY'])[0]
            gender=list(prediction_data[prediction_data['PERSON_GU']==person_name]['GENDER'])[0]
            sped=list(prediction_data[prediction_data['PERSON_GU']==person_name]['SPED'])[0]
            frm=list(prediction_data[prediction_data['PERSON_GU']==person_name]['FRM'])[0]
            
            sample_data=copy.deepcopy(data_copy)
            sample_data=sample_data[sample_data['Year']!=latest_year]
            
            
            if sample_data[sample_data['REPEAT']==repeat].shape[0]!=0:
                sample_data=sample_data[sample_data['REPEAT']==repeat]
                
                if sample_data[sample_data['REPEAT_SCHOOL']==repeat_school].shape[0]!=0:
                    sample_data=sample_data[sample_data['REPEAT_SCHOOL']==repeat_school]
                    
                    if sample_data[sample_data['GRADE']==grade].shape[0]!=0:
                        sample_data=sample_data[sample_data['GRADE']==grade]
                
                        if sample_data[sample_data['SCHOOL']==school].shape[0]!=0:
                            sample_data=sample_data[sample_data['SCHOOL']==school]
                
                            if sample_data[sample_data['PERFORMANCE']==performance].shape[0]!=0:
                                sample_data=sample_data[sample_data['PERFORMANCE']==performance]
                
                                if sample_data[sample_data['ADA']==ada].shape[0]!=0:
                                    sample_data=sample_data[sample_data['ADA']==ada]
                
                                    if sample_data[sample_data['ETHNICITY_RACE']==ethinicty].shape[0]!=0:
                                            sample_data=sample_data[sample_data['ETHNICITY_RACE']==ethinicty]
                            
                                            if sample_data[sample_data['CITY']==city].shape[0]!=0:
                                                sample_data=sample_data[sample_data['CITY']==city]
                                        
                                                if sample_data[sample_data['FRM']==frm].shape[0]!=0:
                                                    sample_data=sample_data[sample_data['FRM']==frm]
                                                    
                                                    if sample_data[sample_data['SPED']==sped].shape[0]!=0:
                                                        sample_data=sample_data[sample_data['SPED']==sped]
                            
            
            people=list(sample_data['PERSON_GU'])
            
            school_list=[]

            for person in people:
                sub_list=copy.deepcopy(data_copy)
                sub_list=sub_list[sub_list['PERSON_GU']==person]

                if next_grade in list(sub_list['GRADE']):
                    sub_list=sub_list[sub_list['GRADE']==next_grade]
                    school_name=list(sub_list['SCHOOL'])[0]
                    school_list.append(school_name)
                    
            if len(school_list)!=0:
                new_school=statistics.mode(school_list)
                new_school_name=school_map[str(new_school)][0]

                if new_school_name not in result:
                    result[new_school_name]={}

                if grade not in result[new_school_name]:
                    result[new_school_name][grade]=0

                result[new_school_name][grade]+=1
                
            else:
                if school_name not in result:
                    result[school_name]={}
                
                if grade not in result[school_name]:
                    result[school_name][grade]=0
                
                result[school_name][grade]+=1
                
grade_school_pair={'Bridges Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Centennial Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Chaparral Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Coronado Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Cortina Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Gateway Pointe Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Higley Traditional Academy': ['KG', '01', '02', '03', '04', '05', '06'],
 'Power Ranch Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'San Tan Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Cooley Middle School': ['07', '08'],
 'Sossaman Middle School': ['07', '08'],
 'Higley High School': ['09', '10', '11', '12'],
 'Williams Field High School': ['09', '10', '11', '12'],
 'Higley Virtual Academy': ['07', '08', '09', '10', '11', '12']}

higley_enrollment=pd.DataFrame(result).transpose()
data_columns=list(higley_enrollment.columns)
for i in range(len(data_columns)):
    if data_columns[i] in range(1,12):
        data_columns[i]=str(data_columns[i]+1)
    else:
        if data_columns[i]==13:
            data_columns[i]='KG'
        if data_columns[i]==14:
            data_columns[i]=str(1)
            
higley_enrollment.columns=data_columns
higley_enrollment=higley_enrollment.fillna(0)
higley_enrollment['KG']=0

list_a=list(grade_school_pair.keys())
list_b=list(higley_enrollment.index)

common_schools=set(list_a).intersection(set(list_b))
different_schools=set(list_b).difference(common_schools)

#print(common_schools,different_schools)

for key,val in grade_school_pair.items():
    empty_list=[]
    
    for grade in val:
        if grade!='KG':
            empty_list.append(str(int(grade)))
        else:
            empty_list.append('KG')
            
    grade_school_pair[key]=empty_list
    
for school in list(common_schools):
    for grade in  higley_enrollment.columns:
        if school in grade_school_pair:
            if grade not in grade_school_pair[school]:
                higley_enrollment.loc[school,grade]=0
                
for val in list(different_schools):
    higley_enrollment=higley_enrollment.drop(val)
    
repeating_students_df=copy.deepcopy(higley_enrollment)
repeating_students=higley_enrollment.sum().sum()
print(repeating_students)

reference_map={'Bridges Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Centennial Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Chaparral Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Coronado Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Cortina Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Gateway Pointe Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Higley Traditional Academy': ['KG', '01', '02', '03', '04', '05', '06'],
 'Power Ranch Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'San Tan Elementary': ['KG', '01', '02', '03', '04', '05', '06'],
 'Cooley Middle School': ['07', '08'],
 'Sossaman Middle School': ['07', '08'],
 'Higley High School': ['09', '10', '11', '12'],
 'Williams Field High School': ['09', '10', '11', '12'],
 'Higley Virtual Academy': ['07', '08', '09', '10', '11', '12']}

for key,val in reference_map.items():
    empty_list=[]
    for grade in val:
        if grade!='KG':
            empty_list.append(int(grade))
        else:
            empty_list.append(14)
    reference_map[key]=empty_list
    
enrollments=copy.deepcopy(data_copy)
enrollments=enrollments[enrollments['Year']==latest_year]
grade_school_pair={}

for index,row in enrollments.iterrows():
    school=enrollments['SCHOOL'][index]
    grade=enrollments['GRADE'][index]
    
    if grade not in grade_school_pair:
        grade_school_pair[grade]=[]
     
    if school not in grade_school_pair[grade]:
        grade_school_pair[grade].append(school)
        
reverse_school_map={}
inverse_school_map={}
for grade in school_map.columns:
    school_name=list(school_map[grade])[0]
    reverse_school_map[school_name]=grade
    try:
        inverse_school_map[int(grade)]=school_name
    except Exception as e:
        pass
intakes_count=0

for key,val in grade_school_pair.items():
    elements=[]
    
    for value in val:
        school=inverse_school_map[value]
        if school in reference_map and key in reference_map[school]:
            elements.append(value)
    grade_school_pair[key]=elements
    
new_intake=pd.read_csv('Future_Intakes.csv')[['School','GRADE','New_Intake']]

abnormal=[]

for index,row in new_intake.iterrows():
    school_name=new_intake['School'][index]
    school=reverse_school_map[school_name]
    grade=new_intake['GRADE'][index]
    count=new_intake['New_Intake'][index]
    
    if grade=='PS':
        grade_modified=13
        
    elif grade=='KG':
        grade_modified=14
     
    else:
        grade_modified=int(grade)
        
    if int(school) in grade_school_pair[grade_modified] and grade in higley_enrollment.columns and school_name in higley_enrollment.index:
        higley_enrollment.loc[school_name,grade]+=count
        intakes_count+=count
    else:
        abnormal.append((school_name,grade))
        
print(intakes_count)

total_students_df=copy.deepcopy(higley_enrollment)
df1=copy.deepcopy(repeating_students_df)
df2=copy.deepcopy(total_students_df)

result = df2.subtract(df1)
result=result.fillna(0)

columns=repeating_students_df.columns
empty=[]
for column in columns:
    empty.append('Grade_'+column)
repeating_students_df.columns=empty

columns=list(total_students_df.columns)
empty=[]
for column in columns:
    empty.append('Grade_'+column)
total_students_df.columns=empty

columns=list(result.columns)
empty=[]
for column in columns:
    empty.append('Grade_'+column)
result.columns=empty

total_students_df=total_students_df.reset_index()
total_students_df=total_students_df.rename(columns={'index':'School'})

repeating_students_df=repeating_students_df.reset_index()
repeating_students_df=repeating_students_df.rename(columns={'index':'School'})

result=result.reset_index()
result=result.rename(columns={'index':'School'})

repeating_students_df.to_csv('repeating_students_higley.csv',index=False)
total_students_df.to_csv('total_students_higley.csv',index=False)
result.to_csv('new_intake_students_higley.csv',index=False)

target_file='repeating_students_higley.csv'
target_path=current_path+target_file
output_bucket='higley-output-bucket'
folder_path='repeating-students/'
s3_client.upload_file(target_path, output_bucket,folder_path+target_file)

target_file='total_students_higley.csv'
target_path=current_path+target_file
output_bucket='higley-output-bucket'
folder_path='total_students/'
s3_client.upload_file(target_path, output_bucket, folder_path+target_file)

target_file='new_intake_students_higley.csv'
target_path=current_path+target_file
output_bucket='higley-output-bucket'
folder_path='new_intake-students/'
s3_client.upload_file(target_path, output_bucket,folder_path+ target_file)


lambda_client = boto3.client('lambda')
function_name ='bottomup-prediction'
payload = {
    'key1': 'value1',
    'key2': 'value2'
}
response = lambda_client.invoke(
    FunctionName=function_name,
    InvocationType='Event',  
    Payload=json.dumps(payload)
)

print(response)