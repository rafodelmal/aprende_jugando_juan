import React, {useState, Component, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Formulario from "components/Formulario/Formulario.js";
import 'bootswatch/dist/lux/bootstrap.min.css'

import avatar from "assets/img/faces/marc.jpg";



const API = process.env.REACT_APP_API;



export default function UserProfile() {
  

  const [user,setUser] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/users`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user,
        email,
        password
      })
    })
    const data = await res.json();
    console.log(data)
  }  

  const getUsers = async () => {
    const res = await fetch(`${API}/users`)
    const data = await res.json();
    console.log(data)
  }

  useEffect(() => {
    getUsers();

  }, [])

  return ( 
    ''  
    
  );
}
