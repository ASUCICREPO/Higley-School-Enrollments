# This lambda function operates once the model outcomes have been stored in the output bucket.
# It processes the output by initiating crawlers to examine the data, followed by updating the databases and tables.
# Subsequently, an Athena query is executed, and the QuickSight spice data is completely refreshed
# using the Glue tables through the Athena query engine.

import json
import boto3
import logging
import time
import timeit
import subprocess
import botocore
import shutil
import os
import datetime
# Initializing AWS clients and services
athena_client = boto3.client('athena')
crawler = boto3.client('glue')
quicksight_client = boto3.client('quicksight')
# Sender email addresses
SENDER = '########'
# AWS account ID
aws_account_id = '#########'
# Initializing AWS clients and services
s3 = boto3.resource('s3')
s3_client = boto3.client('s3')
sagemaker = boto3.client('sagemaker')
# Name of the SageMaker instance
sagemaker_instance='Higley-Bottomup'
# Name of the S3 bucket for output
bucket_name='higley-output-bucket'

def lambda_handler(event, context):
    # Listing objects in the S3 bucket
    response = s3_client.list_objects_v2(Bucket=bucket_name)
    items_count=response['KeyCount']
    
    print(items_count)
    
    if items_count==3 or items_count==6:
    # Checking the status of the SageMaker notebook instance
        response = sagemaker.describe_notebook_instance(NotebookInstanceName=sagemaker_instance)
        if response['NotebookInstanceStatus']!='Stopped':
            # Stopping the SageMaker notebook instance if it is not already stopped
            sagemaker.stop_notebook_instance(NotebookInstanceName=sagemaker_instance)
            
        def run_crawler(crawler_name,db_name,table_name,quicksight_athena):
            timeout_seconds = 600
            retry_seconds=10
            start_time = timeit.default_timer()
            abort_time = start_time + timeout_seconds
        
            def wait_until_ready():
                state_previous = None
                while True:
                    # Getting the state of the crawler
                    response_get = crawler.get_crawler(Name=crawler_name)
                    state = response_get["Crawler"]["State"]
                    print(state)
                    if state != state_previous:
                        state_previous = state
                    if state == "READY":  
                        return
                    if start_time > abort_time:
                        raise TimeoutError("The allocated time has elapsed")
                    time.sleep(retry_seconds)
            # Waiting until the crawler is ready
            wait_until_ready()
            # Starting the crawler
            response_start = crawler.start_crawler(Name=crawler_name)
            assert response_start["ResponseMetadata"]["HTTPStatusCode"] == 200
            # Waiting until the crawler is ready
            wait_until_ready()
            
            # Starting an Athena query execution
            response = athena_client.start_query_execution(
                    QueryString='SELECT * FROM '+table_name,
                    QueryExecutionContext={
                        'Database': db_name
                    },
                    ResultConfiguration={
                        'OutputLocation': 's3://higley-athena-results/'
                    }
                )
            
            # Generating an ingestion ID based on the current time
            now = datetime.datetime.now()
            ingestion_id=now.strftime("%Y-%m-%d-%H-%M-%S")
            
            # Listing QuickSight datasets
            response = quicksight_client.list_data_sets(AwsAccountId=aws_account_id)
            print(response)
    
            dataset_id=-1
            # Finding the dataset ID for the specified QuickSight dataset name
            for i in range(len(response['DataSetSummaries'])):
                if response['DataSetSummaries'][i]['Name']==quicksight_athena:
                    dataset_id=response['DataSetSummaries'][i]['DataSetId']
            # Creating an ingestion for the QuickSight dataset
            if dataset_id!=-1:
                response = quicksight_client.create_ingestion(
                    DataSetId=dataset_id,
                    IngestionId=ingestion_id,
                    AwsAccountId=aws_account_id,
                    IngestionType='FULL_REFRESH'
                )
    
                print(response)
        # Running the crawlers for different datasets
        run_crawler('total-students-crawler','total-students-db','total_students','total_students')
        run_crawler('repeating-students','repeating-students-db','repeating_students','repeating_students')
        run_crawler('new-intakes','new-intake-students-db','new_intake_students','new_intake_students')
        # Sending an email notification about completion
        SUBJECT = 'MODELLING COMPLETION'
        BODY_TEXT = 'Thank you for being patient. The Modelling has been completed, Kindly View the Dashboard on your aws account for the updated results.'
        RECIPIENT = s3.Object('higley-input-bucket', 'current_user.txt').get()['Body'].read().decode('utf-8')   
        
        ses_client = boto3.client('ses')
        response = ses_client.send_email(
                        Destination={
                            'ToAddresses': [
                                RECIPIENT,
                            ],
                        },
                        Message={
                            'Body': {
                                'Text': {
                                    'Charset': 'UTF-8',
                                    'Data': BODY_TEXT,
                                },
                            },
                            'Subject': {
                                'Charset': 'UTF-8',
                                'Data': SUBJECT,
                            },
                        },
                    Source=SENDER)
        
        print(response)
        # Updating the trigger status file in the input bucket
        upload_bucket_name = 'higley-input-bucket'
        file_name = 'trigger_status.txt'
        
        current_time = datetime.datetime.now()
        formatted_time = current_time.strftime("%Y-%m-%d_%H-%M-%S")
        file_key = 'last_model.txt'
        # Updating the last model file in the input bucket with the current time
        s3_client.put_object(Body=str(formatted_time), Bucket=upload_bucket_name, Key=file_key)
    
        obj = s3.Object(upload_bucket_name, file_name)
        response = obj.get()
        file_content = response['Body'].read().decode('utf-8')
        if file_content=='STARTED':
            # Updating the trigger status file to 'STOPPED' if it was 'STARTED'
            obj.put(Body='STOPPED')
        
        
        
            
        

