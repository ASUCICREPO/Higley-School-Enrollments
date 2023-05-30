import React, { useState } from "react";
import S3 from 'react-aws-s3';
import { useNavigate } from 'react-router-dom';
import { Storage } from "aws-amplify";

// var AWS = require("aws-sdk");
// import "./css/UploadDocs.css";
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component56, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv, Component39, Uploadfiles, Uploadicon } from '../ui-components';

window.Buffer = window.Buffer || require("buffer").Buffer;
const UploadDocs = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const hiddenFileInput = React.useRef(null);
    const navigate = useNavigate();
    function handleContinue(event) {
        navigate('/thankyou');
    }

    // const [key, setKey] = useState("");

    // const progressCallback = (progress) => {
    //     const progressInPercentage = Math.round(
    //       (progress.loaded / progress.total) * 100
    //     );
    //     console.log(`Progress: ${progressInPercentage}%`);
    // };
    
    // const uploaddocFile = async (file) => {
    //     try {
    //         const result = await Storage.put(file.name, file, {
    //             contentType: file.type,
    //             progressCallback,
    //         });
    //         console.log(result);
    //         setKey(result.key);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const config = {
        bucketName: "higleysampleimput",
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS_ID,
        secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
        s3Url: 'https://higleysampleimput.s3.amazonaws.com', /* without the suffix zone added */
    };

    const uploadFile = async (file) => {
        console.log(selectedFile);

        const ReactS3Client = new S3(config);
        ReactS3Client
            .uploadFile(file, file.name)
            .then(data => console.log(data.location))
            .catch(err => console.error(err))
    }

    const handlebirthFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        var x = document.getElementById('upload-input');
        x.style.visibility = 'collapse';
        document.getElementById('BirthratefileName').innerHTML = x.value.split('\\').pop();
        console.log(document.getElementById('BirthratefileName').innerHTML);
    }
    
    const handleenrollFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        var x = document.getElementById('upload-input');
        x.style.visibility = 'collapse';
        document.getElementById('EnrollfileName').innerHTML = x.value.split('\\').pop();
    }

    const handleClick = event => {
        hiddenFileInput.current.click();
    };



    // var bucket = new AWS.S3({
    //     accessKeyId: process.env.REACT_APP_ACCESS_ID,
    //     secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    //     // sessionToken: "SESSION_TOKEN", // optional you can remove if you don't want pass
    //     region: 'us-east-1'
    //   });


    // function uploadFile(event, fileName, file, folderName) {
    //     const params = {
    //       Bucket: "BUCKET_NAME",
    //       Key: folderName + fileName,
    //       Body: file,
    //       ContentType: file.type
    //     };
    
    //     this.bucket.upload(params, (err, data) => {
    //       if (err) {
    //         console.log('There was an error uploading your file: ', err);
    //         return false;
    //       }
    //       console.log('Successfully uploaded file.', data);
    //       return true;
    //     });
    // }

    // function uploadSampleFile (event) {
    //     var progressDiv = document.getElementById("myProgress");
    //     progressDiv.style.display="block";
    //     var progressBar = document.getElementById("myBar");
    //     file = document.getElementById("myFile").files[0];
    //     folderName = "Document/";
    //     uniqueFileName = 'SampleFile'; 
    //     let fileUpload = {
    //       id: "",
    //       name: file.name,
    //       nameUpload: uniqueFileName,
    //       size: file.size,
    //       type: "",
    //       timeReference: 'Unknown',
    //       progressStatus: 0,
    //       displayName: file.name,
    //       status: 'Uploading..',
    //     }
    //     uploadfile(uniqueFileName, file, folderName)
    //       .on('httpUploadProgress', function(progress) {
    //         let progressPercentage = Math.round(progress.loaded / progress.total * 100);
    //         console.log(progressPercentage);
    //         progressBar.style.width = progressPercentage + "%";
    //         if (progressPercentage < 100) {
    //           fileUpload.progressStatus = progressPercentage;
     
    //         } else if (progressPercentage == 100) {
    //           fileUpload.progressStatus = progressPercentage;
     
    //           fileUpload.status = "Uploaded";
    //         }
    //       })
    // }

    return(
        <>
            {/* <h1 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "20px", fontWeight: "400"}}>Upload Raw Data</h1> */}
            <Uploadfiles margin="20px" />
            {/* <div style={{display: 'flex', width: '50%'}}>
                <label htmlFor="f">
                    <input
                        type="file"
                        id="f"
                        onChange={(e) => {
                            uploaddocFile(e.target.files[0]);
                        }}
                    />
                    <div>Pick a File to Upload</div>
                </label>
            </div> */}
            <div style={{display: 'flex', width: '50%'}}>
                    <BirthrateGDPUScsv margin="20px"  />
                    <Uploadicon onClick={handleClick} margin="20px" />
                    <input type="file" id="upload-input" hidden ref={hiddenFileInput} onChange={handlebirthFileInput} required/>
                    <span id="BirthratefileName" style={{margin: '20px'}}></span>
                    <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <EnrollmentCountscsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" id="upload-input" hidden required/>
                    <span id="EnrollfileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <EnrollmentGradescsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" id="upload-input" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <HousingPopulationcsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" id="upload-input" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <LandDevelopmentscsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <SchoolLunchcsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <PersonAddressHistorycsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentActivitiescsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentAttendancecsv margin="20px"  />
                    <Uploadicon  margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentBenchmarkscsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentDemographicscsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                    <StudentEnrollmentscsv margin="20px"  />
                    <Uploadicon margin="20px" />
                    <input type="file" hidden required/>
                    <span id="fileName" style={{margin: '20px'}}></span>
                    {/* <button onClick={() => uploadFile(selectedFile)} style={{margin: '20px'}}> Upload to S3</button> */}
            </div>
            <Component56 width="50%"  margin="20px" onClick={handleContinue}/>
        </>
    )

}
export default UploadDocs;
