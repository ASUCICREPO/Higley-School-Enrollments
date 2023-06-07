import React, { useState, useEffect } from "react";
import AWS from 'aws-sdk';
import S3 from 'react-aws-s3';
import "./css/ReplaceDocs.css";
import './GlobalVariables';
// import {S3} from "@aws-sdk/client-s3";

import { useNavigate } from 'react-router-dom';
// var AWS = require("aws-sdk");
import { BirthrateGDPUScsv, EnrollmentGradescsv, Component56, EnrollmentCountscsv, HousingPopulationcsv, LandDevelopmentscsv, PersonAddressHistorycsv, StudentActivitiescsv, StudentAttendancecsv, StudentBenchmarkscsv, StudentDemographicscsv, StudentEnrollmentscsv, SchoolLunchcsv, Uploadfiles, Uploadicon } from '../ui-components';
window.Buffer = window.Buffer || require("buffer").Buffer;
AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_ID,
    secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    region: process.env.REACT_APP_REGION,
    s3Url: 'https://higleysampleimput.s3.amazonaws.com', 
});
const config = {
        bucketName: "higleysampleimput",
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS_ID,
        secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
        s3Url: 'https://higleysampleimput.s3.amazonaws.com', /* without the suffix zone added */
    };
const s3 = new AWS.S3();
const arr = [];
     
const params = {
        Bucket: 'higleysampleimput',
        Delimiter: '',  
    };
const UploadDocs = () =>  {
    const [listFiles, setListFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(0);
    const birthFileInput = React.useRef(null);
    const enrollFileInput = React.useRef(null);
    const enrollGradeFileInput = React.useRef(null);
    const housingPopFileInput = React.useRef(null);
    const landDevInput = React.useRef(null);
    const schoollunchInput = React.useRef(null);
    const personAddHistInput = React.useRef(null);
    const stuActFileInput = React.useRef(null);
    const stuAttendanceInput = React.useRef(null);
    const stuBenchInput = React.useRef(null);
    const stuDemoInput = React.useRef(null);
    const stuEnrollInput = React.useRef(null);
    const navigate = useNavigate();
    function handleContinue(event) {
        navigate('/thankyou');
    }
    useEffect(() => {
        s3.listObjectsV2(params, (err, data) => {
          if (err) {
            console.log(err, err.stack);
          } else {
            setListFiles(data.Contents);
          }
        });
    }, []);
    for (let i = 0; i < listFiles.length; i++) {
            arr.push(listFiles[i].Key)
    }

    
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        var x = document.getElementById(e.target.id);
        x.style.visibility = 'collapse';
        document.getElementById(e.target.id + "filename").innerHTML = x.value.split('\\').pop();
        console.log(document.getElementById(e.target.id + "filename").innerHTML);
        uploadFile(e.target.files[0], e.target.id)
    }

    const uploadFile = async (file, fileid) => {
        document.getElementById(fileid+"icon").style.display = "flex";
        const ReactS3Client = new S3(config);
        ReactS3Client
            .uploadFile(file, global[fileid + 'filename'])
            .then((data) => {
                console.log(data.location)
            })
            .catch((err) => {
                console.error(err)
            })
    }
    
    const handlebirthClick = event => {
        birthFileInput.current.click();
    };
    const handleenrollClick = event => {
        enrollFileInput.current.click();
    };
    const handleEnrollGradeClick = event => {
        enrollGradeFileInput.current.click();
    };
    const housingPopClick = event => {
        housingPopFileInput.current.click();
    };
    const landDevClick = event => {
        landDevInput.current.click();
    };
    const schoolLunchClick = event => {
        schoollunchInput.current.click();
    };
    const personAddHistClick = event => {
        personAddHistInput.current.click();
    };
    const stuActClick = event => {
        stuActFileInput.current.click();
    };
    const stuAttendanceClick = event => {
        stuAttendanceInput.current.click();
    };
    const stuBenchClick = event => {
        stuBenchInput.current.click();
    };
    const stuDemoClick = event => {
        stuDemoInput.current.click();
    };
    const stuEnrollClick = event => {
        stuEnrollInput.current.click();
    };

    return(
        <>
            <Uploadfiles margin="20px" />
            <div style={{display: 'flex', width: '50%'}}>
                <BirthrateGDPUScsv margin="20px"  />
                <Uploadicon onClick={handlebirthClick} margin="20px" />
                <input type="file" id="birthrateinput" hidden ref={birthFileInput} onChange={handleFileInput} required/>
                <span id="birthrateinputfilename" style={{margin: '20px'}}></span>
                <div id="birthrateinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                     {/* <progress id="html" min="0" max="100" value="100"></progress> */}
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <EnrollmentCountscsv margin="20px"  />
                <Uploadicon onClick={handleenrollClick} margin="20px" />
                <input type="file" id="enrollmentcountinput" hidden ref={enrollFileInput} onChange={handleFileInput} required/>
                <span id="enrollmentcountinputfilename" style={{margin: '20px'}}></span>
                <div id="enrollmentcountinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <EnrollmentGradescsv margin="20px"  />
                <Uploadicon onClick={handleEnrollGradeClick} margin="20px" />
                <input type="file" id="enrollmentgradeinput" hidden ref={enrollGradeFileInput} onChange={handleFileInput}  required/>
                <span id="enrollmentgradeinputfilename" style={{margin: '20px'}}></span>
                <div id="enrollmentgradeinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <HousingPopulationcsv margin="20px"  />
                <Uploadicon onClick={housingPopClick} margin="20px" />
                <input type="file" id="housingpopinput" hidden ref={housingPopFileInput} onChange={handleFileInput}  required/>
                <span id="housingpopinputfilename" style={{margin: '20px'}}></span>
                <div id="housingpopinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <LandDevelopmentscsv margin="20px"  />
                <Uploadicon onClick={landDevClick} margin="20px" />
                <input type="file" id="landdevinput" hidden ref={landDevInput} onChange={handleFileInput}  required/>
                <span id="landdevinputfilename" style={{margin: '20px'}}></span>
                <div id="landdevinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <SchoolLunchcsv margin="20px"  />
                <Uploadicon onClick={schoolLunchClick} margin="20px" />
                <input type="file" id="schoollunchinput" hidden ref={schoollunchInput} onChange={handleFileInput}  required/>
                <span id="schoollunchinputfilename" style={{margin: '20px'}}></span>
                <div id="schoollunchinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <PersonAddressHistorycsv margin="20px"  />
                <Uploadicon onClick={personAddHistClick} margin="20px" />
                <input type="file" id="personaddhistinput" hidden ref={personAddHistInput} onChange={handleFileInput}  required/>
                <span id="personaddhistinputfilename" style={{margin: '20px'}}></span>
                <div id="personaddhistinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <StudentActivitiescsv margin="20px"  />
                <Uploadicon onClick={stuActClick} margin="20px" />
                <input type="file" id="stuactivitiesinput" hidden ref={stuActFileInput} onChange={handleFileInput}  required/>
                <span id="stuactivitiesinputfilename" style={{margin: '20px'}}></span>
                <div id="stuactivitiesinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <StudentAttendancecsv margin="20px"  />
                <Uploadicon onClick={stuAttendanceClick} margin="20px" />
                <input type="file" id="stuattendanceinput" hidden ref={stuAttendanceInput} onChange={handleFileInput}  required/>
                <span id="stuattendanceinputfilename" style={{margin: '20px'}}></span>
                <div id="stuattendanceinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <StudentBenchmarkscsv margin="20px"  />
                <Uploadicon onClick={stuBenchClick} margin="20px" />
                <input type="file" id="stubenchinput" hidden ref={stuBenchInput} onChange={handleFileInput}  required/>
                <span id="stubenchinputfilename" style={{margin: '20px'}}></span>
                <div id="stubenchinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <StudentDemographicscsv margin="20px"  />
                <Uploadicon onClick={stuDemoClick} margin="20px" />
                <input type="file" id="studemoinput" hidden ref={stuDemoInput} onChange={handleFileInput}  required/>
                <span id="studemoinputfilename" style={{margin: '20px'}}></span>
                <div id="studemoinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <div style={{display: 'flex', width: '50%'}}>
                <StudentEnrollmentscsv margin="20px"  />
                <Uploadicon onClick={stuEnrollClick} margin="20px" />
                <input type="file" id="stuenrollmentinput" hidden ref={stuEnrollInput} onChange={handleFileInput}  required/>
                <span id="stuenrollmentinputfilename" style={{margin: '20px'}}></span>
                <div id="stuenrollmentinputicon" className="progress-bar html" style={{display: 'none', margin: '20px'}}>
                </div>
            </div>
            <Component56 width="50%"  margin="20px" onClick={handleContinue}/>
        </>
    )

}
export default UploadDocs;
