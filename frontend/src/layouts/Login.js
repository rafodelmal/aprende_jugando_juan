import React, {useState, Component, useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";


import 'bootswatch/dist/lux/bootstrap.min.css'

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";



const API = process.env.REACT_APP_API;




export default function Login() {
  
  const name = ('')
  const email = ('')
  const image = ('')
  const ahorcado = ('')
  const triqui = ('')
  const stop = ('')
  const password = ('')
  

  const [users,setUsers] = useState([])
  
  
  const responseGoogle = async (response) => {

    const name = (response.profileObj.name)
    const email = (response.profileObj.email)
    const image = (response.profileObj.imageUrl)
    const ahorcado = ('')
    const triqui = ('')
    const stop = ('')

    const password = (response.profileObj.googleId)

    const res =await fetch(`${API}/register`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        image,
        ahorcado,
        triqui,
        stop,
        password
      })
      
    }) 
    console.log(response.profileObj);

    console.log(response.profileObj.name)

    
    
}


  
  return (
      <div className="Login">
          <h1>Aprende Jugando!!!</h1>
          <GoogleLogin
          clientId="1029856813168-edbs4ndfr23hfjes2ddlbav7nssepsff.apps.googleusercontent.com"
          buttonText="Login"
          /*render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}*/
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
  />,

            

  

      </div>  

      
        
  );
}



