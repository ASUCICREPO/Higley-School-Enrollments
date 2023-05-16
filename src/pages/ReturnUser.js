import React from "react";
import { Component3, Component4, Component6 } from '../ui-components';


const ReturnUser = () => {
    return(
        <>
            <div style={{display: 'flex', width: '100%', marginTop: '100px'}}>
                <div style={{width: '50%'}}>
                    <Component6 />
                    <Component4 />
                </div>
                <div style={{width: '50%'}}>
                    <Component3 />
                </div>
                
            </div>
        </>
    )

}
export default ReturnUser;
