import json
import boto3

def lambda_handler(event, context):
    # Define the name of the bucket and the file name
    bucket_name = '#######'
    file_name = 'trigger_status.txt'
    
    # Define email parameters
    SENDER = '######'
    RECIPIENT = '#######'
    SUBJECT = 'TRIGGER MODELLING'
    BODY_TEXT = 'The Modelling has been triggered'
    
    # Create an AWS Simple Email Service (SES) client
    ses_client = boto3.client('ses')

    # Create an AWS S3 resource and access the bucket
    s3 = boto3.resource('s3')
    bucket = s3.Bucket(bucket_name)
    
    # Check if the file exists in the bucket
    exists = False
    for obj in bucket.objects.filter(Prefix=file_name):
        if obj.key == file_name:
            exists = True
            break
    
    def send_email(BODY_TEXT):
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
        return response
    
    if exists == True:
        # Get the contents of the file if it exists
        obj = s3.Object(bucket_name, file_name)
        response = obj.get()
        file_content = response['Body'].read().decode('utf-8')
        
        if file_content == 'STARTED':
            # If the file content is 'STARTED', the modelling has already been triggered
            BODY_TEXT = 'Already Triggered cannot Trigger Again'
            
            # Send an email notification about the triggered status
            response=send_email(BODY_TEXT)
            
            # Return a response indicating that the modelling has already started
            return 'Already Started'
        else:
            # If the file content is not 'STARTED', update the file content to 'STARTED'
            obj.put(Body='STARTED')
        
    else:
        # If the file does not exist, create it with content 'STARTED'
        s3.Object(bucket_name, file_name).put(Body='STARTED')
       
    # Send an email notification about the triggered status
    response = send_email(BODY_TEXT)
    
    # Print the response from sending the email
    print(response)
    
    # Invoke another Lambda function asynchronously
    lambda_client = boto3.client('lambda')
    response = lambda_client.invoke(
        FunctionName='higley-transformations-lambda',
        InvocationType='Event',
        Payload='{"key1": "value1", "key2": "value2"}'
    )
    
    # Print the response from invoking the other Lambda function
    print(response)
    
    # Return a response indicating a successful execution
    return {
        'statusCode': 200,
        'body': True
    }
