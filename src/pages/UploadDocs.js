import React from "react";
var AWS = require("aws-sdk");
import "./css/UploadDocs.css";
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component41, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv, Component39, Uploadfiles } from '../ui-components';

const UploadDocs = () => {
    const [file, setFile] = React.useState();

    var bucket = new AWS.S3({
        accessKeyId: process.env.REACT_APP_ACCESS_ID,
        secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
        // sessionToken: "SESSION_TOKEN", // optional you can remove if you don't want pass
        region: 'us-east-1'
      });


    function uploadFile(event, fileName, file, folderName) {
        const params = {
          Bucket: "BUCKET_NAME",
          Key: folderName + fileName,
          Body: file,
          ContentType: file.type
        };
    
        this.bucket.upload(params, (err, data) => {
          if (err) {
            console.log('There was an error uploading your file: ', err);
            return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
        });
    }

    function uploadSampleFile (event) {
        var progressDiv = document.getElementById("myProgress");
        progressDiv.style.display="block";
        var progressBar = document.getElementById("myBar");
        file = document.getElementById("myFile").files[0];
        folderName = "Document/";
        uniqueFileName = 'SampleFile'; 
        let fileUpload = {
          id: "",
          name: file.name,
          nameUpload: uniqueFileName,
          size: file.size,
          type: "",
          timeReference: 'Unknown',
          progressStatus: 0,
          displayName: file.name,
          status: 'Uploading..',
        }
        uploadfile(uniqueFileName, file, folderName)
          .on('httpUploadProgress', function(progress) {
            let progressPercentage = Math.round(progress.loaded / progress.total * 100);
            console.log(progressPercentage);
            progressBar.style.width = progressPercentage + "%";
            if (progressPercentage < 100) {
              fileUpload.progressStatus = progressPercentage;
     
            } else if (progressPercentage == 100) {
              fileUpload.progressStatus = progressPercentage;
     
              fileUpload.status = "Uploaded";
            }
          })
    }

    return(
        <>
            {/* <h1 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "20px", fontWeight: "400"}}>Upload Raw Data</h1> */}
            <Uploadfiles margin="20px" />
            {/* <h2 style={{width: '100%', textAlign: 'center', marginTop: '60px', paddingRight: '50px'}}>Upload Raw Data</h2> */}
            <div style={{display: 'flex', width: '50%'}}>
                    <BirthrateGDPUScsv margin="20px"  />
                    {/* <Component41 /> */}
                    {/* <input type="file" name="file" ref={uploadRef} onChange={UploadFile} /> */}
                    <input type="file" id="myFile" size="50" onchange="uploadSampleFile()" />   
                    <div id="myProgress" style="display:none;">      
                        <div id="myBar"></div>    
                    </div>  
                    <label>
                    File progress: <progress ref={progressRef} value="0" max="100" />
                    </label>
                    <p ref={statusRef}></p>
                    <p ref={loadTotalRef}></p>
                    {/* <img src={file} alt="" style={{ width: "300px", height: "100px" }} /> */}
            </div>
            {/* <div style={{width: '50%'}}>
                <EnrollmentCountscsv margin="auto" />
                <Component41 marginLeft="260px" />
                <EnrollmentGradescsv margin="auto" />
                <Component41 marginLeft="260px" />
                <HousingPopulationcsv margin="auto" />
                <Component41 marginLeft="260px" />
                <LandDevelopmentscsv margin="auto" />
                <Component41 marginLeft="260px" />
                <SchoolLunchcsv margin="auto" />
                <Component41 marginLeft="260px" />
                <PersonAddressHistorycsv margin="auto" />
                <Component41 marginLeft="260px" />
                <StudentActivitiescsv margin="auto" />
                <Component41 marginLeft="260px" />
                <StudentAttendancecsv margin="auto" />
                <Component41 marginLeft="260px" />
                <StudentBenchmarkscsv margin="auto" />
                <Component41 marginLeft="260px" />
                <StudentDemographicscsv margin="auto" />
                <Component41 marginLeft="260px" />
                <StudentEnrollmentscsv margin="auto"/>
                <Component41 marginLeft="260px" />
            </div>
            <Component39 width="100%"/> */}
        </>
    )

}
export default UploadDocs;

      


// <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/upload--v1.png" alt="upload--v1"/>