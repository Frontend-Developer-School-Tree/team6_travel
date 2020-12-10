import React from 'react'
import '../../assets/css/cardCancellation.css'

function CancellationCard(props) {
  return (
    <>
      <div className=" container-fluid containerCancellation accordition">
        <div className="row">
          <div className="col">
            {/* --------------ACCORDION CARD CANCELLATION-------------- */}
            <div class="accordion" id="accordionCancellation">
              <div class="card">
                <div class="card-header" id="headingCancellation">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseCancellation"
                      aria-expanded="true"
                      aria-controls="collapseCancellation"
                    >
                      <p>Cancellation</p>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseCancellation"
                  class="collapse show"
                  aria-labelledby="headingCancellation"
                  data-parent="#accordionCancellation"
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

export default CancellationCard;
