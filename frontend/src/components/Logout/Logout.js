import React, { Component } from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css'

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Logout extends Component {
    cerrarSesion=()=>{
        cookies.remove('name', {path: "/"});
        cookies.remove('email', {path: "/"});
        cookies.remove('image', {path: "/"});
        
        window.location.href='http://localhost:3000/';
    }

    

    render() {        
        return <button className="btn btn-primary btn-block"  onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>

            
        
    }
}

export default Logout;