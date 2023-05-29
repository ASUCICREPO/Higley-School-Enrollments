import React from "react";
import { useNavigate } from 'react-router-dom';

import { Component36, Component37 } from '../ui-components';

const UsePrev = () => {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/replacedocs');
    }
    return(
        <>

            <h1 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "20px", fontWeight: "400"}}>Use Previous Prediction?</h1>
            <h2 align='center' style={{ padding: '40px', fontFamily: 'Inter', fontSize: "20px", fontWeight: "400"}}>The last prediction was on .</h2>
            <div style={{display: 'flex', width: '50%', margin: "auto", marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component36 />
                </div>
                <div style={{width: '50%'}}>
                    <Component37 onClick={handleClick} />
                </div>
            </div>
        </>
    )

}
export default UsePrev;