import React, { useState } from "react";
import "../../assets/css/cardDocumenti.css";

const DocumentiCard = (props) => {
  const [data, setData] = useState(props.value);
  return (
    <div className="container-fluid containerDocumenti">
      <div className="row">
        <div
          className="card"
          style={{
            width: "80vw",
          }}
        >
          <div className="card-body card-bodyDocumenti">
            {console.log("dati3:", data.titoloDocumenti)}
            <p id="TitoloDocumenti">{data.titoloDocumenti}</p>
            <p id="ParagrafoDocumenti">{data.paragrafoDocumenti}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentiCard;
