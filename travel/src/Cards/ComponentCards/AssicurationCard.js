import React from "react";
import "../../assets/css/cardAssicuration.css";

function AssicurationCard(props) {
  return (
    <>
      <div className=" container-fluid containerAssicuration accordition">
        <div className="row">
          <div className="col">
            {/* --------------ACCORDION CARD ASSICURATION-------------- */}
            <div class="accordion" id="accordionAssicuration">
              <div class="card">
                <div class="card-header" id="headingAssicuration">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseAssicuration"
                      aria-expanded="true"
                      aria-controls="collapseAssicuration"
                    >
                      <p>Assicuration</p>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseAssicuration"
                  class="collapse show"
                  aria-labelledby="headingAssicuration"
                  data-parent="#accordionAssicuration"
                >
                  <div class="card-body">
                    <p>{props.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssicurationCard;
