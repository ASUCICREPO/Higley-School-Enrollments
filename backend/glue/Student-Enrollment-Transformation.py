import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd
import copy

# Specify the S3 bucket name and file name
bucket_name = 'higley-input-bucket'
file_name = 'student_enrollments.csv'

# Create an S3 client
s3_client = boto3.client('s3')

def download_file(file_name):
    # Download the file from the S3 bucket and save it to a local path
    try:
        path = '/tmp/' + file_name
        s3_client.download_file(bucket_name, file_name, path)
        return path
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            print("The object does not exist.")
        else:
            raise
        
# Download the file from S3 bucket
files_path = download_file(file_name)

# Student Transfers
target_file = 'student_transfers.csv'
student_enrollments = pd.read_csv(files_path)
students = {}
for index, row in student_enrollments.iterrows():
    # Extract relevant information from the student enrollments data
    year = student_enrollments['SCHOOL_YEAR'][index]
    school_name = student_enrollments['SCHOOL'][index]
    student_name = student_enrollments['STUDENT_PERSON_GU'][index]
    grade = student_enrollments['GRADE'][index]
    
    # Create a dictionary to store student information grouped by year and student name
    if year not in students:
        students[year] = {}
    if student_name not in students[year]:
        students[year][student_name] = (school_name, grade)
        
# Sort the student information by year and convert it to a DataFrame
students = dict(sorted(students.items()))
df = pd.DataFrame.from_dict(students)
df = df.fillna(0)

# Save the DataFrame as a CSV file
target_path = '/tmp/' + target_file
df.to_csv(target_path)

# Upload the CSV file to the S3 bucket
s3_client.upload_file(target_path, bucket_name, target_file)

# Student Movements
target_file = 'student_movements_grade_counts.csv'
enrollments = copy.deepcopy(student_enrollments)
enrollments = enrollments[['STUDENT_PERSON_GU', 'SCHOOL', 'SCHOOL_YEAR', 'GRADE']]
student_transfers = {}

# Group student transfers by school year, school name, and grade
for index, row in enrollments.iterrows():
    student_name = enrollments['STUDENT_PERSON_GU'][index]
    school_name = enrollments['SCHOOL'][index]
    school_year = enrollments['SCHOOL_YEAR'][index]
    student_grade = enrollments['GRADE'][index]
    
    if school_year not in student_transfers:
        student_transfers[school_year] = {}
    if school_name not in student_transfers[school_year]:
        student_transfers[school_year][school_name] = {}
    if student_grade != 'KG' and student_grade != 'PS':
        student_grade = int(student_grade)
        if student_grade not in student_transfers[school_year][school_name]:
            student_transfers[school_year][school_name][student_grade] = set()
        student_transfers[school_year][school_name][student_grade].add(student_name)

# Find the minimum and maximum years for student transfers
minimum_year = min(sorted(student_transfers.keys()))
maximum_year = max(sorted(student_transfers.keys()))
print(minimum_year, maximum_year)

# Create a list of unique school names
school_names = []
for i in range(minimum_year, maximum_year + 1):
    for j in student_transfers[i].keys():
        if j not in school_names:
            school_names.append(j)

# Create a dictionary to store student influx points
student_influx_points = {}
for year in range(minimum_year, maximum_year + 1):
    data = {col: {} for col in school_names}
    for row in school_names:
        for i in school_names:
            data[i][row] = {}
    student_influx_points[year] = pd.DataFrame(copy.deepcopy(data), index=school_names)

# Calculate student influx points based on student transfers
for year in student_transfers.keys():
    for school in student_transfers[year].keys():
        for grade in student_transfers[year][school].keys():
            current_set = student_transfers[year][school][grade]
            search_grade = int(grade) + 1
            search_year = year + 1
            if search_year in student_transfers.keys():
                for school_name in student_transfers[search_year].keys():
                    if search_grade in student_transfers[search_year][school_name]:
                        new_set = student_transfers[search_year][school_name][search_grade]
                        count = len(new_set.intersection(current_set))
                        if count != 0:
                            if search_grade not in student_influx_points[search_year].loc[school, school_name]:
                                student_influx_points[search_year].loc[school, school_name][search_grade] = 0
                            student_influx_points[search_year].loc[school, school_name][search_grade] += count

# Create a DataFrame to store student transfers
transfers = {}
transfers['YEAR'] = []
transfers['FROM'] = []
transfers['TO'] = []
transfers['GRADE'] = []
transfers['COUNT'] = []

# Populate the DataFrame with student transfer information
for year in range(minimum_year + 1, maximum_year + 1):
    data = student_influx_points[year]
    for row in school_names:
        for col in school_names:
            pairs = data.loc[row, col]
            for key, val in pairs.items():
                transfers['YEAR'].append(year)
                transfers['FROM'].append(row)
                transfers['TO'].append(col)
                transfers['GRADE'].append(key)
                transfers['COUNT'].append(val)

# Create a DataFrame from the transfers dictionary
school_df = pd.DataFrame(transfers)
target_path = '/tmp/' + target_file

# Save the DataFrame as a CSV file
school_df.to_csv(target_path, index=False)

# Upload the CSV file to the S3 bucket
s3_client.upload_file(target_path, bucket_name, target_file)
