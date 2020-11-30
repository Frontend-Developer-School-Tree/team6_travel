import React, { useState } from "react";
/** 
 * Questa component riceve le props dal padre Cards
 * e le stampa a prescindere da ciò viene passato
 */

function Card(props) {
    
    console.log("props",props.value) 
    const [data,setData]=useState(props.value) //utilizzata da tutte le cards
    const numCard=props.num //serve a switchare il render 
    console.log(numCard)
    
    /*  Object.entries(data) -> conversione e map di un oggetto 
     * [1] corrisponde al valore, mentre [0] alla chiave dell'oggetto
     */
    
    /************funzione render contattiCard ***************/
    function contattiCard(){
        /* props supplementari dei contatti*/
        const logo=props.logo
        const info=props.info
        //////////////////////
        return(
            <div className="card">
        {Object.entries(data).map(val=>{
            // name: Carlo [name,Carlo]
                //{console.log("entries",val)}
            return(
                (val[1].substring(0,4)=="http") ?
                <div>
                    <img id="imageCard" key={val[0]} src={val[1]}/>
                </div>
                :
                <div className="">
                    <p key={val[0]}>{val[1]}</p>
                </div>
                )})}
                <img id="logoAgency"src={logo.image}/>
                {info.map((val,index)=>{
                    return(
                    <p key={index}>{val}</p>
                    )
                })}
           </div>
        )
    }
    /////////////////////////////////////////////////////


    /************funzione render Card Tariffa ***************/
    function tariffaCard(){
        let tot=0
        //calcola il totale complessivo dei prezzi
        function totale(price){
            tot+=price
        }
        return(
            <div className="card">
        {/**map dei type:adulto e adolescente */}
        {Object.entries(data.type).map((val)=>{
            //val[0] perchè è la key di ogni riga dell'object
            {console.log("tariffa",val[1])}
            return(
                <div>
                        <p key={val[0]}>{val[1]}</p>
                    </div>
                )})}
        {/**map dei prezzi */}
        {Object.entries(data.prezzi).map((val)=>{
            //val[0] perchè è la key di ogni riga dell'object
            {console.log("tariffa",val[1])}
            return(
                
                <div>
                    {totale(val[1])}
                    <p key={val[0]}>{val[1]}</p>
                </div>
                )})}
                <div className="PrezzoTotale">
                    <p>Totale: </p>
                    <p>{tot}</p>
                </div>
                <div className="Comprende"> 
                    <p>{data.strComprende}</p>
                    <p>{data.included}</p>
                </div>
                <div className="NonComprende"> 
                    <p>{data.strNonComprende}</p>
                    <p>{data.notIncluded}</p>
                </div>
           </div>
        )
    }
    ///////////////////////////////////////////////////

    /***********funzione render Documenti Card ****************/
    function documentiCard(){
        return(
        <div className="card">
                    {console.log("dati3:",data.titoloDocumenti)}
                    <p id="TitoloDocumenti">{data.titoloDocumenti}</p>
                    <p id="ParagrafoDocumenti">{data.paragrafoDocumenti}</p>
                </div>
        )
    }

    function renderSwitchCard() {
        switch(numCard) {
          case 1:
            return contattiCard();
          case 2:
            return tariffaCard();
          case 3:
            return documentiCard();
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

