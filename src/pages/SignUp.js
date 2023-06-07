import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./css/Home.css";

import { CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';

import { HigleySchoolDistrictEnrollmentPredictions, HigleyLogin, Component2, Component35, Component55 } from '../ui-components';
// import HigleySchoolDistrictEnrollmentPredictions from "../ui-components";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyProcess, setVerifyProcess] = useState(false);
  const [OTP, setOTP] = useState('');
  const PC = {
    UserPoolId: 'Your user pool id',
    ClientId: 'Your Client ID'
  };
  const UserPool = new CognitoUserPool(PC);

  const onSubmit = (e) => {
    e.preventDefault();
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      })
    );
    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't sign up");
      } else {
        console.log(data);
        setVerifyProcess(true);
        alert('User Added Successfully');
      }
    });
  };
 
  const verifyAccount = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });
    console.log(user);
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't verify account");
      } else {
        console.log(data);
        alert('Account verified successfully');
        window.location.href = '/';
      }
    });
  };

  const navigate = useNavigate();
  function handleClick(event) {
      navigate('/user-details');
  }
  return (
    <>
      <div id="mysection">
        <div style={{width: '30%', margin: "auto"}}>
          <h1 align='center' style={{ padding: '50px', fontFamily: 'Inter', fontSize: "32px", fontWeight: "400", color: "rgba(255,255,255,1)"}}>Higley School District Enrollment Predictions Login</h1>
          <div className="form-group">
            <form onSubmit={onSubmit}>
              <input class="LoginInput" type="text" placeholder="Username" name="Username" value={username.toLowerCase().trim()} onChange={(event) => setUsername (event.target.value)} required />
              <input class="LoginInput" type="email" placeholder="Email" name="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
              <input class="LoginInput" type="password" placeholder="Password" name="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button type="submit">Submit</button> 
            </form>
          </div>
          <Component35 marginTop='20px' />
        </div>
      </div>
      <Component55 marginTop='60px' onClick={handleClick} />
    </>
  );
};

export default SignUp;
