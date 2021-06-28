import React, {useState, useEffect} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Cookies from 'universal-cookie';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

const API = process.env.REACT_APP_API;


export default function Dashboard() {
  const classes = useStyles();
 
  const [user,setUser] = useState([])

  const cookies = new Cookies();
  
 
    
  const getUsers = async (email) => {
    const res = await fetch(`${API}/user/${cookies.get('email')}`)
    const data = await res.json();
    
    console.log(data)
  }

  useEffect(() => {
  getUsers();

  }, [])


  
  

  return (

    <div className="Dashboard">

      <img src={cookies.get('image')}/>
      <h1>{cookies.get('name')}</h1>
      <h5>Email: {cookies.get('email')}</h5>
      
      


      <div className='col-md-6'>
      <table className="table table-striped">
        <thead>
          <tr>
                       
            <th>Ahorcado</th>
            <th>Triqui</th>
            <th>Stop</th>
            
          </tr>
        
        </thead>
        <tbody>
          
          {user.map(user => (
            <tr key={user._id}>
              
              <td>{user.ahorcado}</td>
              <td>{user.triqui}</td>
              <td>{user.stop}</td>             
              
            </tr>
          ))}

        </tbody>
      </table>

    </div>

    
        
       

          

      </div>
    
  );
}
