# This script merges non-NDA data with school and grade information, along with the total count of new admissions
# for the respective year, resulting in the creation of an integrated dataset.

import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd
import copy

# Set up AWS S3 client and bucket name
bucket_name = 'higley-input-bucket'
file_name = 'student_enrollments.csv'
non_nda_filename = 'non_nda_dataset.csv'


s3_client = boto3.client('s3')

def download_file(file_name):
    """
    Download file from AWS S3 bucket
    """
    try:
        path = '/tmp/' + file_name
        s3_client.download_file(bucket_name, file_name, path)
        return path
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            print("The object does not exist.")
        else:
            raise

# Download required files
files_path = download_file(file_name)
non_nda_files_path = download_file(non_nda_filename)

# Process student enrollments
target_file = 'new_intakes_by_school_raw.csv'
enrollment = pd.read_csv(files_path)
years = {}
enrollment_data = {}
enrollment_data['STUDENT_PERSON_GU'] = []
enrollment_data['SCHOOL_YEAR'] = []
enrollment_data['SCHOOL'] = []
enrollment_data['GRADE'] = []
for index, row in enrollment.iterrows():
    student_name = enrollment['STUDENT_PERSON_GU'][index]
    year = enrollment['SCHOOL_YEAR'][index]
    school = enrollment['SCHOOL'][index]
    grade = enrollment['GRADE'][index]
    if year not in years:
        years[year] = set()
    if student_name not in years[year]:
        years[year].add(student_name)
        enrollment_data['STUDENT_PERSON_GU'].append(student_name)
        enrollment_data['SCHOOL_YEAR'].append(year)
        enrollment_data['SCHOOL'].append(school)
        enrollment_data['GRADE'].append(grade)
enrollment_data = pd.DataFrame(enrollment_data)
student_data = {}
# Extract relevant data from student enrollments
for index, row in enrollment_data.iterrows():
    student_name = enrollment_data['STUDENT_PERSON_GU'][index]
    year = enrollment_data['SCHOOL_YEAR'][index]
    school = enrollment_data['SCHOOL'][index]
    grade = enrollment_data['GRADE'][index]
    if year not in student_data:
        student_data[year] = {}
    if grade not in student_data[year]:
        student_data[year][grade] = {}
    if school not in student_data[year][grade]:
        student_data[year][grade][school] = set()
    student_data[year][grade][school].add(student_name)
school_map = {
    'KG': 'PS',
    '01': 'KG',
    '02': '01',
    '03': '02',
    '04': '03',
    '05': '04',
    '06': '05',
    '07': '06',
    '08': '07',
    '09': '08',
    '10': '09',
    '11': '10',
    '12': '11'
}
school_list = []
for index, row in enrollment.iterrows():
    school_name = enrollment['SCHOOL'][index]
    if school_name not in school_list:
        school_list.append(school_name)

minimum_year = min(list(enrollment_data['SCHOOL_YEAR']))
maximum_year = max(list(enrollment_data['SCHOOL_YEAR']))
print(minimum_year, maximum_year)

years_list = list(range(minimum_year + 1, maximum_year + 1))
grades = ['KG', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
result = {}
# Initialize result dictionary
for year in years_list:
    for grade in grades:
        for school in school_list:
            if year not in result:
                result[year] = {}
            if grade not in result[year]:
                result[year][grade] = {}
            if school not in result[year][grade]:
                result[year][grade][school] = 0
# Calculate new intakes by school
for current_year in range(minimum_year + 1, maximum_year + 1):
    for current_grade in student_data[current_year]:
        for current_school in student_data[current_year][current_grade]:
            current_set = student_data[current_year][current_grade][current_school]
            previous_year = current_year - 1
            if current_grade in school_map:
                previous_grade = school_map[current_grade]
                for previous_school in student_data[previous_year][previous_grade]:
                    previous_set = student_data[previous_year][previous_grade][previous_school]
                    current_set = current_set.difference(previous_set)
                result[current_year][current_grade][current_school] = len(current_set)
new_result = {}
new_result['Year'] = []
new_result['Grade'] = []
new_result['School'] = []
new_result['New_Intake'] = []
# Prepare new result dictionary for output
for year in years_list:
    for grade in grades:
        for school in school_list:
            new_result['Year'].append(year)
            new_result['Grade'].append(grade)
            new_result['School'].append(school)
            new_result['New_Intake'].append(result[year][grade][school])
df = pd.DataFrame(new_result)
# Prepare modelling data for correlation analysis
modelling_data = pd.read_csv(non_nda_files_path)
correlation_matrix = modelling_data.corr()
column_of_interest = 'Enrollments_Count'
columns_above_threshold = correlation_matrix.loc[:, correlation_matrix[column_of_interest] > 0.7].columns.tolist()
modelling_data = modelling_data[columns_above_threshold]
modelling_data = modelling_data.drop(column_of_interest, axis=1)[modelling_data['Year'] >= 2011]
data = pd.merge(modelling_data, df, on='Year', how='inner')
target_path = '/tmp/' + target_file
data.to_csv(target_path, index=False)
s3_client.upload_file(target_path, bucket_name, target_file)

# New Intakes
target_file = 'new_intakes_raw.csv'
enrollment_data = copy.deepcopy(enrollment)
student_transfers = {}
# Process student transfers
for index, row in enrollment_data.iterrows():
    year = enrollment_data['SCHOOL_YEAR'][index]
    student_name = enrollment_data['STUDENT_PERSON_GU'][index]
    grade = enrollment_data['GRADE'][index]
    if grade != 'KG' and grade != 'PS':
        grade = int(enrollment_data['GRADE'][index])
    if year not in student_transfers:
        student_transfers[year] = {}
        student_transfers[year]['PS'] = set()
        student_transfers[year]['KG'] = set()
        for j in range(1, 13):
            student_transfers[year][j] = set()
    student_transfers[year][grade].add(student_name)
transfers = dict(sorted(student_transfers.items()))
df = pd.DataFrame.from_dict(transfers)
df = df.fillna(0)
df = df.transpose()
df = df.reset_index()
df = df.rename(columns={'index': 'YEAR'})
new_df = df.copy()
new_df = new_df.drop('YEAR', axis=1)
years_length = len(new_df)
grades_length = len(new_df.columns)
transfers = [[{'old_total': 0, 'new_total': 0, 'repeated': 0, 'new_intake': 0, 'dropout': 0} for _ in range(grades_length)] for _ in range(years_length)]
for i in range(years_length):
    for j in range(grades_length):
        if i + 1 not in range(years_length) or j + 1 not in range(grades_length):
            break
        else:
            new_i = i + 1
            new_j = j + 1
            batch_a = new_df.iloc[i, j]
            batch_b = new_df.iloc[new_i, new_j]
            repeat = batch_b.intersection(batch_a)
            intake = batch_b.difference(batch_a)
            discontinue = batch_a.difference(batch_b)
            transfers[new_i][new_j]['old_total'] = len(batch_a)
            transfers[new_i][new_j]['new_total'] = len(batch_b)
            transfers[new_i][new_j]['repeated'] = len(repeat)
            transfers[new_i][new_j]['new_intake'] = len(intake)
            transfers[new_i][new_j]['dropout'] = len(discontinue)
transfer_df = pd.DataFrame(transfers, columns=new_df.columns)
transfer_df.index = df['YEAR']
transfer_df = transfer_df.reset_index()
intakes_list = []
dropouts_list = []
repeat_list = []

# Calculate overall transfer statistics
for index, row in transfer_df.iterrows():
    intakes = 0
    dropouts = 0
    repeats = 0
    for stats in row[1:]:
        intakes += stats['new_intake']
        dropouts += stats['dropout']
        repeats += stats['repeated']
    intakes_list.append(intakes)
    dropouts_list.append(dropouts)
    repeat_list.append(repeats)
transfer_df['INTAKES'] = intakes_list
transfer_df['DROPOUTS'] = dropouts_list
transfer_df['REPEAT'] = repeat_list
modelling_data = pd.read_csv(non_nda_files_path)
correlation_matrix = modelling_data.corr()
column_of_interest = 'Enrollments_Count'
columns_above_threshold = correlation_matrix.loc[:, correlation_matrix[column_of_interest] > 0.7].columns.tolist()
transfer_df = transfer_df[['YEAR', 'INTAKES', 'DROPOUTS', 'REPEAT']]
modelling_data = modelling_data[columns_above_threshold]
modelling_data = modelling_data.drop(column_of_interest, axis=1)[modelling_data['Year'] >= 2011]
modelling_data = modelling_data.rename(columns={'Year': 'YEAR'})
data = pd.merge(modelling_data, transfer_df, on='YEAR', how='inner')
target_path = '/tmp/' + target_file
data.to_csv(target_path, index=False)
s3_client.upload_file(target_path, bucket_name, target_file)
