import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify, Auth, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={studioTheme}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
Amplify.configure(awsconfig);