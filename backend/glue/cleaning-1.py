import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd
import copy
import statistics
import time

bucket_name='higley-input-bucket'
target_file='cleaned_bottomup_new.csv'
addresses_file='student_addresses.csv'
activities_file='student_activities_details.csv'
enrollments_file='student_transfers.csv'
students_file='student_enrollments.csv'
attendance_file='student.attendance.csv'
benchmarks_file='student.benchmarks.csv'
demographics_file='student.demographics.csv'
non_nda_file='non_nda_dataset.csv'
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
address_path=download_file(addresses_file)
activities_path=download_file(activities_file)
enrollments_path=download_file(enrollments_file)
students_path=download_file(students_file)
attendance_path=download_file(attendance_file)
benchmarks_path=download_file(benchmarks_file)
demographics_path=download_file(demographics_file)
non_nda_path=download_file(non_nda_file)
addresses=pd.read_csv(address_path)
activities=pd.read_csv(activities_path)
enrollments=pd.read_csv(enrollments_path)
students=pd.read_csv(students_path)
activities=activities.rename(columns={'Unnamed: 0': 'PERSON_GU'})
enrollments=enrollments.rename(columns={'Unnamed: 0': 'PERSON_GU'})
students=students.rename(columns={'STUDENT_PERSON_GU': 'PERSON_GU'})

enrollment_columns=list(enrollments.columns)
enrollment_columns.pop(0)
print(enrollment_columns)

minimum_year=9999
maximum_year=0

for i in range(len(enrollment_columns)):
    minimum_year=min(int(enrollment_columns[i]),minimum_year)
    maximum_year=max(int(enrollment_columns[i]),maximum_year)
print(minimum_year,maximum_year)

enrollments=enrollments.drop(str(maximum_year),axis=1)
students=students.drop(['ENTER_DATE','LEAVE_DATE','SCHOOL','GRADE'],axis=1)
active_years={}
for index,row in students.iterrows():
    student_name=students['PERSON_GU'][index]
    year=students['SCHOOL_YEAR'][index]
    if student_name not in active_years:
        active_years[student_name]=[]
    active_years[student_name].append(year)
students=students.drop('SCHOOL_YEAR',axis=1)   
students=students.drop_duplicates(subset='PERSON_GU', keep='last')
merged_df = pd.merge(students, enrollments, on='PERSON_GU', how='left')
merged_df = pd.merge(merged_df, addresses, on='PERSON_GU', how='left')
merged_df = pd.merge(merged_df, activities, on='PERSON_GU', how='left')
merged_df=merged_df.fillna(0)
merged=copy.deepcopy(merged_df)
for i in range(minimum_year,maximum_year):
    merged[i]=0
for index,row in merged.iterrows():
    for year in range(minimum_year,maximum_year):
        left=str(year)+'_x'
        right=str(year)+'_y'
        if merged[left][index]!='0' and merged[left][index]!=0:
            left_value=eval(merged[left][index])
        else:
            left_value='0'
        if merged[right][index]!='0' and merged[right][index]!=0:
            right_value=eval(merged[right][index])
        else:
            right_value='0'
        if left_value!='0' and right_value!='0':
            merged[year][index]=(left_value[0],left_value[1],right_value[1])
        elif left_value!='0' and right_value=='0':
            merged[year][index]=(left_value[0],left_value[1],'')
        elif right_value!='0' and left_value=='0':
            merged[year][index]=(right_value[0],'',right_value[1])
        else:
            merged[year][index]='0'
            pass
for i in range(minimum_year,maximum_year):
    merged=merged.drop(str(i)+'_x',axis=1)
    merged=merged.drop(str(i)+'_y',axis=1)
final_merge=copy.deepcopy(merged)
final_merge=final_merge.drop(['START_DATE','END_DATE'],axis=1)
attendance=pd.read_csv(attendance_path)
benchmarks=pd.read_csv(benchmarks_path)
demographics=pd.read_csv(demographics_path)
attendance=attendance.rename(columns={'STUDENT_PERSON_GU':'STUDENT_GU'})
demographics=demographics.rename(columns={'STUDENT_PERSON_GU':'STUDENT_GU'})
final_merge['ADA']=0.0
final_merge['PERFORMANCE']=0
final_merge['ETHNICITY_RACE']=0
final_merge['GENDER']=0
final_merge['BIRTH_COUNTRY']=0
for index,row in final_merge.iterrows():
    student_name=final_merge['PERSON_GU'][index]
    if student_name in list(attendance['STUDENT_GU']):
        data=attendance[attendance['STUDENT_GU']==student_name]
        rows=data.shape[0]
        total=float(sum(list(data['ADA'])))
        final_merge['ADA'][index]=total/rows
    if student_name in list(benchmarks['STUDENT_GU']):
        data=benchmarks[benchmarks['STUDENT_GU']==student_name]
        rows=data.shape[0]
        total=sum(list(data['PERFORMANCE']))
        final_merge['PERFORMANCE'][index]=total/rows
    if student_name in list(demographics['STUDENT_GU']):
        data=demographics[demographics['STUDENT_GU']==student_name]
        final_merge['ETHNICITY_RACE'][index]=list(data['ETHNICITY_RACE'])[0]
        final_merge['GENDER'][index]=list(data['GENDER'])[0]
        final_merge['BIRTH_COUNTRY'][index]=list(data['BIRTH_COUNTRY'])[0]
all_columns=list(final_merge.columns)
years=list(range(minimum_year,maximum_year))
result = [x for x in all_columns if x not in years]
melted_df = pd.melt(final_merge, id_vars=result, var_name='Year', value_name='Details')
melted_df=melted_df[melted_df['Details']!='0']
melted_df=melted_df[melted_df['Details']!=0]
melted_df['SCHOOL']=None
melted_df['GRADE']=None
melted_df['ACTIVITY']=None
for index,row in melted_df.iterrows():
    details=melted_df['Details'][index]
    melted_df['SCHOOL'][index]=details[0]
    melted_df['GRADE'][index]=details[1]
    melted_df['ACTIVITY'][index]=details[2]
melted_df=melted_df[melted_df['GRADE']!='']
melted_df=melted_df.drop('Details',axis=1)
modelling_data=pd.read_csv(non_nda_path)
correlation_matrix = modelling_data.corr()
column_of_interest = 'Enrollments_Count'
columns_above_threshold = correlation_matrix.loc[:, correlation_matrix[column_of_interest] > 0.7].columns.tolist()
columns_above_threshold.remove('Year')
columns_above_threshold.remove(column_of_interest)
for column_name in columns_above_threshold:
    melted_df[column_name]=0
for index,row in melted_df.iterrows():
    year=melted_df['Year'][index]
    data=modelling_data[modelling_data['Year']==year]
    for column_name in columns_above_threshold:
        melted_df[column_name][index]=list(data[column_name])[0]
melted_df['REPEAT']='NO'
for index,row in melted_df.iterrows():
    student_name=melted_df['PERSON_GU'][index]
    year=melted_df['Year'][index]
    if year+1 in active_years[student_name]:
        melted_df['REPEAT'][index]='YES'
melted_df=melted_df.replace('', 'None')
for index,row in melted_df.iterrows():
    student_name=melted_df['PERSON_GU'][index]
    year=melted_df['Year'][index]
    try:
        if year>=2016:
            data=attendance[attendance['STUDENT_GU']==student_name]
            data=data[data['SCHOOL_YEAR']==year]
            melted_df['ADA'][index]=list(data['ADA'])[0]
            data=benchmarks[benchmarks['STUDENT_GU']==student_name]
            data=data[data['SCHOOL_YEAR']==year]
            melted_df['PERFORMANCE'][index]=list(data['PERFORMANCE'])[0]
    except Exception as e:
        pass
target_path='/tmp/'+target_file
melted_df.to_csv(target_path,index=False)
s3_client.upload_file(target_path, bucket_name, target_file)
glue_client = boto3.client('glue')
def glue_content(script):
    while(1):
        time.sleep(10)
        status_detail = glue_client.get_job_run(JobName=script, RunId = response.get("JobRunId"))
        status = status_detail.get("JobRun").get("JobRunState")
        if status=='FAILED':
            return False
        if status=='SUCCEEDED':
            return True 
        else:
            continue
response = glue_client.start_job_run(JobName='cleaning-2')
if response['ResponseMetadata']['HTTPStatusCode']==200:
    status=glue_content('cleaning-2')
    if status==True:
        sm_client = boto3.client('sagemaker')
        notebook_instance_name = 'Higley-Bottomup'
        response = sm_client.describe_notebook_instance(NotebookInstanceName=notebook_instance_name)
        if response['NotebookInstanceStatus']=='Stopped':
            response = sm_client.start_notebook_instance(NotebookInstanceName=notebook_instance_name)
        	