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
  

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [image,setImage] = useState('')
  const [ahorcado,setAhorcado] = useState('')
  const [triqui,setTriqui] = useState('')
  const [stop,setStop] = useState('')
  const [password,setPassword] = useState('')

 
  const [id,setId] = useState('')

  const [users,setUsers] = useState([])



  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =await fetch(`${API}/users/${id}`, {
      method: 'PUT',
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
  const data = await res.json();
  console.log(data)
  setId('');
  await getUsers();
    


    
   
  }  

  const getUsers = async () => {
    const res = await fetch(`${API}/users`)
    const data = await res.json();
    setUsers(data)
  }

  useEffect(() => {
    getUsers();

  }, [])

  const editUser = async (id) => {
    const res = await fetch(`${API}/user/${id}`)
    const data = await res.json();

    setId(id);
    
    setName(data.name)
    setImage(data.image)
    setEmail(data.email)
    setAhorcado(data.ahorcado)
    setTriqui(data.triqui)
    setStop(data.stop)
    setPassword(data.password)


  }

  const deleteUser = async (id) => {
    const userResponse = window.confirm('Desea eliminarlo')
    if (userResponse){
      const res = await fetch(`${API}/users/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      console.log(data)
      await getUsers();
    }

  }

  return ( 
    <div className="row">
    <div className="col-md-3">
      <form onSubmit={handleSubmit} classname="">
      
      
      <div className="form-group">
        <input 
          type ="text" 
          onChange={e => setName(e.target.value)} 
          value={name}
          className="form-control"
          placeholder="Nombre"
          
        />
        
        <input 
          type ="number" 
          onChange={e => setAhorcado(e.target.value)} 
          value={ahorcado}
          className="form-control"
          placeholder="Ahorcado"
        />
        <input 
          type ="number" 
          onChange={e => setTriqui(e.target.value)} 
          value={triqui}
          className="form-control"
          placeholder="Triqui"
        />
        <input 
          type ="number" 
          onChange={e => setStop(e.target.value)} 
          value={stop}
          className="form-control"
          placeholder="Stop"
        />
        

      </div>
      
      <button className="btn btn-primary btn-block" >
              Editar
      </button>

      </form>
    </div> 

    <div className='col-md-6'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nomrbe</th>            
            <th>Ahorcado</th>
            <th>Triqui</th>
            <th>Stop</th>
            <th>Operaciones</th>
          </tr>
        
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.ahorcado}</td>
              <td>{user.triqui}</td>
              <td>{user.stop}</td>
              <td>
                <button 
                  className="btn btn-secondary btn-sm btn-block"
                  onClick={() => editUser(user._id)}
                  >
                  Editar
                </button>
                <button 
                  className="btn btn-danger btn-sm btn-block"
                  onClick={() => deleteUser(user._id)}
                  >
                  Eliminar
                </button>
              </td>
              
            </tr>
          ))}

        </tbody>
      </table>

    </div>

  </div>
  
    
  );
}

