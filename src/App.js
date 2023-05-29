import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom' ;

import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import './App.css';
import Navbar from './pages/Navbar';
import ReturnUser from "./pages/ReturnUser";
import UploadDocs from "./pages/UploadDocs";
import ReplaceDocs from "./pages/ReplaceDocs";
import UsePrev from "./pages/UsePrev";
import ThankyouPage from "./pages/ThankyouPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/returnuser" element={<ReturnUser />} />
          <Route path="/uploaddocs" element={<UploadDocs />} />
          <Route path="/replacedocs" element={<ReplaceDocs />} />
          <Route path="/usepreviousprediction" element={<UsePrev />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
