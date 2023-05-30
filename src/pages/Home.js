import React from "react";
import { useNavigate } from 'react-router-dom';
import "./css/Home.css";

import { HigleySchoolDistrictEnrollmentPredictions, HigleyLogin, Component2, Component35, Component55 } from '../ui-components';
// import HigleySchoolDistrictEnrollmentPredictions from "../ui-components";

const Home = () => {
  const navigate = useNavigate();
  function handleClick(event) {
      navigate('/user-details');
  }
  return (
    <>
      <div id="mysection">
        <div style={{width: '30%', margin: "auto"}}>
          <h1 align='center' style={{ padding: '50px', fontFamily: 'Inter', fontSize: "32px", fontWeight: "400", color: "rgba(255,255,255,1)"}}>Higley School District Enrollment Predictions Login</h1>
          <Component35 marginTop='20px' />
        </div>
      </div>
      <Component55 marginTop='60px' onClick={handleClick} />
    </>
  );
};

export default Home;
