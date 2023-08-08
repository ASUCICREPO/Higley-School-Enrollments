# This lambda function handles the task of removing a file from a temporary bucket upon a trigger event,
# and subsequently copies the same file to the designated input bucket.

import json
import boto3

def lambda_handler(event, context):
    source_bucket = event['Records'][0]['s3']['bucket']['name']  # Extract the name of the source S3 bucket from the event
    key = event['Records'][0]['s3']['object']['key']  # Extract the key (path) of the object that triggered the event in the source bucket
    
    destination_bucket = 'higley-input-bucket'  # Name of the destination S3 bucket
    
    s3 = boto3.client('s3')  # Create an S3 client object
    
    try:
        download_path = '/tmp/{}'.format(key)  # Specify the local path where the file will be downloaded
        
        # Download the file from the source bucket to the specified local path
        s3.download_file(source_bucket, key, download_path)
        
        # Upload the downloaded file to the destination bucket with the same key (path)
        s3.upload_file(download_path, destination_bucket, key)
        
        # Delete the original object from the source bucket
        s3.delete_object(Bucket=source_bucket, Key=key)
        
        print('File uploaded successfully.')
    except Exception as e:
        print(e)
