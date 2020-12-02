import React, { Component } from 'react';
import './accesso.css';
import Routing from './Routing'
import LoginForm from './LoginForm'

const initialState = {
    username : '',
    usernameError: '',
    password : '',
    passwordError: '',
    datiNonCorretti:'',
    datiCorretti:false
}

class Login extends Component {
    constructor(props){
        super(props)
        this.state = initialState;
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    userAdmin={user:'team6',psw:'123456'}

    //prende tutto ciò che digitiamo nella form
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }
    
    //verifica che i campi non siano vuoti
    validate() {
        let usernameError = '';
        let passwordError = '';
        if(this.state.username === '')
        {
            usernameError = 'Inserisci un username!';
        }
        if(this.state.password === '')
        {passwordError = 'Inserisci una password';}
        if(usernameError || passwordError) {
            this.setState({
                usernameError,
                passwordError
            })
            return false
        }
        return true;
    }
    
    // controllo dati inseriti
    controlloLogin(){
        let usernameError = '';
        let passwordError = '';
        let datiNonCorretti='';

        if((this.userAdmin.user===this.state.username) &&(this.userAdmin.psw===this.state.password) ){
            console.log("accesso eseguito")
            this.setState({datiCorretti:true})
            return true;
        }
        if((this.userAdmin.user!==this.state.username)&&(this.userAdmin.psw===this.state.password) ){
            usernameError = 'Username non corretta'
            this.setState({
                username:'',
                password:'',
                usernameError,

            })
            return false;
        }
        if((this.userAdmin.user===this.state.username)&&(this.userAdmin.psw!==this.state.password) ){
            console.log("non funge")
            passwordError = 'Password non corretta'
            this.setState({
                password:'',
                passwordError,

            })
            return false;
        }
        else{
            datiNonCorretti='dati inseriti non corretti'
            this.setState({
                username:'',
                password:'',
                datiNonCorretti,
            })
            return false
        }
    }
    //invia i dati inseriti
    handleSubmit=(event) => {
        const isValid = this.validate();
        const correctDati=this.controlloLogin();
        event.preventDefault();
       // console.log("state",this.state)
        if(isValid){
            this.setState(initialState)
        }
        if(correctDati){
            this.setState({datiCorretti:true})
        }
        //console.log("bool",correctDati)
    }

    
    render() {
        return (
             
    (this.state.datiCorretti)?
                <> 
                    <Routing /> 
               </>:
                    // <LoginForm state={this.initialState} handleChange={this.handleChange()} handleSubmit={this.handleSubmit()}  />
            <div className="containerLogin">
                <div className="formContainer">
                    <form id="formBody" onSubmit={this.handleSubmit} noValidate>
                        <h2>LOGIN - TRAVEL</h2>
                        <div className="formGroup">
                            <label>Username</label><br/>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Password</label><br/>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                         {this.state.usernameError && <small style={{color:'red'}}>{this.state.usernameError}</small>}
                         {this.state.passwordError && <small style={{color:'red'}}>{this.state.passwordError}</small>}
                         {this.state.datiNonCorretti && <small style={{color:'red'}}>{this.state.datiNonCorretti}</small>}
                         <div>
                        <button type="submit" className="btn btn-primary" style={{marginTop:20}}>ACCEDI</button>
                        </div>
                    </form>
                </div>
            </div>
           
        )
    }
}

export default Login
