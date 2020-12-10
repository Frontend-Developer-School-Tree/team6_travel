import React from 'react'
import '../../assets/css/cardPagAnt.css'

function PagamentoanticipCard(props) {
  return (
    <>
      <div className=" container-fluid containerPagAnt accordition">
        <div className="row">
          <div className="col">
            {/* --------------ACCORDION CARD PAGAMENTO ANTICIPATO-------------- */}
            <div class="accordion" id="accordionPagAnt">
              <div class="card">
                <div class="card-header" id="headingPagAnt">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapsePagAnt"
                      aria-expanded="true"
                      aria-controls="collapsePagAnt"
                    >
                      <p>Pagamento con Anticipo</p>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapsePagAnt"
                  class="collapse show"
                  aria-labelledby="headingPagAnt"
                  data-parent="#accordionPagAnt"
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

export default PagamentoanticipCard;
