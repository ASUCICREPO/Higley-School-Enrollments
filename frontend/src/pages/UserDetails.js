import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { ClassImage, Component54 } from '../ui-components';

const UserDetails = () => {
    const navigate = useNavigate();
    useEffect (() => {
        if(!sessionStorage.getItem('access_token')){
            navigate('/');
        }
    }, [])
    function handleClick(event) {
        navigate('/uploaddocs');
    }
    return(
        <>
            {/* <FirstTimeuser1 /> */}
            {/* <Component5 /> */}
            <h1 align='center' fontFamily='Inter'>Welcome to Enrollment Prediction</h1>
            <ClassImage width='100%' />
            <Component54 marginTop='20px' onClick={handleClick} />

            {/* <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component5 />
                    <Component4 onClick={handleClick}/>
                </div>
                <div style={{width: '50%'}}>
                    <Component3 />
                </div>
                
            </div> */}
        </>
    )

}
export default UserDetails;