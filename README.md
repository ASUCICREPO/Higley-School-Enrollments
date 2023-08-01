## Project Overview

The Higley Unified School District, one of Arizona's fastest growing school districts, with modest continued growth is a consortium of 16 schools that serve the areas of Gilbert and Queen Creek with more than 13000 students.

Predicting school enrollment is crucial for Higley when planning for a new school year:
- Plan for resources 
- Hire new teachers
- Build Infrastructure

If actual enrollments are lesser than projected enrollments 
- Over budgeting
- Wasted resources, Small class size, Layoffs, etc. 

If actual enrollments are greater than projected enrollments
- Under budgeting
- Not enough resources, Overcrowded class size, etc.

## Description
The Higley Unified School District, a rapidly growing educational institution in Arizona, comprises a consortium of 16 schools catering to the Gilbert and Queen Creek areas. With an expanding student population of over 13,000, accurately predicting school enrollments becomes paramount for effective planning and resource allocation for each new academic year.

Accurate enrollment prediction enables the district to proactively plan for essential resources, such as hiring new teachers and developing adequate infrastructure. By anticipating student numbers, Higley can avoid the negative consequences associated with deviations between projected and actual enrollments. Higley previously collaborated with a vendor who provided static enrollment predictions using Excel, resulting in an accuracy rate of only 80%. These predictions were limited to one-time use, necessitating the procurement of fresh predictions each year. Consequently, this approach incurred additional costs of approximately $20,000. Moreover, the inability to update or adjust predictions based on changing circumstances imposed significant constraints on the district's operational flexibility.

In instances where actual enrollments fall below projected numbers, overbudgeting occurs, leading to wasted resources and inefficient allocation of funds. The repercussions include maintaining small class sizes, which may not be cost-effective, and potential layoffs due to surplus staff. Conversely, when actual enrollments surpass projected figures, underbudgeting becomes a concern. The district may face a shortage of resources, resulting in overcrowded classrooms and compromised educational experiences for students.

To address the limitations posed by the previous vendor's static predictions and enhance their ability to forecast enrollment accurately, Higley Unified School District seeks an advanced solution that offers flexibility, higher accuracy, and the capacity for iterative predictions. By doing so, Higley aims to optimize resource allocation, avoid unnecessary expenses, and ensure an optimal learning environment for its students.

## Solution Outcome
The Arizona State University Cloud Innovation Center has developed a cutting-edge machine learning-based prediction engine that surpasses customer expectations by delivering an accuracy rate exceeding 90% with a deviation of less than 2% (customer requirement was a deviation less than 10%). The cost of implementing this solution is estimated to be approximately $50 per month.

The solution includes a state-of-the-art web portal that allows users to effortlessly upload data and view prediction results in a user-friendly interface. With this advanced system in place, Higley Unified School District gains the ability to generate up-to-date predictions dynamically, ensuring the accuracy and relevance of forecasted enrollment figures.

By leveraging this state-of-the-art solution, Higley Unified School District can effectively optimize their budget and resource allocation while ensuring an optimal learning environment for their students. The affordable cost of $50 per month makes this solution both accessible and cost-effective, providing Higley with a valuable tool for strategic decision-making and efficient management of their educational system.

## High Level Architecture
![hla](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/e90964bd-f2da-4910-b352-7965499693e1)

•	At a high level, the Higley Enrollment Prediction system offers users access to a dedicated website, providing two primary use cases: model generation and inference/viewing the result.

•	To generate a model, the user interacts with the system by uploading the required datasets and initiating the automated modeling process. Upon initiating the process, the user receives an email notification confirming that the automation has commenced, and the uploaded datasets are first processed by the pre-processing engine.

•	Once the pre-processing stage is complete, the cleaned data proceeds to the modeling process, where the necessary algorithms and techniques are applied to generate accurate predictions. The resulting predictions are then fed into a comprehensive dashboard. Simultaneously, the user is notified of the completion of the modeling process.

•	To access the updated and latest results, the user utilizes the portal to navigate to the dashboard. The dashboard provides a comprehensive view of the predictions, enabling users to make informed decisions based on the most recent insights and trends.

•	This high-level architecture ensures a seamless and efficient flow of data from dataset upload to preprocessing, modeling, and final result visualization. It empowers users to leverage the system's capabilities to generate accurate enrollment predictions and access real-time information through the intuitive dashboard, enhancing their ability to make informed decisions regarding resource allocation and planning within Higley Unified School District.


## Technical Architecture
![ta](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/e5210cdc-e9e9-474c-a064-f709abfd1d5b)

•	The technical architecture of the Higley Enrollment Prediction system comprises two main phases: model generation and result inference, each with distinct components and processes.

•	To provide users with access to the system, the Higley Enrollment Prediction website is developed using AWS Amplify and ReactJS, ensuring a responsive and user-friendly interface.

•	During the model generation phase, the user uploads datasets via the website's user interface. The uploaded files are stored in an S3 bucket, triggering an automatic Lambda function. This Lambda function initiates a sequence of Glue ETL (Extract, Transform, Load) jobs to preprocess and integrate the raw datasets, resulting in clean and consolidated data.

•	The preprocessed data is then stored back in the same input S3 bucket, ready for use in the modeling phase. Triggers within the system activate a Sagemaker instance, which, in turn, triggers the Sagemaker lifecycle configuration. The configuration runs Sagemaker notebook cells sequentially, executing the modeling process. The resulting model outputs are stored in an S3 output bucket for further analysis and reference.

•	Additionally, a preprocessing engine is triggered to run Glue crawlers over the datasets, generating metadata. This metadata is then utilized to execute an Athena query, which serves as input for the Quicksight dashboard.

•	To access the Quicksight dashboard, users can click the designated button on the Higley Enrollment Prediction website, redirecting them to the actual dashboard interface. This allows users to interact with the dashboard, visualizing the modeling results and gaining valuable insights.

•	The technical architecture described above ensures a seamless flow of data from dataset upload to preprocessing, modeling, and result visualization. Leveraging AWS services such as S3, Lambda, Glue, Sagemaker, Athena, and Quicksight, the system offers efficient data processing, modeling capabilities, and intuitive dashboard access to facilitate accurate enrollment predictions for the Higley Unified School District.


## User Guide / How to use

1.	Access the Higley School District website.
2.	If you already logged in previously, sign in with your credentials or else signup.
3.	Once loggined in the homepage, Click on start prediction to proceed to the next screen.
4.	If you would like to visit an already made prediction for the next year, click Yes else click No.
5.	If you click yes, you will be redirected to the AWS Quicksight dashboard displaying the results of Total Students, Repeating Students and New Intake student by School and Grade.
6.	If no is clicked, you can upload the datasets.
7.	Once the datasets are uploaded, click continue and the automated modelling starts, and you will be notified to your registered email.
8.	Kindly wait for the modelling process to finish, which takes approximately 210 minutes to complete. Later you will be notified through email on completion so you can infer the results from the web app.

## Solution outcome

The Arizona State University Cloud Innovation Center (ASU CIC) collaborates with the Higley School District to develop an AWS-based prototype tool aimed at achieving the following objectives:

•	Utilizing Machine Learning techniques to predict future enrollment.
•	Integrating real-time data on an iterative rolling basis to ensure up-to-date predictions.
•	Providing comprehensive analytics through a user-friendly dashboard.


## Project Flow and Approach

![mlp](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/6e98f865-1a83-4fd0-8143-4c5248cc61ba)


In the modern era, where data plays a central role, machine learning has emerged as a potent technique for extracting valuable insights and making accurate predictions from vast and intricate datasets. At the core of this process lies the machine learning pipeline (MLP), which comprises a sequence of interconnected steps designed to convert raw data into a trained and deployed machine learning model. In this presentation, we will delve into the distinct phases of an MLP and underscore their critical importance in constructing resilient and impactful machine learning solutions.

1.	Pre-processing:

Non-NDA Dataset Integration:
To create a comprehensive non-disclosure agreement (NDA) dataset, we integrated publicly available datasets such as land development, census, and housing data with NDA-protected school enrollment and school lunch data. This integration allowed us to gain a holistic understanding of factors influencing student outcomes.

NDA Dataset Utilization:

Academic Activities Dataset:
We utilized an academic activities dataset that provided a tabulated representation of students' activities for each academic school year. This dataset helped us analyze the impact of extracurricular involvement on student performance and engagement.

Residency Address Dataset:
Another essential dataset we leveraged was the residency address dataset, which contained student addresses along with start and end dates. This information enabled us to explore the relationship between student demographics and academic outcomes, considering factors like neighborhood characteristics and stability.

Streamlined Student Enrollments:
Ensuring data quality, we addressed duplicate records and occurrences of students within a single school year. We identified and eliminated duplicate entries, reducing the dataset size by approximately 12%. This process accounted for student transfers between schools, enabling us to focus on unique student experiences.

Historical New Intakes Table:
To analyze trends and changes over time, we created a comprehensive table called the Historical New Intakes Table. This table documented the total number of new intake students, categorized by school and grade, across multiple years. Analyzing this data helped identify enrollment patterns and evaluate the effectiveness of implemented programs and initiatives.

By integrating and pre-processing these diverse datasets, we established a solid foundation for our machine learning models. This ensured that our analysis was based on reliable and relevant information, empowering us to make informed decisions and draw meaningful conclusions in the subsequent stages of our project.

2.	Modelling:

MLP - Enrollment (Bucket enrollment prediction model)
![bepm](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/d680604a-e3d2-4faa-9fd8-2efad05ba7a2)


The Modelling phase consists of three key steps: Model Training and Evaluation, Model Optimization and Validation, and Model Deployment and Monitoring.

During Model Training and Evaluation, the prepared data is used to train a machine learning model. Various algorithms are applied based on the nature of the problem. The model is trained using a portion of the data, and its performance is assessed. To enhance the model's performance, techniques such as hyperparameter tuning and optimization are employed. This involves adjusting the model's parameters to find the optimal configuration that maximizes its performance on the validation dataset. Cross-validation techniques ensure the model's generalizability and its ability to perform well on unseen data.

Once the model is optimized and validated, it is ready for deployment. In our use case, we developed the Bucket enrollment prediction model, which combines three different models:

•	Model-1 predicts students who will repeat a grade in the Higley district in the following year, as well as those who are likely to drop out.

•	Model-2 predicts whether repeating students will continue in the same school within the Higley district or transfer to a new school.

•	Model-3 predicts the total number of new students entering the Higley school district based on historical trends.

By using this combined approach, we capture the dynamic flow of students within the district, accounting for factors that influence movements and enrollment changes.

Enrollment Prediction Models (integrated view)
![em](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/ba75b9c0-6fde-4b3b-8e75-01b508f06730)


To train the dataset, the XGBoost model is employed. XGBoost is a widely adopted and efficient open-source implementation of the gradient boosted trees algorithm. This algorithm is designed to be flexible, portable, and highly efficient. It combines the estimates of multiple simpler models to accurately predict the target variable in a supervised learning setting.

MODEL - 1 (STUDENT DROPOUT)
The first model is a classifier that utilizes historical data containing both NDA and non-NDA information to categorize students as repeating (1) or non-repeating (0). The "REPEAT" attribute is added as the output parameter, where a value of 1 indicates the student continues in the Higley school district, while 0 denotes dropout. This model allows us to identify the number of students repeating in the next academic year and their respective grade counts.

MODEL - 2 (REPEATING STUDENTS)
The second model is a classifier focused on repeating students. It considers student-related information and non-NDA details to determine whether a repeating student will continue in the same school (0) or transfer to a different eligible school within the Higley district (1). The "REPEAT_SCHOOL" attribute is added as the output parameter, providing insights into whether students repeat in the same school or move to another based on their behavior patterns. If a student repeats in the same school, they are added to the corresponding school and grade bucket. Otherwise, a separate classification model is employed to predict the most probable school the student will attend based on historical data.

MODEL - 3 (NEW STUDENTS)
The third model employs regression techniques to predict the total number of new students that will join the Higley schools in the next academic year. This prediction is based on historical data regarding new intakes and school enrollments. By using this model, we can fill the buckets with all the students who will join the schools in the upcoming year.

To enhance the model's accuracy, an iterative training process is adopted. The current prediction results serve as training data for future enrollment predictions. By incorporating new information and retraining the model on the complete dataset, the accuracy of predictions strengthens over time. This iterative training approach ensures that the model continuously adapts to the changing enrollment patterns and improves its predictive capabilities, providing more accurate forecasts to support the planning and decision-making processes within the Higley School District


3.	Post Processing:
As mentioned, in this stage we refresh the datasets used by the dashboard with the model prediction outputs. This allows us to incorporate the latest predictions generated by the models into the datasets, ensuring that the dashboard presents the most up-to-date information. By integrating the predictions, we enhance the accuracy and relevance of the data presented in the dashboard.

In addition to refreshing the datasets, we have implemented an automated email notification system. This system plays a crucial role in communicating with the users and keeping them informed about the completion of the modeling process. Once the models have finished processing the data and generating predictions, an email is automatically sent to the user. This email serves as a notification, indicating that the modeling process is complete and a direct link to access the dashboard.

By sending this email, we ensure that the users are promptly informed about the availability of the updated predictions and can conveniently access the dashboard to explore the results. This streamlines the communication process and allows users to stay engaged with the project and make timely decisions based on the latest insights.

## Model Test Results(2023):

ACTUAL SCHOOL DATA FOR 2023:
![actual](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/98cd1b92-a8f1-42d0-971e-a8d342460f04)


PREDICTED SCHOOL ENROLLMENT FOR 2023:
![predicted](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/ce67189e-af16-4edb-af81-afd0ea714559)


## Model Card
![mc](https://github.com/ASUCICREPO/Higley-School-Enrollments/assets/98139549/b357fa44-6405-40b6-be74-949434ba6583)



### Developers

1. Sreekar Manchukonda
   - LinkedIn: https://www.linkedin.com/in/sreekar-manchukonda/
   - GitHub: https://github.com/SreekarManchukonda
2. Anjali Srivastava
   - LinkedIn: https://www.linkedin.com/in/anjalisrivastava/
   - GitHub: https://github.com/AnjaliSrivastava29

### Architect

Arun Arunachalam
- LinkedIn: https://www.linkedin.com/in/arunarunachalam/

### Program Manager

Jubleen Vilku
- LinkedIn: https://www.linkedin.com/in/jubleen-vilku/

## License(MIT) 
