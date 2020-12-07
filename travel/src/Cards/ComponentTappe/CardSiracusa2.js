import React, { useState } from "react";

function CardSiracusa2(props) {
  const [data, setData] = useState(props.value);
  return (
    // <div className="container-fluid containerTariffe">
    <div className="card">
      <div
        className="accordion md-accordion"
        id="accordionEx"
        role="tablist"
        aria-multiselectable="true"
      >
        <div className="card-header" role="tab" id="headingThree3">
          <a
            data-toggle="collapse"
            data-parent="#accordionEx"
            href="#collapseThree3"
            aria-expanded="true"
            aria-controls="collapseThree3"
          >
            {console.log("siracusa tappa 1 ->", data.siracusaTappa)}
            <h3 className="mb-0">
              {data.siracusa1Tappa} {data.dataTappa3}{" "}
              <i
                className="fas fa-angle-down rotate-icon"
                style={{ height: 50, width: 50 }}
              />
            </h3>
          </a>
        </div>
        <div
          id="collapseThree3"
          className="collapse show"
          role="tabpanel"
          aria-labelledby="headingThree3" 
          data-parent="#accordionEx"
        >
          <div className="card-body">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-1 d-none d-xl-block">
                  timeline
                  {/* <Timeline /> */}
                </div>
                <div className="col-11 col-xl-11 p-0">
                  <div>
                    {console.log("dati giorno 1", data)}
                    <h2>
                      {data.titolo1S1}{" "}
                      <span style={{ fontSize: "1.2rem", color: "grey" }}>
                        {data.data1S2}
                      </span>
                    </h2>
                    <div className="containerImg">
                      <img id="imgDay1" src={data.img1S2} />
                    </div>
                    <p>{data.descrizioneImg1S2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default CardSiracusa2;
