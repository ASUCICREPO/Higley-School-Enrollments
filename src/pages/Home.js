import React from "react";
import { HigleySchoolDistrictEnrollmentPredictions, HigleyLogin, Component2 } from '../ui-components';
// import HigleySchoolDistrictEnrollmentPredictions from "../ui-components";

const Home = () => {
  return (
    <>
      <HigleySchoolDistrictEnrollmentPredictions margin="auto"  marginTop="100px"/>
      {/* <Login width='100%' /> */}
      <HigleyLogin width='25%' margin="auto" marginTop="50px"/>
      <Component2 margin="auto" marginTop="50px"/>
      
    </>
  );
};

export default Home;
