import React from 'react'

function LoginForm(props) {

    const handleChange=props.handleChange();
    const handleSubmit=props.handleSubmit();
    const state=props.state;
    return (
        <div className="containerLogin">
        <div className="formContainer">
            <form id="formBody" onSubmit={handleSubmit} noValidate>
                <h2>LOGIN - TRAVEL</h2>
                <div className="formGroup">
                    <label>Username</label><br/>
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="formGroup">
                    <label>Password</label><br/>
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                 {state.usernameError && <small style={{color:'red'}}>{state.usernameError}</small>}
                 {state.passwordError && <small style={{color:'red'}}>{state.passwordError}</small>}
                 {state.datiNonCorretti && <small style={{color:'red'}}>{state.datiNonCorretti}</small>}
                 <div>
                <button type="submit" className="btn btn-primary" style={{marginTop:20}}>ACCEDI</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default LoginForm
