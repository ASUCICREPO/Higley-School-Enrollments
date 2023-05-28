import React from "react";
import { useNavigate } from 'react-router-dom';

// import { Firsttimeuser, Rectangle35 } from "../ui-components";
import { Component3, Component4, Component5 } from '../ui-components';

const UserDetails = () => {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/uploaddocs');
    }
    return(
        <>
            {/* <Firsttimeuser /> */}
            <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component5 />
                    <Component4 onClick={handleClick}/>
                </div>
                <div style={{width: '50%'}}>
                    <Component3 />
                </div>
                
            </div>
        </>
    )

}
export default UserDetails;