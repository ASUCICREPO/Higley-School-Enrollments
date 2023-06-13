import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd
import os
import copy
from datetime import datetime

# Define the name of the S3 bucket and the file names
bucket_name = 'higley-input-bucket'
file_name = 'student.enrollments.csv'
target_file = 'student_enrollments.csv'

# Create an S3 client
s3_client = boto3.client('s3')

def download_file(file_name):
    try:
        # Define the local path to download the file to
        path = '/tmp/' + file_name
        
        # Download the file from the S3 bucket
        s3_client.download_file(bucket_name, file_name, path)
        
        # Return the path to the downloaded file
        return path
        
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            print("The object does not exist.")
        else:
            raise

# Download the file from the S3 bucket
files_path = download_file(file_name)
enrollments = pd.read_csv(files_path)

# Remove duplicate entries from the enrollments data
enrollments = enrollments.drop_duplicates()

def convert(x):
    # Convert date string to datetime object
    return datetime.strptime(x.split()[0], "%Y-%m-%d").date()

# Convert the ENTER_DATE and LEAVE_DATE columns to datetime objects
enrollments['ENTER_DATE'] = enrollments['ENTER_DATE'].apply(convert)
enrollments['LEAVE_DATE'] = enrollments['LEAVE_DATE'].apply(convert)

# Find the unique school years
unique_years = enrollments['SCHOOL_YEAR'].unique()
minimum_year = min(unique_years)
maximum_year = max(unique_years)

# Create a dictionary to store academic start and end dates for each school year
years = {}
for year in range(minimum_year, maximum_year + 1):
    years[year] = {}
    data = enrollments[enrollments['SCHOOL_YEAR'] == year]
    years[year]['ACADEMIC_START'] = data['ENTER_DATE'].mode()[0]
    years[year]['ACADEMIC_END'] = data['LEAVE_DATE'].mode()[0]

# Create a DataFrame from the years dictionary
academic_calendar = pd.DataFrame(years)
academic_calendar = academic_calendar.transpose()

# Create a dictionary to store duplicate entries for each student in each school year
duplicates = {}
for index, row in enrollments.iterrows():
    student_name = enrollments['STUDENT_PERSON_GU'][index]
    school_year = enrollments['SCHOOL_YEAR'][index]
    if student_name not in duplicates:
        duplicates[student_name] = {}
    if school_year not in duplicates[student_name]:
        duplicates[student_name][school_year] = 0
    duplicates[student_name][school_year] += 1

# Find the duplicate entries (students with more than one entry in a school year)
duplicate = []
for key, val in duplicates.items():
    for k, v in val.items():
        if v > 1:
            duplicate.append((key, k))

# Create a dictionary to store information about students with duplicate entries
information = {}
for value in duplicate:
    student_name = value[0]
    year = value[1]
    data = enrollments[enrollments['STUDENT_PERSON_GU'] == student_name]
    data = data[data['SCHOOL_YEAR'] == year]
    minimum_date = min(list(data['ENTER_DATE']))
    maximum_date = max(list(data['LEAVE_DATE']))
    data = data.iloc[-1]
    school = data['SCHOOL']
    if student_name not in information:
        information[student_name] = {}
    if year not in information[student_name]:
        information[student_name][year] = ()
    information[student_name][year] = (school, minimum_date, maximum_date)

# Remove duplicate entries from the enrollments data
enrollments = enrollments.drop_duplicates(subset=['STUDENT_PERSON_GU', 'SCHOOL_YEAR'])

# Update the enrollments data with the information from students with duplicate entries
count = 0
for key, val in information.items():
    for k, v in val.items():
        count += 1
        enrollments.loc[(enrollments['STUDENT_PERSON_GU'] == key) & (enrollments['SCHOOL_YEAR'] == k), 'SCHOOL'] = v[0]
        enrollments.loc[(enrollments['STUDENT_PERSON_GU'] == key) & (enrollments['SCHOOL_YEAR'] == k), 'ENTER_DATE'] = v[1]
        enrollments.loc[(enrollments['STUDENT_PERSON_GU'] == key) & (enrollments['SCHOOL_YEAR'] == k), 'LEAVE_DATE'] = v[2]

# Set the TRANSFER_STUDENT column values
enrollments['TRANSFER_STUDENT'] = 0
for index, row in enrollments.iterrows():
    year = enrollments['SCHOOL_YEAR'][index]
    enter_date = enrollments['ENTER_DATE'][index]
    leave_date = enrollments['LEAVE_DATE'][index]
    academic_start = academic_calendar.loc[year][0]
    academic_end = academic_calendar.loc[year][1]
    if enter_date == academic_start and leave_date == academic_end:
        enrollments['TRANSFER_STUDENT'][index] = 0
    else:
        enrollments['TRANSFER_STUDENT'][index] = 1

# Create a dictionary to store student name changes
name_changes = {}
for index, row in enrollments.iterrows():
    if index in enrollments:
        transfer = enrollments['TRANSFER_STUDENT'][index]
        if transfer == 1:
            current_id = enrollments['STUDENT_PERSON_GU'][index]
            year = enrollments['SCHOOL_YEAR'][index]
            student_grade = enrollments['GRADE'][index]
            sped = enrollments['SPED'][index]
            frm = enrollments['FRM'][index]
            enter_date = enrollments['ENTER_DATE'][index]
            leave_date = enrollments['LEAVE_DATE'][index]
            academic_start = academic_calendar.loc[year][0]
            academic_end = academic_calendar.loc[year][1]
            if enter_date != academic_start and leave_date == academic_end:
                data = enrollments[enrollments['TRANSFER_STUDENT'] == 1]
                data = enrollments[enrollments['SCHOOL_YEAR'] == year]
                data = data[data['GRADE'] == student_grade]
                data = data[data['SPED'] == sped]
                data = data[data['FRM'] == frm]
                data = data[data['LEAVE_DATE'] < enter_date]
                data = data[data['ENTER_DATE'] == academic_start]
                if len(data) != 0:
                    student_information = data[data['LEAVE_DATE'] == max(list(data['LEAVE_DATE']))]
                    enrollments = enrollments.drop(student_information.index[0])
                    past_id = list(student_information['STUDENT_PERSON_GU'])[0]
                    name_changes[past_id] = current_id
                    enrollments['STUDENT_PERSON_GU'] = enrollments['STUDENT_PERSON_GU'].replace(past_id, current_id)
                    enrollments.loc[enrollments['STUDENT_PERSON_GU'] == current_id, 'TRANSFER_STUDENT'] = 0

# Filter out transfer students
enrollments = enrollments[enrollments['TRANSFER_STUDENT'] == 0]

# Select relevant columns for student enrollments
student_enrollments = enrollments[['STUDENT_PERSON_GU', 'SCHOOL', 'SCHOOL_YEAR', 'ENTER_DATE', 'LEAVE_DATE', 'GRADE', 'SPED', 'FRM']]

# Define the target path for the output file
target_path = '/tmp/' + target_file

# Save the student enrollments data to a CSV file
student_enrollments.to_csv(target_path, index=False)

# Upload the output file to the S3 bucket
s3_client.upload_file(target_path, bucket_name, target_file)
