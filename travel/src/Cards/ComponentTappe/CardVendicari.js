import React, { useState } from "react";
import Timeline from "../Timeline";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../assets/drop.css";
const CardVendicari = (props) => {
  const [data, setData] = useState(props.value);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                        <div className="col-1 d-xl-block dots">
                          <Timeline day={3} />
                        </div>
                        <div className="col-11 col-xl-11 p-0">
                          <span>{data.vendicariTappa}</span>
                          <div className="contday h2">
                            {console.log("dati giorno 1", data)}
                            <h2>
                              {data.titolo1V}
                              {data.titolo2V}{" "}
                              <span
                                style={{ fontSize: "1.2rem", color: "grey" }}
                              >
                                {data.data1V}
                              </span>
                            </h2>
                            <div className="container-image-top">
                              <img id="imgDay1" src={data.img1V} />
                            </div>
                            <p>{data.descrizioneImg1V}</p>
                          </div>

                          <div className="row mt-4 mb-3">
                            <div className="col-6">
                              <img
                                className="container-image-cover"
                                src="http://51.77.82.133:86/api/images/144/images/hmO0z66ST5TkSZeJ.jpeg"
                              />
                            </div>
                            <div className="col-6" onClick={handleShow}>
                              <p>
                                <b>La Corte del sole</b>
                              </p>
                              <br />
                              <p>
                                L'hôtel se développe autour du “baglio”, une
                                petite cour intérieure de pierres blanches où se
                                déroulait autrefois la vie des travailleurs de
                                la ferme. Pendant les chaudes soirées d'été,
                                c'est l'endroit idéal pour les événements à
                                thème, gastronomie et spectacles.
                              </p>
                              <p>
                                <a href="">Clicca qui per maggiori dettagli</a>
                              </p>
                              <br />
                              <button
                                type="button"
                                className="btn btn-primary aereoporto"
                              >
                                Famiglia
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary aereoporto"
                              >
                                Piscina
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary aereoporto"
                              >
                                Frontespiaggia
                              </button>
                            </div>
                          </div>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>La Corte del sole</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <>
                                <div>
                                  <strong>Hotel</strong>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <br />
                                    <div className="row p-2">
                                      <img
                                        src="http://51.77.82.133:86/api/images/172/images/kQIgjJi2wiKRDCUL.jpeg"
                                        className="container-image-cover"
                                      />
                                    </div>
                                    <br />
                                    <p style={{ marginTop: 10 }}>
                                      <strong>Descrizione</strong>
                                    </p>
                                    <div>
                                      L'hôtel se développe autour du “baglio”,
                                      une petite cour intérieure de pierres
                                      blanches où se déroulait autrefois la vie
                                      des travailleurs de la ferme. <br />
                                      Pendant les chaudes soirées d'été, c'est
                                      l'endroit idéal pour les événements à
                                      thème, gastronomie et spectacles.
                                      <br />
                                    </div>
                                    <p style={{ marginTop: 10 }}>
                                      <strong>Ristorante</strong>
                                    </p>
                                    <div>
                                      Le restaurant offre des recettes simples
                                      de plats délicats appartenant à la
                                      tradition sicilienne, <br />
                                      souvent enrichies d'ingrédients typiques
                                      du territoire, en fonction des saisons.
                                      bar le soir.
                                    </div>
                                    <p style={{ marginTop: 10 }}>
                                      <strong>Camere</strong>
                                    </p>
                                    <div>
                                      L'hôtel dispose de 34 chambres: chaque
                                      chambre est équipée d'un frigo-bar,
                                      <br />
                                      d'un coffre-fort, de climatisation
                                      été/hiver, de télévision satellitaire, du
                                      téléphone, d’un sèche-cheveux,
                                      <br />
                                      d'une salle de bain avec douche, sauf deux
                                      chambres avec baignoire pour les personnes
                                      porteuses de handicap et deux avec douche
                                      hydromassage.
                                    </div>
                                    <p style={{ marginTop: 10 }}>
                                      <strong>Servizi</strong>
                                    </p>
                                    <div>
                                      Sports et divertissements: piscine. Court
                                      de tennis, salle de fitness. <br />
                                      Animation piano-bar tous les soirs.
                                      Remarque: surplombant la mer, <br />
                                      l'hôtel s'apparente à un petit château
                                      entouré de jardins en terrasses,
                                      <br />
                                      un aménagement de style art nouveau.
                                      Service de navette (d'avril à octobre,
                                      payant) pour le centre-ville de Palerme.
                                    </div>
                                  </div>
                                </div>
                              </>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Chiudi
                              </Button>
                            </Modal.Footer>
                          </Modal>
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
                          <div class="notinclude col-md-6">
                            <i
                              class="far fa-times-circle"
                              aria-hidden="true"
                              style={{

                                backgroundColor: " rgb(253, 209, 218)",
                                color: " color: rgb(191, 98, 117)",
                                fontSize: "40px",
                                borderRadius: "100%;",
                              }}
                            ></i>{" "}
                            <p style={{color:"red"}}>repas de midi et du soir</p>
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

export default CardVendicari;
