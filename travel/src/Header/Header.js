import React, { useContext } from 'react'

import {ContextApi} from '../Api/ContextApi'


function Header() {
    const dati = useContext(ContextApi)
    return (
        <div>
            {console.log("ture:",dati)}
            <h1>{dati.title}</h1>
            <img src={dati.agency.image}></img>
            <img src={dati.images[0].image}></img>
            
        </div>
    )
}


export default Header
