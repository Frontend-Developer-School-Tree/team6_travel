import React, { useContext } from 'react'

import {ContextApi} from '../Api/ContextApi'


function Header() {
    const dati = useContext(ContextApi)
    return (
        <div>
            <h1>{dati.title}</h1>
            {console.log("ture:",dati)}
            <img src={dati.agency.image}></img>
        </div>
    )
}


export default Header
