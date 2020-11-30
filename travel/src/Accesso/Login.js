import React, { Component } from 'react';
import './accesso.css';

const initialState = {
    username : '',
    usernameError: '',
    password : '',
    passwordError: ''
}

class Login extends Component {

    constructor(props){
        super(props)
        this.state = initialState
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        const isValid = this.validate();
        event.preventDefault();
        if(isValid)
        { this.setState(initialState) }
    }
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
    
    render() {
        return (
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
                        <button type="submit" className="btn btn-primary" style={{marginTop:20}}>ACCEDI</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
