import React, {useState, useContext } from "react";
import '../assets/css/accesso.css'
import { Redirect } from 'react-router-dom'
// import AuthApi from "./AuthApi";
// import Routing from "./Routing"


function LoginForm({Login,Error}) {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [usernameError,setUsernameError]=useState("")
    const [passwordError,setPasswordError]=useState("")
    const [datiCorretti,setDatiCorretti]=useState(false)
    const [datiNonCorretti,setDatiNonCorretti]=useState("")
    const [params,setParams]=useState({username:"",password:""})



    //const [auth,setAuth]=useState(false)

    //  function handleChange (event) {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     if (name === "username") {
    //         setUsername({username:value});
            
    //       }
    //       if (name === "password") {
    //         setPassword({ password: value });
    //       }
    //     }
        
    //     function validate() {
    //         if(username === '')
    //         {
    //             setUsernameError ({usernameError: 'Inserisci un username!'});
    //             console.log(usernameError)
    //             return false
    //         }
    //         if(password === ''){
    //             {setPasswordError ({ passwordError:'Inserisci una password'})}
    //             return false
    //         }
            
    //         return true;
    //     }
        
        // controllo dati inseriti
        // function controlloLogin(){
            
        //     if((userAdmin.user===username.username) &&(userAdmin.psw===password.password) ){
        //         console.log("accesso eseguito")
        //         setDatiCorretti({datiCorretti:true});
        //         console.log("datiCorretti",datiCorretti)
        //         return true;
        //     }
        //     if((userAdmin.user!==username.username)&&(userAdmin.psw===password.password) ){
        //         usernameError = 'Username non corretta';
        //         setUsername({username:''});
        //         setPassword({password:''})
        //         setUsernameError({usernameError:usernameError})
        //         return false;
        //     }
        //     if((userAdmin.user===username.username)&&(userAdmin.psw!==password.password) ){
        //         console.log("non funge")
        //         passwordError = 'Password non corretta'
        //         setPassword({password:''})
        //         setPasswordError({passwordError:passwordError})
        //         return false;
        //     }
        //     else{
        //         datiNonCorretti='dati inseriti non corretti'
        //         setUsername({username:''});
        //         setPassword({password:''})
        //         setDatiNonCorretti({datiNonCorretti:datiNonCorretti})
        //         return false
        //     }
        // }
        
        //invia i dati inseriti
        const handleSubmit=(event)=>{
            event.preventDefault();
            console.log(params)
            //const isValid = validate();
            //const correctDati=controlloLogin();
            //console.log("correctDati",correctDati)
        //     if(isValid){
        //         setUsername({username:''});
        //         setPassword({password:''})
        //         setDatiNonCorretti({datiNonCorretti:""})
        //         setUsernameError({usernameError:''})
        //         setPasswordError({passwordError:''})
        //     }
        //     if(correctDati){
        //         setDatiCorretti({datiCorretti:true});
        // }
            Login(params)
            //return(<Redirect to="/home" />)
        //console.log("bool",correctDati)
    }

    return (
        // (datiCorretti)?
        //     <Routing /> 
        //     :

        <>
            <form className="formBody" onSubmit={handleSubmit} noValidate>
                <div class="form-group">
                    <h2 className="titleLogin">Login - Travel</h2>
                    {( Error != "") ? (<div className="error">{Error}</div>) : ""}
                    {/* <label for="exampleInputEmail1" className="username">Username</label> */}
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Username"
                        id="username"
                        onChange={ e => setParams({...params, username:e.target.value,  })}
                        value={params.name} required
                    />
                </div>
                    <div className="form-group">
                        {/* <label for="exampleInputPassword1" className="password">Password</label> */}
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            onChange={ e => setParams({...params, password:e.target.value,  })} 
                            value={params.password} required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginTop:20}}>ACCEDI</button>
            </form>
        </>
    )
}

export default LoginForm

{/* <div className="containerLogin">
<div className="formContainer">
    <form id="formBody" onSubmit={handleSubmit} noValidate>
        <h2>LOGIN - TRAVEL</h2>
        {( Error != "") ? (<div className="error">{Error}</div>) : ""}
        <div className="formGroup">
            <label>Username</label><br/>
            <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                onChange={ e => setParams({...params, username:e.target.value,  })}
                value={params.name} required
                //onChange={handleChange}
            />
        </div>
        <div className="formGroup">
            <label>Password</label><br/>
            <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                onChange={ e => setParams({...params, password:e.target.value,  })} 
                value={params.password} required
               // onChange={handleChange}
            />
        </div> */}
         {/* {usernameError && <small style={{color:'red'}}>{usernameError}</small>}
         {passwordError && <small style={{color:'red'}}>{passwordError}</small>}
         {datiNonCorretti && <small style={{color:'red'}}>{datiNonCorretti}</small>} */}
         {/* <div>
        <button type="submit" className="btn btn-primary" style={{marginTop:20}}>ACCEDI</button>
        </div>
    </form>
</div>
</div> */}