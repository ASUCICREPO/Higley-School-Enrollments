import React, { useState, useEffect }  from "react";
import { useNavigate } from 'react-router-dom';
import AWS from 'aws-sdk';

import { Component36, Component37 } from '../ui-components';
AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_ID,
    secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    region: process.env.REACT_APP_REGION,
    s3Url: 'https://higley-input-bucket.s3.amazonaws.com', 
});
AWS.config.region = 'us-east-1'
const s3 = new AWS.S3();
     
const params = {
        Bucket: 'higley-input-bucket',
        Delimiter: '',  
    };

const UsePrev = () => {
    const [lastdate, setLastdate] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if(!sessionStorage.getItem('access_token')){
            navigate('/');
        }
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
              console.log(err, err.stack);
            } else {
              for (let i = 0; i < data.Contents.length; i++) {
                if(data.Contents[i].Key === "last_model.txt") {
                    // console.log(data.Contents[i].LastModified)
                    var options = { year: 'numeric', month: 'long', day: 'numeric' };
                    setLastdate(new Date(data.Contents[i].LastModified).toLocaleDateString([],options));
                }
                }
            }
          });

    }, []);
    function handleClick(event) {
        navigate('/replacedocs');
    }
    function goToLastPred(event) {
        window.location.replace('https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/0f8fe8d0-4e14-45de-bb20-38093ce975bc')
    }
    return( 
        <>

            <h1 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "32px", fontWeight: "400"}}>Use Previous Prediction?</h1>
            <h2 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "20px", fontWeight: "400"}}>The last prediction was on {lastdate}.</h2>
            <div style={{display: 'flex', width: '50%', margin: "auto", marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component36 onClick={goToLastPred}/>
                </div>
                <div style={{width: '50%'}}>
                    <Component37 onClick={handleClick} />
                </div>
            </div>
        </>
    )

}
export default UsePrev;
