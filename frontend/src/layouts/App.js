import React, {useState, Component, useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import GoogleLogin from 'react-google-login';
import 'bootswatch/dist/lux/bootstrap.min.css';

import { LoginButton } from "components/Login/Login.js";
import { LogoutButton } from "components/Logout/Logout.js";
import { Profile } from "components/Profile/Profile.js";

import { useAuth0 } from '@auth0/auth0-react';



import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";


const API = process.env.REACT_APP_API;



function App() {

      
  return (

      <div className="App">
          
          <LoginButton />
                   

      </div>    
  );
}

export default App;



