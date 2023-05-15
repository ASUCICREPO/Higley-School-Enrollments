import React from "react";
// import { Firsttimeuser, Rectangle35 } from "../ui-components";
import { Component3, Component4, Component5, Firsttimeuser } from '../ui-components';

const UserDetails = () => {
    return(
        <>
            {/* <Firsttimeuser /> */}
            <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component5 />
                    <Component4 />
                </div>
                <div style={{width: '50%'}}>
                    <Component3 />
                </div>
                
            </div>
        </>
    )

}
export default UserDetails;