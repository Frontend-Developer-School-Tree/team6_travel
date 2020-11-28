import React, { useState } from "react";
/** 
 * Questa component riceve le props dal padre Cards
 * e le stampa a prescindere da ciò viene passato
 */

function Card(props) {
    
    console.log("props",props.value) 
    const [data,setData]=useState(props.value) //contatti+ tariffa
    const numCard=props.num
    console.log("dati",data)
    
    
    /**conversione e map di un oggetto 
     * [1] corrisponde al valore, mentre [0] alla chiave dell'oggetto
     */
    function contattiCard(){
        return(
            <>
        {Object.entries(data).map((val,index)=>{
            // name: Carlo [name,Carlo]
                //{console.log("entries",val)}
            return(
                (val[1].substring(0,4)=="http") ?
                <div className="imageCard">
                    <img key={index} src={val[1]}/>
                </div>
                :
                <div className="">
                    <p key={index}>{val[1]}</p>
                </div>
                )})}
           </>
        )
    }
    
    function tariffaCard(){
        return(
            <>
        {Object.entries(data.type).map((val)=>{
            //val[0] perchè è la key di ogni riga dell'object
            {console.log("id",val[0])}
            return(
                <div>
                        <p key={val[0]}>{val[1]}</p>
                    </div>
                )})}
           </>
        )
    }
    function renderSwitchCard() {
        switch(numCard) {
          case 1:
            return contattiCard();
          case 2:
            return tariffaCard();
        }
      }

    //render 
    return (
            <div className="card">    
                {renderSwitchCard()}
                
            </div>
    )
}
export default Card
