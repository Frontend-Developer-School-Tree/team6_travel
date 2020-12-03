import React, { useState } from "react";


function TariffeCard(props) {
    const [data,setData]=useState(props.value)
        let tot=0
        //calcola il totale complessivo dei prezzi
        function totale(price){
            tot+=price
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="card" style={{
                            width: '100vw',
                        }}>
                        <div className="card-body">
                            <div className="col tipologia">
                                {/**map dei type:adulto e adolescente */}
                                {Object.entries(data.type).map((val)=>{
                                    //val[0] perchè è la key di ogni riga dell'object
                                    {console.log("tariffa",val[1])}
                                    return(
                                        <div>
                                                <p key={val[0]}>{val[1]}</p>
                                            </div>
                                        )})}
                            </div>
                            <div className="col prezzi">
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
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="PrezzoTotale">
                                        <p id="textTotale">Totale: </p>
                                        <p id="totale">{tot}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default TariffeCard
