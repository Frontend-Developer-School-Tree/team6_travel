import React from 'react'
import '../../assets/css/cardProposta.css'

function PropostaCard(props) {
  return (
    <>
      <div className=" container-fluid containerProposta accordition">
        <div className="row">
          <div className="col">
            {/* --------------ACCORDION CARD PROPOSTA-------------- */}
            <div class="accordion" id="accordionProposta">
              <div class="card">
                <div class="card-header" id="headingProposta">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseProposta"
                      aria-expanded="true"
                      aria-controls="collapseProposta"
                    >
                      <p>Proposta</p>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseProposta"
                  class="collapse show"
                  aria-labelledby="headingProposta"
                  data-parent="#accordionProposta"
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

export default PropostaCard;
