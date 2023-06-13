import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd
import math
from sklearn.preprocessing import LabelEncoder
import os
import copy
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

bucket_name='higley-input-bucket'
file_name='cleaned_bottomup_new.csv'

s3_client= boto3.client('s3')

def download_file(file_name):
    try:
        path='/tmp/'+file_name
        s3_client.download_file(bucket_name, file_name,path)
        return path
        
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            print("The object does not exist.")
        else:
            raise

files_path=download_file(file_name)
data=pd.read_csv(files_path)
testing_data=copy.deepcopy(data)

#Consider only AZ addresses and replace invalid names of cities by actual
testing_data=testing_data[testing_data['STATE']=='AZ']
testing_data['CITY'] = testing_data['CITY'].replace('GIlbert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilber','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('GILBERT','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Glbert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilberty','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Giblert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilbet','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gibert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gulbert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Cilbert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilb ert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilbertt','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('gilbert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gjilbert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilert','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilbert\'','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilbertl','Gilbert')
testing_data['CITY'] = testing_data['CITY'].replace('Gilbrt','Gilbert')    
testing_data['CITY'] = testing_data['CITY'].replace('Gilebrt','Gilbert')  
testing_data['CITY'] = testing_data['CITY'].replace('Gilbertr','Gilbert')    
testing_data['CITY'] = testing_data['CITY'].replace('Giilbert','Gilbert')  
testing_data['CITY'] = testing_data['CITY'].replace('Gilberta','Gilbert')    
testing_data['CITY'] = testing_data['CITY'].replace('Gilbart','Gilbert')  
testing_data['CITY'] = testing_data['CITY'].replace('Gilbaert','Gilbert')    
testing_data['CITY'] = testing_data['CITY'].replace('Giilbert','Gilbert')  
testing_data['CITY'] = testing_data['CITY'].replace('Gilbt','Gilbert')    
testing_data['CITY'] = testing_data['CITY'].replace('G','Gilbert') 
testing_data['CITY'] = testing_data['CITY'].replace('Gilnert','Gilbert')    
testing_data['CITY'] = testing_data['CITY'].replace('Glibert','Gilbert') 
testing_data['CITY'] = testing_data['CITY'].replace('Glibeert','Gilbert') 
testing_data['CITY'] = testing_data['CITY'].replace('Gilberrt','Gilbert') 
testing_data['CITY'] = testing_data['CITY'].replace('Glibeert','Gilbert') 
testing_data['CITY'] = testing_data['CITY'].replace('Cilbert','Gilbert') 
testing_data['CITY'] = testing_data['CITY'].replace('Gilbert,','Gilbert')

testing_data['CITY'] = testing_data['CITY'].replace('Queen Creeka','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen creek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Quenn Creek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen CreeK','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen Creen','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen Ceek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queeen Creek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('queen creek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queem Creek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen Cree','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Quee Creek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen Cre','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Quen Creek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen creek Az','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen Crek','Queen Creek')
testing_data['CITY'] = testing_data['CITY'].replace('Queen creek Az','Queen Creek')

testing_data['CITY'] = testing_data['CITY'].replace('chandler','Chandler')
testing_data['CITY'] = testing_data['CITY'].replace('Chander','Chandler')

testing_data['CITY'] = testing_data['CITY'].replace('San Tan','San Tan Valley')
testing_data['CITY'] = testing_data['CITY'].replace('Santan Valley','San Tan Valley')
testing_data['CITY'] = testing_data['CITY'].replace('San Tan Way','San Tan Valley')
testing_data['CITY'] = testing_data['CITY'].replace('San Tan Valley,','San Tan Valley')
testing_data['CITY'] = testing_data['CITY'].replace('SanTan Valley','San Tan Valley')
testing_data['CITY'] = testing_data['CITY'].replace('San Tan Way','San Tan Valley')
testing_data['CITY'] = testing_data['CITY'].replace('San Tan Valley,','San Tan Valley')
testing_data['CITY'] = testing_data['CITY'].replace('san tan valley','San Tan Valley')


testing_data['CITY'] = testing_data['CITY'].replace('MESA','Mesa')
testing_data['CITY'] = testing_data['CITY'].replace('mesa','Mesa')

testing_data['CITY'] = testing_data['CITY'].replace('Scottdale','Scottsdale')

testing_data['CITY'] = testing_data['CITY'].replace('Cold Canyon','Gold Canyon')


#consider only the top 4 city counts and occurances
top_values=list(testing_data['CITY'].value_counts().nlargest(4).index)

for index,row in testing_data.iterrows():
    if testing_data['CITY'][index] not in top_values:
        testing_data['CITY'][index]='Other'
minimum_year=min(testing_data['Year'])
maximum_year=max(testing_data['Year'])
print(minimum_year,maximum_year)

#yearly average mean and average performance
attendance_year={}
performance_year={}

ada_data=testing_data[testing_data['ADA']!=0.0]
performance_data=testing_data[testing_data['PERFORMANCE']!=0]
    
for year in range(minimum_year,maximum_year+1):
    ada_mean=ada_data[ada_data['Year']==year]['ADA'].mean()
    performance_mean=performance_data[performance_data['Year']==year]['PERFORMANCE'].mean()
    
    attendance_year[year]=ada_mean
    performance_year[year]=math.trunc(round(performance_mean,1) * 100) / 100
    
#fill missing values of ada and performance by average mean and performance for the year
for index,row in testing_data.iterrows():
    ada=testing_data['ADA'][index]
    performance=testing_data['PERFORMANCE'][index]
    year=testing_data['Year'][index]
    
    if ada==0.0:
        testing_data['ADA'][index]=attendance_year[year]
        
    if performance==0:
        testing_data['PERFORMANCE'][index]=performance_year[year]

#set ranges and assign a category for the range
modify_columns=list(testing_data.columns)
remove_elements=['PERSON_GU','SPED', 'FRM', 'CITY', 'STATE', 'ZIP','ETHNICITY_RACE', 'GENDER', 'BIRTH_COUNTRY', 'Year','SCHOOL', 'GRADE', 'ACTIVITY','REPEAT']
process_list = [x for x in modify_columns if x not in remove_elements]
for column in process_list:
    min_value = testing_data[column].min()
    max_value = testing_data[column].max()
    range_value = max_value - min_value
    range_value = max_value - min_value
    category_width = range_value // 5
    categories=[1,2,3,4,5]
    testing_data[column] = pd.cut(testing_data[column], bins=5, labels=categories)

#consider PS at grade 13 and KG as grade 14 and convert remaining string grade values to int
for index,row in testing_data.iterrows():
    grade=testing_data['GRADE'][index]
    
    if grade=='PS':
        testing_data['GRADE'][index]=13
    elif grade=='KG':
        testing_data['GRADE'][index]=14
    else:
        testing_data['GRADE'][index]=int(testing_data['GRADE'][index])
        
#set yes to 1 and no to 0 for columns specially abled, fee reduced and repeat. Also set gender to 1 if male and 0 if female
testing_data['SPED']=testing_data['SPED'].map({'Y': 1, 'N': 0})
testing_data['FRM']=testing_data['FRM'].map({'Y': 1, 'N': 0})
testing_data['GENDER']=testing_data['GENDER'].map({'M': 1, 'F': 0})
testing_data['REPEAT']=testing_data['REPEAT'].map({'YES': 1, 'NO': 0})

#consider only the top 4 activity counts and occurances
top_values=list(testing_data['ACTIVITY'].value_counts().nlargest(4).index)

for index,row in testing_data.iterrows():
    if testing_data['ACTIVITY'][index] not in top_values:
        testing_data['ACTIVITY'][index]='Other'

#get schools list
schools=list(testing_data['SCHOOL'])

#encode school names,ethinicity,activities to categorical values
le = LabelEncoder()

testing_data['CITY'] = le.fit_transform(testing_data['CITY'])
testing_data['ETHNICITY_RACE'] = le.fit_transform(testing_data['ETHNICITY_RACE'])
testing_data['SCHOOL'] = le.fit_transform(testing_data['SCHOOL'])
testing_data['ACTIVITY'] = le.fit_transform(testing_data['ACTIVITY'])

#store map of schoolname and encoded value pairs
school_map={}

transformed_schools=list(testing_data['SCHOOL'])

for i in range(len(transformed_schools)):
    if transformed_schools[i] not in school_map:
        school_map[transformed_schools[i]]=schools[i]
    else:
        pass
    
results_dataframe=pd.DataFrame([school_map],index=None)

target_file='school_map.csv'
target_path='/tmp/'+target_file
results_dataframe.to_csv(target_path)
s3_client.upload_file(target_path, bucket_name, target_file)

#drop state,zip and birth country
testing_data=testing_data.drop(['STATE','ZIP','BIRTH_COUNTRY'],axis=1)

target_file='new_data.csv'
target_path='/tmp/'+target_file
testing_data.to_csv(target_path,index=False)
s3_client.upload_file(target_path, bucket_name, target_file)



