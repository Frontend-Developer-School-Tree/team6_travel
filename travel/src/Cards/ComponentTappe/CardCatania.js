import React, { useState } from "react";
import "../../assets/drop.css";
import Timeline from "../Timeline";

const CardCatania = (props) => {
  const [data, setData] = useState(props.value);

  return (
    <div className=" container-fluid containerTariffe accordition">
      <div className="row">
        <div className="col">
          <div class="accordion" id="accordionTariffe">
            <div className="card">
              <div
                className="accordion md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="card-header" role="tab" id="headingFour4">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    href="#collapseFour4"
                    aria-expanded="true"
                    aria-controls="collapseFour4"
                  >
                    {console.log("catania tappa 4 ->", data.vendicariTappa)}
                    <h3 className="mb-0">
                      {data.cataniaTappa} {data.dataTappa4}{" "}
                      <i
                        className="fas fa-angle-down rotate-icon"
                        style={{ height: 50, width: 50 }}
                      />
                    </h3>
                  </a>
                </div>

                <div
                  id="collapseFour4"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingFour4"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    <div className="container-fluid p-0">
                      <div className="row">
                        <div className="col-1 d-xl-block dots">
                          <Timeline day={7}/>
                        </div>
                        <div className="col-11 col-xl-11 p-0">
                          <div className="contday h2">
                            {console.log("dati catania", data.img1C)}
                            <h2>
                              {data.titolo1C}{" "}
                              <span
                                style={{ fontSize: "1.2rem", color: "grey" }}
                              >
                                {data.data1C}
                              </span>
                            </h2>
                            <div className="">
                              <img className="container-image-cover" src={data.img1C} />
                            </div>
                            <p>{data.descrizioneImg1C}</p>
                          </div>
                          <div className="row mt-3 mb-4">
                              <div className="col-1"></div>
                              <div className="col-4">
                                <i
                                  class="far fa-check-circle"
                                  aria-hidden="true"
                                  style={{
                                    backgroundColor: "rgb(176, 238, 211)",
                                    color: "rgb(58, 190, 138)",
                                    fontSize: "40px",
                                    borderRadius: "100%;",
                                  }}
                                ></i>
                                <p>
                                  <b>petit déjeuner</b>
                                  <br />
                                  prise en charge de la voiture de location
                                </p>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCatania;
