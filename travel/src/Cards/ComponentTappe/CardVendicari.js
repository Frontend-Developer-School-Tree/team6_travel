import React, { useState } from "react";

const CardVendicari = (props) => {
  const [data, setData] = useState(props.value);

  return (
    <div className="card">
        <div
            className="accordion md-accordion"
            id="accordionEx"
            role="tablist"
            aria-multiselectable="true"
        >
            <div className="card-header" role="tab" id="headingTwo2">
            <a
                data-toggle="collapse"
                data-parent="#accordionEx"
                href="#collapseTwo2"
                aria-expanded="true"
                aria-controls="collapseTwo2"
            >
                {console.log("siracusa tappa 2 ->", data.vendicariTappa)}
                <h3 className="mb-0">
                {data.vendicariTappa} {data.dataTappa2}{" "}
                <i
                    className="fas fa-angle-down rotate-icon"
                    style={{ height: 50, width: 50 }}
                />
                </h3>
            </a>
            </div>
            <div
            id="collapseTwo2"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingTwo2"
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
                                {data.titolo2V}{" "}
                                <span style={{ fontSize: "1.2rem", color: "grey" }}>
                                {data.data1V}
                                </span>
                            </h2>
                            <div className="containerImg">
                                <img id="imgDay1" src={data.img1V} />
                            </div>
                            <p>{data.descrizioneImg1V}</p>
                            </div>

                            <div className="row mt-4 mb-3">
                                <div className="col-6">IMG</div>
                                <div className="col-6">
                                    <p>
                                        <b>La Corte del sole</b>
                                    </p>
                                    <br />
                                    <p>
                                        L'hôtel se développe autour du “baglio”, une petite cour
                                        intérieure de pierres blanches où se déroulait autrefois
                                        la vie des travailleurs de la ferme. Pendant les chaudes
                                        soirées d'été, c'est l'endroit idéal pour les événements
                                        à thème, gastronomie et spectacles.
                                    </p>
                                    <p>
                                        <a href="">Clicca qui per maggiori dettagli</a>
                                    </p>
                                    <br />
                                    <button type="button" className="btn btn-primary mr-3">
                                        Famiglia
                                    </button>
                                    <button type="button" className="btn btn-primary mr-3">
                                        Piscina
                                    </button>
                                    <button type="button" className="btn btn-primary ">
                                        Frontespiaggia
                                    </button>
                                </div>
                            </div>

                            <div className="row mt-5 mb-4">
                                <div className="col-1">ICONA V</div>
                                <div className="col-5">
                                    <p>
                                        <b>petit déjeuner</b>
                                        <br />
                                        prise en charge de la voiture de location
                                    </p>
                                </div>
                                <div className="col-1">ICONA X</div>
                                <div className="col-5">
                                    <p>
                                        repas de midi et du soir
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
  );
};

export default CardVendicari;
