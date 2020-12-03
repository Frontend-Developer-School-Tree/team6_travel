import React, { useState } from "react";


const DocumentiCard =props => {
    const [data,setData]=useState(props.value)
    return(
        <div className="container-fluid">
             <div className="card">
                    {console.log("dati3:",data.titoloDocumenti)}
                    <p id="TitoloDocumenti">{data.titoloDocumenti}</p>
                    <p id="ParagrafoDocumenti">{data.paragrafoDocumenti}</p>
                </div>
        </div>
        )
}

export default DocumentiCard
