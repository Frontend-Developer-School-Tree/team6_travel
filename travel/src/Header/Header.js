import React, { useContext } from 'react'
import {ContextApi} from '../Api/ContextApi'


function Header() {
    const dati = useContext(ContextApi)
    return (
        <>
            <div className="container-fluid" id="header">
                <div className="row">
                    <div className="col">
                        {console.log("ture:",dati)}
                        <h1 id="titleHeader">{dati.title}</h1>
                        <img id="logo-agency" src={dati.agency.image}></img>
                        <img src={dati.images[0].image}></img>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header