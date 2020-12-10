import React from 'react'
import '../../assets/css/cardPagAnt.css'

function PagamentoanticipCard(props) {
    return (
        <>
        <div className=" container-fluid containerPagAnt accordition">
            <div className="card">
              <div className="card-header" role="tab" id="headingPagAnt">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  className="font-weight-bold m-0 title-section text-uppercase link color-title"
                  href="#collapsePagAnt"
                  aria-expanded="true"
                  aria-controls="collapsePagAnt"
                >
                    <p>Pagamento con Anticipo</p>
                </a>
              </div>
              <div
                id="collapsePagAnt"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingPagAnt"
                data-parent="#accordionEx"
              >
                <div className="card-body card-bodyAssicuration">
                    <p>{props.value}</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default PagamentoanticipCard
