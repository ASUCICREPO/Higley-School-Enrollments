import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { ClassImage, Component54 } from '../ui-components';


const ReturnUser = () => {
    const navigate = useNavigate();
    useEffect (() => {
        if(!sessionStorage.getItem('access_token')){
            navigate('/');
        }
    }, [])

    function handleClick(event) {
        navigate('/usepreviousprediction');
    }
    return(
        <>
            {/* <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component6 />
                    <Component4 onClick={handleClick}/>
                </div>
                <div style={{width: '50%'}}>
                    <Component3 />
                </div>
                
            </div> */}
            <h1 align='center' fontFamily='Inter'>Welcome Back to Enrollment Prediction</h1>
            <ClassImage width='100%' />
            <Component54 marginTop='20px' onClick={handleClick} />
        </>
    )

}
export default ReturnUser;
