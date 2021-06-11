import React, {useState, Component} from "react";


class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    syncEmailChanges(email){
        this.setState({
            email: email
        })
    }

    syncPasswordChanges(password){
        this.setState({
            password: password
        })
    }

    submitForms = ()=>{
        console.log(this.state);
    }

    render(){
        return (
            <form>
                <input 
                onChanges={(ev) =>{ this.syncEmailChanges(ev.target.value)}}
                type="email"
                value={this.state.email} 
                placeholder='Email'
                />
                <input 
                onChanges={(ev) =>{ this.syncPasswordChanges(ev.target.value)}}
                type="password" 
                value={this.state.password}
                placeholder='*******'/>
                <div>
                    <input type="sumbit" value = 'Login'/>
                </div>
                
            </form>
        )
    }
}

export default Formulario;