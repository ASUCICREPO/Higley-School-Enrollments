import React, { useState, useEffect }  from "react";
import { useNavigate } from 'react-router-dom';

import { Component36, Component37 } from '../ui-components';

const UsePrev = () => {
    const [lastdate, setLastdate] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://higley-input-bucket.s3.amazonaws.com/last_model.txt')
        .then ((response) => response.text())
        .then (data => {
          const d = new Date(Date.parse(data.split('_')[0]));
          var options = { year: 'numeric', month: 'long', day: 'numeric' };
          setLastdate(new Date(d).toLocaleDateString([],options));
          console.log(data)    
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
