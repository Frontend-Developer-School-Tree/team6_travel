import React, { useState } from "react";
import "../../assets/css/cardDocumenti.css";

const DocumentiCard = (props) => {
  const [data, setData] = useState(props.value);
  return (
    <>
      <div className=" container-fluid containerDocumenti accordition">
        <div className="row">
          <div className="col">
            {/* --------------ACCORDION CARD DOCUMENTI-------------- */}
            <div class="accordion" id="accordionDocumenti">
              <div class="card">
                <div class="card-header" id="headingDocumenti">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseDocumenti"
                      aria-expanded="true"
                      aria-controls="collapseDocumenti"
                    >
                      <p>{data.titoloDocumenti}</p>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseDocumenti"
                  class="collapse show"
                  aria-labelledby="headingDocumenti"
                  data-parent="#accordionDocumenti"
                >
                  <div class="card-body">
                    <p>{data.paragrafoDocumenti}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentiCard;
