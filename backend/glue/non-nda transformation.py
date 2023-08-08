# This script processes non-NDA datasets, performing data cleansing, and integrates information
# from NDA datasets, including details like school lunches and total enrollments, to create a unified dataset.

import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd
import copy

# Specify the S3 bucket name and target file name
bucket_name = 'higley-input-bucket'
target_file = 'non_nda_dataset.csv'

# Specify the file names for different data sources
land_file = 'Land_Developments_Raw.csv'
census_file = 'birthrate_gdp_us_raw.csv'
housing_file = 'housing_population_raw.csv'
enrollments_file = 'student_enrollments.csv'

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

# Land Developments Transformation
files_path = download_file(land_file)
land_df = pd.read_csv(files_path)
gilbert_df = land_df[land_df['MPA_FULLNAME'] == 'Gilbert']
qc_df = land_df[land_df['MPA_FULLNAME'] == 'Queen Creek']
master_df = gilbert_df.copy(deep=True)
master_df = master_df.append(qc_df)
master_df = master_df[master_df['DEVSTATUS'] == 'Complete']
master_df = master_df[master_df['END_YEAR'] != 0]
master_df = master_df[master_df['END_YEAR'] != 9999]
l = list(master_df['END_YEAR'])
l.sort()

minimum = min(l)
maximum = max(l)

print(minimum, maximum)

# Create a dictionary to store the count of developments per year
d = {}
for i in range(2001, maximum + 1):
    d[i] = 0
for i in l:
    for key in d.keys():
        if key >= i:
            d[key] += 1
land_final_df = pd.DataFrame(list(d.items()), columns=['Year', 'Developments'])

# Census Transformation
files_path = download_file(census_file)
census_df = pd.read_csv(files_path)
census_df.fillna(0, inplace=True)

# Housing Transformation
files_path = download_file(housing_file)
housing_population = pd.read_csv(files_path)
housing_population.fillna(0, inplace=True)

# Enrollment Count Transformation
files_path = download_file(enrollments_file)
enrollments = pd.read_csv(files_path)
years = {}
for index, row in enrollments.iterrows():
    student_name = enrollments['STUDENT_PERSON_GU'][index]
    year = enrollments['SCHOOL_YEAR'][index]
    if year not in years:
        years[year] = set()
    if student_name not in years[year]:
        years[year].add(student_name)
for key, val in years.items():
    years[key] = len(val)
years = dict(sorted(years.items()))
enrollments_df = pd.DataFrame(years, index=['Enrollments_Count'])
enrollments_df = enrollments_df.transpose()
enrollments_df = enrollments_df.reset_index()
enrollments_df = enrollments_df.rename(columns={'index': 'Year'})

# Lunch Transformation
lunches = copy.deepcopy(enrollments)
years = {}
for index, row in lunches.iterrows():
    student_name = lunches['STUDENT_PERSON_GU'][index]
    year = lunches['SCHOOL_YEAR'][index]
    frm = lunches['FRM'][index]
    if year not in years:
        years[year] = set()
    if student_name not in years[year] and frm == 'Y':
        years[year].add(student_name)
for key, val in years.items():
    years[key] = len(val)
years = dict(sorted(years.items()))
lunch_df = pd.DataFrame(years, index=['Lunches_Count'])
lunch_df = lunch_df.transpose()
lunch_df = lunch_df.reset_index()
lunch_df = lunch_df.rename(columns={'index': 'Year'})

# Merge Transformations
merged_df = pd.merge(census_df, housing_population, on=['Year'])
merged_df = pd.merge(merged_df, land_final_df, on=['Year'])
merged_df = pd.merge(merged_df, lunch_df, on=['Year'])
merged_df = pd.merge(merged_df, enrollments_df, on=['Year'])

# Specify the target path for the merged DataFrame
target_path = '/tmp/' + target_file

# Save the merged DataFrame as a CSV file
merged_df.to_csv(target_path, index=False)

# Upload the CSV file to the S3 bucket
s3_client.upload_file(target_path, bucket_name, target_file)
