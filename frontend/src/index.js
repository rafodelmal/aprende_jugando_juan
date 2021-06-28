import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";





// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js";


import "assets/css/material-dashboard-react.css?v=1.9.0";


const hist = createBrowserHistory();



ReactDOM.render(

    <
    Router history = { hist } >

    

    <Route exact path = "/" component = { Login }/>      
    
    <Route path = "/admin"  component = { Admin }/>


    </Router>,

    document.getElementById("root")
);