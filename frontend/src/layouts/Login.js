import React, {useState, Component, useEffect} from "react";

import styles from "assets/css/login.css";

import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components



import GoogleLogin from 'react-google-login';
import Cookies from 'universal-cookie';


import { useHistory } from "react-router-dom";




const API = process.env.REACT_APP_API;


export default function Login() {

  
  
  
  const responseGoogle = async (response) => {

    const name = (response.profileObj.name)
    const email = (response.profileObj.email)
    const image = (response.profileObj.imageUrl)
    const ahorcado = (0)
    const triqui = (0)
    const stop = (0)
    const password = (response.profileObj.googleId)
    const rol = ('user')

    

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
        password,
        rol
      })
      
    })


    const cookies = new Cookies();
    cookies.set('name', response.profileObj.name, {path: '/'});
    cookies.set('email', response.profileObj.email, {path: '/'});
    cookies.set('image', response.profileObj.imageUrl, {path: '/'});
    cookies.set('id', response.profileObj.googleId, {path: '/'});

    window.location.href="./admin";



    console.log(response.profileObj);
    console.log(response.profileObj.name)
    

}

  return (
      <div className="Login">
          <h1 className="titulo">Juega Ya!!!</h1>
          <br/> <br/> <br/>
          <GoogleLogin  
          clientId="1029856813168-edbs4ndfr23hfjes2ddlbav7nssepsff.apps.googleusercontent.com"
          buttonText="Iniciar Sesion"
          /*render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}*/
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />,
          <br/> <br/>
          <p className='col-md-12'>En la actualidad los juegos virtuales se ha convertido en un gran pasatiempos para los jóvenes, estos permiten divertirse y pasar el tiempo desde la computadora y con la comodidad de estar en casa. Por tal 
          motivo se creó JuegaYa! S.A. Una compañía que desea sistematizar su pool de juegos para que sus jugadores no pierdan la costumbre de tener esos juegos clásicos de infancia con solo un click</p>
 
      </div>  
  );
}



