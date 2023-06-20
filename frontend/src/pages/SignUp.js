import React, { useState } from "react";
import "./css/Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyProcess, setVerifyProcess] = useState(false);
  const [OTP, setOTP] = useState('');
  const PC = {
    UserPoolId: 'us-east-1_mFug75JqU',
    ClientId: '3ga8kk0qfkc92ejc1r7l44ftie'
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
        // console.log(err);
        toast.error(`${err}`, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        // console.log(data);
        toast.success('User Signup Successful.', {
          position: toast.POSITION.TOP_CENTER
        });
        setVerifyProcess(true);
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
        // console.log(err);
        toast.error(`${err}`, {
          position: toast.POSITION.TOP_CENTER
        });
        // alert(err);
      } else {
        console.log(data);
        window.location.href = '/user-details';
      }
    });
  };

  return (
    <>
      <div id="mysection">
        <div style={{width: '30%', margin: "auto"}}>
          <h1 align='center' style={{ padding: '30px', fontFamily: 'Inter', fontSize: "32px", fontWeight: "400", color: "rgba(255,255,255,1)"}}>Higley School District Enrollment Predictions Sign Up</h1>
          <div className="form-group">
          {verifyProcess === false ? (
            <form onSubmit={onSubmit}>
              <input className="LoginInput" type="text" placeholder="Username" name="Username" value={username.toLowerCase().trim()} onChange={(event) => setUsername (event.target.value)} required />
              <input className="LoginInput" type="email" placeholder="Email" name="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="LoginInput" type="password" placeholder="Password" name="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button className="LoginSubmit" type="submit">Submit</button> 
            </form>
          ) : (
            <form onSubmit={verifyAccount}>
              <input className="LoginInput" type="text" placeholder="OTP" name="OTP"  value={OTP} onChange={(e) => setOTP(e.target.value)} />
              <button className="LoginSubmit" type="submit">Verify</button>
            </form>
          )}
          <ToastContainer /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
