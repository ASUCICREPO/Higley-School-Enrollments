import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import "./css/Home.css";
import { CognitoUser, CognitoUserAttribute, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';

import { HigleySchoolDistrictEnrollmentPredictions, HigleyLogin, Component2, Component35, Component55 } from '../ui-components';
// import HigleySchoolDistrictEnrollmentPredictions from "../ui-components";

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const PC = {
    UserPoolId: 'us-east-1_mFug75JqU',
    ClientId: '3ga8kk0qfkc92ejc1r7l44ftie'
  };

  const UserPool = new CognitoUserPool(PC);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });
 
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
 
    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('login success', result);
        window.location.href = '/returnuser';
      },
      onFailure: (err) => {
        console.log('login failure', err);
      },
      newPasswordRequired: (data) => {
        console.log('new password required', data);
      },
    });
  };

  // if(navigate) {
  //     return <Navigate to="/user-details" />
  // }

  return (
    <>
      <div id="mysection">
        <div style={{width: '30%', margin: "auto"}}>
          <h1 align='center' style={{ padding: '50px', fontFamily: 'Inter', fontSize: "32px", fontWeight: "400", color: "rgba(255,255,255,1)"}}>Higley School District Enrollment Predictions Login</h1>
          <div className="form-group">
            <form onSubmit={onSubmit}>
              <input className="LoginInput" type="text" placeholder="Username" name="Username" value={username} onChange={(event) => setUsername (event.target.value)} required />
              <input className="LoginInput" type="password" placeholder="Password" name="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button className="LoginSubmit" type="submit">Submit</button> 
            </form>
          </div>
          <h3 align='center'> Don't have an account? <a href="/SignUp">Sign Up </a></h3>
        </div>
      </div>
    </>
  );
};

export default Home;
