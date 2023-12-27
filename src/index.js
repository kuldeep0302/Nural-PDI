import React from "react";
import "./index.css";
import "animate.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidemenu from "./Componants/Sidemenubar/Sidemenu";
import Header from "./Componants/Header/Header";
import Loginpage from "./Componants/Login-page/Loginpage";
import Forgetpage from './Componants/Login-page/forget-password'
import Cap from './Componants/Login-page/Cap'

import Routespath from "./routes";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Layout />);


function Layout() {

  if (!(localStorage.getItem('token'))) {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/forget-password" element={<Forgetpage />} />
          <Route path="Cap" element={<Cap />} />
        </Routes>
      </BrowserRouter>)
  }


  if (window.innerWidth < 600) {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Sidemenu />
          <div className="main-area">
            <Routespath />
          </div>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="container">
          <Sidemenu />
          <div className="main-area">
            <Header />
            <Routespath />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
