import React, { useState } from "react";
import "../../assets/css/cardTariffe.css";

function TariffeCard(props) {
  const [data, setData] = useState(props.value);
  let tot = 0;
  //calcola il totale complessivo dei prezzi
  function totale(price) {
    tot += price;
  }
  return (
    // <>
    //   <div className=" container-fluid containerTariffe accordition">
    //     <div className="card">
    //       <div className="card-header" role="tab" id="headingTariffe">
    //         <a
    //           data-toggle="collapse"
    //           data-parent="#accordionEx"
    //           className="font-weight-bold m-0 title-section text-uppercase link color-title"
    //           href="#collapseTariffe"
    //           aria-expanded="true"
    //           aria-controls="collapseTariffe"
    //         >
    //           <p>Tariffe</p>
    //         </a>
    //       </div>
    //       <div
    //         id="collapseTariffe"
    //         className="collapse show"
    //         role="tabpanel"
    //         aria-labelledby="headingTariffe"
    //         data-parent="#accordionEx"
    //       >
    //   <div className="card-body card-bodyTariffe">
    //     <div className="col tipologia">
    //       {/**map dei type:adulto e adolescente */}
    //       {Object.entries(data.type).map((val) => {
    //         //val[0] perchè è la key di ogni riga dell'object
    //         {
    //           console.log("tariffa", val[1]);
    //         }
    //         return (
    //           <>
    //             <p key={val[0]}>{val[1]}</p>
    //           </>
    //         );
    //       })}
    //     </div>
    //     <div className="col prezzi">
    //       {/**map dei prezzi */}
    //       {Object.entries(data.prezzi).map((val) => {
    //         //val[0] perchè è la key di ogni riga dell'object
    //         {
    //           console.log("tariffa", val[1]);
    //         }
    //         return (
    //           <>
    //             {totale(val[1])}
    //             <p key={val[0]}>{val[1]}</p>
    //           </>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div className="card-body card-bodyTotale">
    //     <div className="col prezzoTotale">
    //       <p id="textTotale">Totale: </p>
    //       <p id="totale">{tot}€</p>
    //     </div>
    //   </div>
    //   <div className="card-body card-bodyDettagli">
    //     <div className="Comprende">
    //       <p className="comprendeTitle">{data.strComprende}</p>
    //       <p className="comprendePar">{data.included}</p>
    //     </div>
    //     <div className="NonComprende">
    //       <p className="comprendeTitle">{data.strNonComprende}</p>
    //       <p className="comprendePar">{data.notIncluded}</p>
    //     </div>
    //   </div>
    // </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className=" container-fluid containerTariffe accordition">
        <div className="row">
          <div className="col">
            {/* --------------ACCORDION CARD TARIFFE-------------- */}
            <div class="accordion" id="accordionTariffe">
              <div class="card">
                <div class="card-header" id="headingTariffe">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTariffe"
                      aria-expanded="true"
                      aria-controls="collapseTariffe"
                    >
                      <p>Tariffe</p>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseTariffe"
                  class="collapse show"
                  aria-labelledby="headingTariffe"
                  data-parent="#accordionTariffe"
                >
                  <div className="card-body card-bodyTariffe">
                    <div className="col tipologia">
                      {/**map dei type:adulto e adolescente */}
                      {Object.entries(data.type).map((val) => {
                        //val[0] perchè è la key di ogni riga dell'object
                        {
                          console.log("tariffa", val[1]);
                        }
                        return (
                          <>
                            <p key={val[0]}>{val[1]}</p>
                          </>
                        );
                      })}
                    </div>
                    <div className="col prezzi">
                      {/**map dei prezzi */}
                      {Object.entries(data.prezzi).map((val) => {
                        //val[0] perchè è la key di ogni riga dell'object
                        {
                          console.log("tariffa", val[1]);
                        }
                        return (
                          <>
                            {totale(val[1])}
                            <p key={val[0]}>{val[1]}</p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="card-body card-bodyTotale">
                    <div className="col prezzoTotale">
                      <p id="textTotale">Totale: </p>
                      <p id="totale">{tot}€</p>
                    </div>
                  </div>
                  <div className="card-body card-bodyDettagli">
                    <div className="Comprende">
                      <p className="comprendeTitle">{data.strComprende}</p>
                      <p className="comprendePar">{data.included}</p>
                    </div>
                    <div className="NonComprende">
                      <p className="comprendeTitle">{data.strNonComprende}</p>
                      <p className="comprendePar">{data.notIncluded}</p>
                    </div>
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

export default TariffeCard;
