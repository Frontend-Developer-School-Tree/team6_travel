import React from 'react'
import '../../assets/css/cardAssicuration.css'

function AssicurationCard(props) {
    return (
        <>
        <div className=" container-fluid containerAssicuration accordition">
            <div className="card">
              <div className="card-header" role="tab" id="headingAssicuration">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  className="font-weight-bold m-0 title-section text-uppercase link color-title"
                  href="#collapseAssicuration"
                  aria-expanded="true"
                  aria-controls="collapseAssicuration"
                >
                    <p>Assicuration</p>
                </a>
              </div>
              <div
                id="collapseAssicuration"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingAssicuration"
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

export default AssicurationCard
