import json
import time
import boto3

# Create an AWS Glue client
glue_client = boto3.client('glue')

def lambda_handler(event, context):
    # Start the job run for the 'cleaning-1' Glue job
    response = glue_client.start_job_run(JobName='cleaning-1')
    
    # Check if the job run was successfully started
    if response['ResponseMetadata']['HTTPStatusCode'] == 200:
        # Return True to indicate a successful execution
        return True
