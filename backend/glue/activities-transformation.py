import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd

# Define the name of the S3 bucket and the file names
bucket_name = 'higley-input-bucket'
file_name = 'student.activities.csv'
target_file = 'student_activities_details.csv'

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
print(files_path)

# Read the activities data from the downloaded file using pandas
activities = pd.read_csv(files_path)

# Create a dictionary to store student activities
students = {}

# Iterate over each row in the activities data
for index, row in activities.iterrows():
    # Extract relevant information from each row
    year = int(activities['SCHOOL_YEAR'][index])
    student_name = activities['STUDENT_PERSON_GU'][index]
    school_name = activities['SCHOOL'][index]
    activity_name = activities['ACTIVITY'][index]
    
    # Check if the year already exists in the students dictionary
    if year not in students:
        # If not, create a new dictionary for that year
        students[year] = {}
        
    # Store the school name and activity name for the student
    students[year][student_name] = (school_name, activity_name)

# Sort the dictionary by year
data = dict(sorted(students.items()))

# Convert the dictionary to a pandas DataFrame
df = pd.DataFrame.from_dict(data)

# Fill any missing values with 0
df = df.fillna(0)

# Define the target path for the resulting file
target_path = '/tmp/' + target_file

# Save the DataFrame as a CSV file
df.to_csv(target_path)

# Upload the target file to the S3 bucket
s3_client.upload_file(target_path, bucket_name, target_file)
