import React from "react";
import { useNavigate } from 'react-router-dom';

import { Component3, Component4, Component6 } from '../ui-components';


const ReturnUser = () => {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/replacedocs');
    }
    return(
        <>
            <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component6 />
                    <Component4 onClick={handleClick}/>
                </div>
                <div style={{width: '50%'}}>
                    <Component3 />
                </div>
                
            </div>
        </>
    )

}
export default ReturnUser;
