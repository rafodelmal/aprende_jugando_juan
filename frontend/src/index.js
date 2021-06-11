/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";



// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js";
import App from "layouts/App.js";
import Tic from "./Tic.js"

import "assets/css/material-dashboard-react.css?v=1.9.0";
import { Auth0Provider } from "@auth0/auth0-react";

import { useAuth0 } from '@auth0/auth0-react';
//import App from "./App"


const hist = createBrowserHistory();



const providerConfig = {
  domain: "juand.us.auth0.com",
  clientId: "60K3a2LYnzONzyOfukAL6xNpXLbBppeq",
  
  redirectUri: window.location.origin,
  
};


ReactDOM.render(    

      <Router history={hist}>
      
        

        <Auth0Provider {...providerConfig}>

          <Route path="/admin" component={Admin} />
          
          <Login />
          
        
        </Auth0Provider>

          
        
      
      </Router>,  
      

      
          
  
  document.getElementById("root")
);

