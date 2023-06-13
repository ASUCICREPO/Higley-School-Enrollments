import json
import time
import boto3

# Create an AWS Glue client
glue_client = boto3.client('glue')

def lambda_handler(event, context):
    # Define a list of scripts to run in AWS Glue
    scripts = ['activities-transformation', 'address-transformation', 'student-enrollments', 'Student-Enrollment-Transformation', 'non-nda transformation', 'new-intakes transformation']
    
    # Start the timer to measure the execution time
    start = time.time()
    
    def glue_content(script):
        while True:
            time.sleep(5)
            
            # Get the status of the job run
            status_detail = glue_client.get_job_run(JobName=script, RunId=response.get("JobRunId"))
            status = status_detail.get("JobRun").get("JobRunState")
            
            # Check if the job run has failed
            if status == 'FAILED':
                return False
            
            # Check if the job run has succeeded
            if status == 'SUCCEEDED':
                return True
            
            # If the job run is still in progress, continue waiting
            
    try:
        # Iterate over each script and run it in AWS Glue
        for script in scripts:
            print(script)
            
            # Start the job run for the script
            response = glue_client.start_job_run(JobName=script)
            
            # Check if the job run was successfully started
            if response['ResponseMetadata']['HTTPStatusCode'] == 200:
                # Check the status of the job run
                status = glue_content(script)
                print(status)
                
                # If the job run failed, break out of the loop
                if status == False:
                    break
                            
    except Exception as e:
        print('Failed')
        
    # Calculate the elapsed time for running the scripts
    elapsed_time = (time.time() - start) 
    print('Time to Run ' + str(elapsed_time))
    
    # Invoke another Lambda function asynchronously
    lambda_client = boto3.client('lambda')
    response = lambda_client.invoke(
        FunctionName='higley-cleaning-lambda',
        InvocationType='Event',
        Payload='{"key1": "value1", "key2": "value2"}'
    )
    
    # Return a response indicating a successful execution
    return {
        'statusCode': 200,
        'body': True
    }
