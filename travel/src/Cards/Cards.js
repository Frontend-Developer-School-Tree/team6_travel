import React, { useContext,useState } from "react";
import { ContextApi } from "../Api/ContextApi";
import Card from './Card'


/** component Padre di tutte le Card a cui invia i dati alla singola Component per stampare */
function Cards() {
    //importazione dati
    const dati = useContext(ContextApi);

    var numbCard=0

    //destructuring dei dati per contatti
    const {name,image}=dati.operator
    const {phone,email}=dati.operator.contact
    const frase="Il tuo agente di viaggio"
    /* state Contatti */
    const [contatti,setContatti]=useState({name,frase,image,phone,email});  
    /******************** */

    //destructuring tariffe

    const type=dati.partecipants.map((val)=>{
        //console.log("test",val.type)
        return val.type
    })
    console.log("type2",type)
    const [tariffa,setTariffa]=useState({type})

    //determina le card da visualizzare
    function addNumCard(){
            numbCard+=1
            return numbCard
    }
    //////////////////

    

    return (
        <div>
            {/**card contatti */}
            <Card value={contatti} num={addNumCard()}/>
            <Card value={tariffa} num={addNumCard()}/> 

        </div>
    )
}

export default Cards
