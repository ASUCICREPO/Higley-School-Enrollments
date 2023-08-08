# This script transforms student records categorized by years, school, and corresponding addresses lived
# into a new format where each row represents a student record, and each column within a row
# corresponds to the start year, end year, address, and zipcode where the specific student resided.

import sys
import json
import os
import boto3
import subprocess
import botocore
import shutil
import pandas as pd
import copy

# Define the name of the S3 bucket and the file names
bucket_name = 'higley-input-bucket'
file_name = 'person.address_history.csv'
target_file = 'student_addresses.csv'

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

# Read the locations data from the downloaded file using pandas
locations = pd.read_csv(files_path)

# Initialize variables to keep track of the maximum and minimum years
max_year = 0
min_year = 2099

# Iterate over each row in the locations data
for index, row in locations.iterrows():
    # Extract the start and end years from the dates in the row
    start = int(locations['START_DATE'][index].split()[0].split('-')[0])
    end = int(locations['END_DATE'][index].split()[0].split('-')[0])
    
    # Check if the start and end years are within valid ranges
    if start != 1900 and end != 2079:
        # Update the maximum and minimum years if necessary
        max_year = max(max_year, end)
        min_year = min(min_year, start)

# Create a dictionary to store people and their respective address date ranges
people_list = {}

# Iterate over each row in the locations data again
for index, row in locations.iterrows():
    # Extract the start and end years from the dates in the row
    start = int(locations['START_DATE'][index].split()[0].split('-')[0])
    end = int(locations['END_DATE'][index].split()[0].split('-')[0])
    
    # Adjust the start and end years if they are at the boundaries
    if start == 1900:
        start = min_year
    if end == 2079:
        end = max_year
            
    # Extract the person's unique identifier
    person = locations['PERSON_GU'][index]
    
    # Check if the person is already in the people_list dictionary
    if person not in people_list:
        # If not, create a new set to store address date ranges
        people_list[person] = set()
    
    # Add the address date range to the set for the person
    people_list[person].add((start, end))
    
# Create a deep copy of the people_list dictionary
new_people = copy.deepcopy(people_list)

# Iterate over each person in the new_people dictionary
for key, val in new_people.items():
    # Check if the person has more than one address date range
    if len(val) > 1:
        # Sort the address date ranges by start year and end year
        val = sorted(val, key=lambda x: (x[0], x[1]))
        
        # Initialize the initial range as (0, 0)
        initial = (0, 0)
        
        # Iterate over each address date range for the person
        for element in val:
            # If it is the first range, assign it to the initial range
            if initial[0] == 0 and initial[1] == 0:
                initial = element
                
            # For subsequent ranges, update the end year of the initial range
            else:
                prev_start = initial[0]
                end = element[1]
                
                initial = (prev_start, end)
    
    # If the person has only one address date range, assign it to the initial range
    else:
        for value in val:
            initial = value
        
    # Update the new_people dictionary with the final address date range for the person
    new_people[key] = initial
    
# Create a dictionary to store student addresses
students = {}

# Iterate over each row in the locations data again
for index, row in locations.iterrows():
    # Extract the person's unique identifier and address details
    student_name = locations['PERSON_GU'][index]
    city = locations['CITY'][index]
    state = locations['STATE'][index]
    zip_code = locations['ZIP'][index]
    
    # Check if the student is already in the students dictionary
    if student_name not in students:
        # If not, create a new dictionary for the student
        students[student_name] = {}
        
    # Store the city, state, zip code, start date, and end date for the student
    students[student_name]['CITY'] = city
    students[student_name]['STATE'] = state
    students[student_name]['ZIP'] = zip_code
    students[student_name]['START_DATE'] = new_people[student_name][0]
    students[student_name]['END_DATE'] = new_people[student_name][1]
    
# Convert the students dictionary to a pandas DataFrame
df = pd.DataFrame.from_dict(students)

# Transpose the DataFrame and reset the index
df = df.transpose()
df = df.reset_index()
df = df.rename(columns={'index': 'PERSON_GU'})

# Define the target path for the resulting file
target_path = '/tmp/' + target_file

# Save the DataFrame as a CSV file without including the index
df.to_csv(target_path, index=False)

# Upload the target file to the S3 bucket
s3_client.upload_file(target_path, bucket_name, target_file)
