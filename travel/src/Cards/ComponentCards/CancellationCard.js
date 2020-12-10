import React from 'react'
import '../../assets/css/cardCancellation.css'


function CancellationCard(props) {
    return (
        <>
        <div className=" container-fluid containerCancellation accordition">
            <div className="card">
              <div className="card-header" role="tab" id="headingCancellation">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  className="font-weight-bold m-0 title-section text-uppercase link color-title"
                  href="#collapseCancellation"
                  aria-expanded="true"
                  aria-controls="collapseCancellation"
                >
                    <p>Cancellation</p>
                </a>
              </div>
              <div
                id="collapseCancellation"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingCancellation"
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

export default CancellationCard
