import React from "react";
import { useNavigate } from 'react-router-dom';
import { Component38 } from '../ui-components';

const ThankyouPage = () => {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/user-details');
    }
    return(
        <>
            {/* <Thankyou1 /> */}
            <h1 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "32px", fontWeight: "400"}}>Thank You!</h1>
            <div style={{width: '50%', margin: "auto"}}>
                <p align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "20px", fontWeight: "400"}}>The upload process is complete. You will receive an email when it is processed to the Quicksight dashboard.</p>
            </div>
            <Component38 onClick={handleClick} /> 

        </>
    )

}
export default ThankyouPage;