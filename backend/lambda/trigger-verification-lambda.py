# This lambda function verifies if a model generation process is currently underway,
# preventing the initiation of another generation, and sends email notifications to the user
# prior to the commencement of the model generation.

import json
import boto3

def lambda_handler(event, context):
    bucket_name = 'higley-input-bucket'  # Name of the S3 bucket
    file_name = 'trigger_status.txt'  # Name of the trigger status file
    
    if 'emailID' in event:  # Check if 'emailID' key exists in the event dictionary
        email = event['emailID']  # Retrieve the value of 'emailID' key
    
    s3 = boto3.resource('s3')  # Create an S3 resource object
    s3_client = boto3.client('s3')  # Create an S3 client object
    
    s3_client.put_object(Body=email, Bucket=bucket_name, Key='current_user.txt')  # Store the email in 'current_user.txt' file in S3 bucket
    
    SENDER = '######'  # Sender email address
    RECIPIENT = s3.Object(bucket_name, 'current_user.txt').get()['Body'].read().decode('utf-8')  # Retrieve recipient email from 'current_user.txt' file in S3 bucket
    SUBJECT = 'TRIGGER MODELLING'  # Email subject
    BODY_TEXT = 'The Modelling has been successfully triggered, you will be notified on completion.'  # Email body text
    
    ses_client = boto3.client('ses')  # Create an SES client object

    bucket = s3.Bucket(bucket_name)  # Retrieve the S3 bucket object
    
    exists = False  # Flag to check if the trigger status file exists
    for obj in bucket.objects.filter(Prefix=file_name):  # Iterate over objects in the bucket with the given prefix
        if obj.key == file_name:  # Check if the object's key matches the trigger status file name
            exists = True  # Set the flag to indicate that the file exists
            break

    if exists == True:  # If the trigger status file exists
        obj = s3.Object(bucket_name, file_name)  # Get the trigger status file object
        response = obj.get()  # Retrieve the file's content
        file_content = response['Body'].read().decode('utf-8')  # Decode and store the file's content
        
        if file_content == 'STARTED':  # If the trigger status is 'STARTED'
            BODY_TEXT = 'Model Already Triggered! please try again in sometime'  # Update the email body text
            
            # Send an email to the recipient
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
                Source=SENDER
            )
            
            return 'Already Started'  # Exit the lambda function with a message indicating that the model has already been triggered
        else:
            obj.put(Body='STARTED')  # If the trigger status is not 'STARTED', update the file content to 'STARTED'
        
    else:  # If the trigger status file does not exist
        s3.Object(bucket_name, file_name).put(Body='STARTED')  # Create a new trigger status file and set its content to 'STARTED'
       
    # Send an email to the recipient
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
        Source=SENDER
    )
    
    print(response)  # Print the response from sending the email
    
    lambda_client = boto3.client('lambda')  # Create a Lambda client object
    response = lambda_client.invoke(
        FunctionName='higley-transformations-lambda',  # Name of the target Lambda function to invoke
        InvocationType='Event',  # Invoke the function asynchronously
        Payload='{"key1": "value1", "key2": "value2"}'  # Payload to pass to the target Lambda function
    )
    print(response)  # Print the response from invoking the target Lambda function
    
    return {
        'statusCode': 200,
        'body': True
    }  # Return a response indicating successful execution of the Lambda function
