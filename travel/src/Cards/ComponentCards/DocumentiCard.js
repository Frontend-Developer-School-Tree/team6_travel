import React, { useState } from "react";
import "../../assets/css/cardDocumenti.css";

const DocumentiCard = (props) => {
  const [data, setData] = useState(props.value);
  return (
    <>
      <div className=" container-fluid containerDocumenti accordition">
        <div className="card">
          <div className="card-header" role="tab" id="headingDocumenti">
            <a
              data-toggle="collapse"
              data-parent="#accordionEx"
              className="font-weight-bold m-0 title-section text-uppercase link color-title"
              href="#collapseDocumenti"
              aria-expanded="true"
              aria-controls="collapseDocumenti"
            >
              <p id="TitoloDocumenti">{data.titoloDocumenti}</p>
            </a>
          </div>
          <div
            id="collapseDocumenti"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingDocumenti"
            data-parent="#accordionEx"
          >
            <div className="card-body card-bodyDocumenti">
              <p id="ParagrafoDocumenti">{data.paragrafoDocumenti}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentiCard;
