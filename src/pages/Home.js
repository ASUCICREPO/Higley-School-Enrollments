import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import "./css/Home.css";

import { HigleySchoolDistrictEnrollmentPredictions, HigleyLogin, Component2, Component35, Component55 } from '../ui-components';
// import HigleySchoolDistrictEnrollmentPredictions from "../ui-components";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState("");

  const onSubmit = async event => {
      event.preventDefault();

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({"username": username, "password": password });
      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };
      // let response;
      fetch(global.apiEndpoints.transitlogin , requestOptions)
      .then((response) => response.json())
      .then((res) => {
          console.log(res);
          if (res.success) {
              sessionStorage.setItem('access_token', res.data.access_token);
              sessionStorage.setItem('refresh_token', res.data.refresh_token);
              setNavigate(true);
          } else {

          }

      });
  };

  if(navigate) {
      return <Navigate to="/user-details" />
  }

  return (
    <>
      <div id="mysection">
        <div style={{width: '30%', margin: "auto"}}>
          <h1 align='center' style={{ padding: '50px', fontFamily: 'Inter', fontSize: "32px", fontWeight: "400", color: "rgba(255,255,255,1)"}}>Higley School District Enrollment Predictions Login</h1>
          <div className="form-group">
            <form onSubmit={onSubmit}>
              <input class="LoginInput" type="text" placeholder="Username" name="Username" value={username} onChange={(event) => setUsername (event.target.value)} required />
              <input class="LoginInput" type="password" placeholder="Password" name="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button type="submit">Submit</button> 
            </form>
          </div>
          <h3 align='center'> Don't have an account? <a href="/SignUp">Sign Up </a></h3>
        </div>
      </div>
      {/* <Component55 marginTop='60px' onClick={handleClick} /> */}
    </>
  );
};

export default Home;
