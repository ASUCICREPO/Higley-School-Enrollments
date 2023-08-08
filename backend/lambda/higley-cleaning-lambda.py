# This lambda function triggers the execution of the 'cleaning-1' Glue job.

import json
import time
import boto3

glue_client = boto3.client('glue')  # Create a Glue client object

def lambda_handler(event, context):
    response = glue_client.start_job_run(JobName='cleaning-1')  # Start a Glue job run with the specified job name
    
    if response['ResponseMetadata']['HTTPStatusCode'] == 200:  # Check if the API response indicates a successful request
        return True  # Return True if the job run was successfully started
