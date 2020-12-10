import React from "react"
import '../../assets/css/cardProposta.css'

function PropostaCard(props) {
  return (
    <>
      <div className=" container-fluid containerProposta accordition">
        <div className="card">
          <div className="card-header" role="tab" id="headingProposta">
            <a
              data-toggle="collapse"
              data-parent="#accordionEx"
              className="font-weight-bold m-0 title-section text-uppercase link color-title"
              href="#collapseProposta"
              aria-expanded="true"
              aria-controls="collapseProposta"
            >
              <p>Proposta</p>
            </a>
          </div>
          <div
            id="collapseProposta"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingProposta"
            data-parent="#accordionEx"
          >
            <div className="card-body card-bodyAssicuration">
              <p>{props.value}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropostaCard;
