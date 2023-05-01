import React from "react";
import { HigleySchoolDistrictEnrollmentPredictions, Login, Component2 } from '../ui-components';
// import HigleySchoolDistrictEnrollmentPredictions from "../ui-components";

const Home = () => {
  return (
    <>
      <HigleySchoolDistrictEnrollmentPredictions/>
      <Login width='30%'
        onSubmit={(fields) => {
          // Example function to trim all string inputs
          const updatedFields = {}
          Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
              updatedFields[key] = fields[key].trim()
            } else {
              updatedFields[key] = fields[key]
            }
          })
          return updatedFields
        }}
      />
      <Component2 marginLeft="850px" paddingTop="100px" />
      {/* <Login width='100%' /> */}
    </>

  );
};

export default Home;
