import React, { useState } from "react";
import "../../assets/drop.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Timeline from "../Timeline";

const CardSiracusa1 = (props) => {
  const [data, setData] = useState(props.value);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

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
                <div className="card-header" role="tab" id="headingOne1">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    href="#collapseOne1"
                    aria-expanded="true"
                    aria-controls="collapseOne1"
                  >
                    {console.log("siracusa tappa 1 ->", data.siracusaTappa)}
                    <h3 className="mb-0">
                      {data.siracusa1Tappa} {data.dataTappa1}{" "}
                      <i
                        className="fas fa-angle-down rotate-icon"
                        style={{ height: 50, width: 50 }}
                      />
                    </h3>
                  </a>
                </div>
                <div
                  id="collapseOne1"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne1"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    <div className="container-fluid p-0">
                      <div className="row">
                        <div className="col-1 d-xl-block dots">
                          <Timeline day={1} />
                        </div>
                        <div className="col-11 col-xl-11 p-0">
                          <div className="contday h2">
                            {console.log("dati giorno 1", data.dataInizio)}
                            <h2>
                              {data.titolo1S1}{" "}
                              <span
                                style={{ fontSize: "1.2rem", color: "grey" }}
                              >
                                {data.data1S1}
                              </span>
                            </h2>
                            <div className="container-image-cover">
                              <img
                                className="container-image-cover"
                                src={data.img1S1}
                              />
                            </div>
                            <p>{data.descrizioneImg1S1}</p>
                          </div>

                          {/* border cliccabile che dovrebbe uscire una modal */}
                          <div className="row mt-3" onClick={handleShow}>
                            <div className="typology-transfer">
                              <i className="fas fa-car-alt transfer-center"></i>
                            </div>
                            <div className="col m-4">
                              <div className="row">AUTO CAT. B</div>
                              <div className="row">
                                <div className="col">
                                  LUOGO DI RITIRO
                                  <button
                                    type="button"
                                    className="btn btn-primary aereoporto"
                                  >
                                    Aereoporto Fontanarossa
                                  </button>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  LUOGO DI RILASCIO
                                  <button
                                    type="button"
                                    className="btn btn-primary aereoporto"
                                  >
                                    Aereoporto Fontanarossa
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <>
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Auto catégorie B</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <>
                                  <i
                                    className="fas fa-car-alt"
                                    id="carModal"
                                  ></i>
                                  <p>Tipologia Auto</p>
                                  <div>
                                    {" "}
                                    Luogo di ritiro:{" "}
                                    <a href="#">Aeroporto Fontanarossa</a>
                                  </div>
                                  <div>
                                    Data di ritiro: <a href="#">20.11.2020</a>
                                  </div>
                                  <div>
                                    Luogo di Rilascio:{" "}
                                    <a href="#">Aeroporto Fontanarossa</a>
                                  </div>
                                  <div>
                                    Data di rilascio: <a href="#">27.11.2020</a>
                                  </div>
                                  <p style={{ marginTop: 10 }}>
                                    {" "}
                                    IL NOLEGGIO AUTO COMPRENDE{" "}
                                  </p>
                                  <ul>
                                    <p className="ws">
                                      PRIX VOITURE DE LOCATION- Catégorie de la
                                      voiture: <br /> C (type Renault Clio ou
                                      similaire) <br /> •Prise en charge prévue
                                      le 02/06/2020 au bureau de location de
                                      l’aéroport de Palerme;
                                      <br /> •Restitution prévue le 13/06/2020
                                      au bureau de location de l’aéroport de
                                      Palerme;
                                      <br />- Tolérance restitution: 59 min. en
                                      charge; <br />- Kilométrage illimité{" "}
                                      <br />- Air Conditionné - TW Vol et CDW
                                      Dégâts avec franchises; - P.A.I.; <br />-
                                      Assurance personnel accidents, - Charges
                                      d'aéroport, <br />- n° 1 conducteur; - TVA
                                      22%,
                                    </p>
                                  </ul>
                                  <div>
                                    SITO WEB <a href="#">www.rentcar.it</a>
                                  </div>
                                </>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Chiudi
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </>
                          <div className="row mt-3" onClick={handleShow2}>
                            <div className="col-6">
                              <img
                                src="http://51.77.82.133:86/api/images/172/images/kQIgjJi2wiKRDCUL.jpeg"
                                className="container-image-cover"
                              />
                            </div>
                            <div className="col-6">
                              <h3>
                                Villa Igiea
                                <br />
                                <br />
                              </h3>
                              <p>
                                <a href="">Clicca qui per maggiori dettagli</a>
                                <br />
                                Dispose de de 122 chambres réparties sur 3
                                étages. Restaurants, bar. Salles de réunions.
                                Wi-Fi (gratuit). Parking (gratuit).
                              </p>
                            </div>
                          </div>
                          <>
                            <Modal show={show2} onHide={handleClose2}>
                              <Modal.Header closeButton>
                                <Modal.Title>Villa Igiea</Modal.Title>
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
                                        Dispose de de 122 chambres réparties sur
                                        3 étages. Restaurants, bar. Salles de
                                        réunions.
                                        <br />
                                        Wi-Fi (gratuit). Parking (gratuit).
                                      </div>
                                      <p style={{ marginTop: 10 }}>
                                        <strong>Ristorante</strong>
                                      </p>
                                      <div>
                                        Le restaurant Cuvée du Jour propose une
                                        cuisine Gourmet et une sélection de vins
                                        prestigieux <br />
                                        (ouvert le soir, du mardi à dimanche).
                                        Le restaurant Donna Franca Florio, avec
                                        sa terrasse donnant sur la mer,
                                        <br />
                                        propose des spécialités méditerranéennes
                                        (ouvert à midi et tous les soirs, de
                                        novembre à mars).
                                        <br />
                                        Le Pull & Grill Bar propose des
                                        grillades en été.
                                        <br />
                                        Le bar Des Arcades, situé sur la
                                        terrasse panoramique, propose snacks et
                                        cocktails, piano-bar le soir.
                                      </div>
                                      <p style={{ marginTop: 10 }}>
                                        <strong>Camere</strong>
                                      </p>
                                      <div>
                                        Chambres climatisées, rénovées, avec
                                        salle de bain/WC, sèche-cheveux,
                                        téléphone, TV via satellite, <br />
                                        Wi-Fi (gratuit), coffre-fort et mini-bar
                                        (payant). Les Classic (19 m2) ont vue
                                        sur la rue ou sur la cour intérieure.{" "}
                                        <br />
                                        Les Supérieure (19 m2) on vue sur les
                                        jardins luxuriants. <br />
                                        Les Deluxe (30 m2) et les Deluxe Premium
                                        (35 m2) sont décorées dans le style
                                        "Liberty Style",
                                        <br /> sont spacieuses avec terrasse
                                        privée surplombant la baie de Palerme.
                                        <br /> Les Suite (45 au 55 m2) disposent
                                        d'un salon séparé.
                                      </div>
                                      <p style={{ marginTop: 10 }}>
                                        <strong>Servizi</strong>
                                      </p>
                                      <div>
                                        Sports et divertissements: piscine.
                                        Court de tennis, salle de fitness.{" "}
                                        <br />
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
                                <Button
                                  variant="secondary"
                                  onClick={handleClose2}
                                >
                                  Chiudi
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </>
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
                        {/******************* */}
                      <div className="row">
                        <div className="col-1 d-xl-block dots">
                          <Timeline day={2} />
                        </div>
                        <div className="col-11 col-xl-11 p-0">
                          <div className="contday h2">
                            {console.log("dati giorno 1", data.dataInizio)}
                            <h2>
                              {data.titolo2S1}{" "}
                              <span
                                style={{ fontSize: "1.2rem", color: "grey" }}
                              >
                                {data.data1S1}
                              </span>
                            </h2>
                            <div className="container-image-cover">
                              <img
                                className="container-image-cover"
                                src={data.img2S1}
                              />
                            </div>

                            <p>{data.descrizioneImg2S1}</p>
                          </div>

                          {/* border cliccabile che dovrebbe uscire una modal */}

                          <div className="row mt-3" onClick={handleShow4}>
                            <div className="col-6">
                              <img
                                src="http://51.77.82.133:86/api/images/172/images/kQIgjJi2wiKRDCUL.jpeg"
                                className="container-image-cover"
                              />
                            </div>
                            <div className="col-md-5 accdialog">
                              <div role="button">
                                <div>
                                  <strong>La Corte del sole</strong>
                                </div>
                                <div className="small-text">
                                  L'hôtel se développe autour du “baglio”, une
                                  petite cour intérieure de pierres blanches
                                  où se déroulait autrefois la vie des
                                  travailleurs de la ferme. Pendant les
                                  chaudes soirées d'été, c'est l'endroit idéal
                                  pour les événements à thème, gastronomie et
                                  spectacles.
                                </div>
                                <div>
                                  <a style={{ color: "rgb(0, 99, 201" }}>
                                    Clicca qui per maggiori dettagli
                                  </a>
                                </div>
                                <button className="btn btn-primary tag">
                                  Frontespiaggia
                                </button>
                                <button class="btn btn-primary tag">
                                  Piscina
                                </button>
                              </div>
                            </div>
                          </div>
                          <>
                            <Modal show={show4} onHide={handleClose4}>
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
                                        L'hôtel se développe autour du
                                        “baglio”, une petite cour intérieure
                                        de pierres blanches où se déroulait
                                        autrefois la vie des travailleurs de
                                        la ferme. <br />
                                        Pendant les chaudes soirées d'été,
                                        c'est l'endroit idéal pour les
                                        événements à thème, gastronomie et
                                        spectacles.
                                        <br />
                                      </div>
                                      <p style={{ marginTop: 10 }}>
                                        <strong>Ristorante</strong>
                                      </p>
                                      <div>
                                        Le restaurant offre des recettes
                                        simples de plats délicats appartenant
                                        à la tradition sicilienne, <br />
                                        souvent enrichies d'ingrédients
                                        typiques du territoire, en fonction
                                        des saisons. bar le soir.
                                      </div>
                                      <p style={{ marginTop: 10 }}>
                                        <strong>Camere</strong>
                                      </p>
                                      <div>
                                        L'hôtel dispose de 34 chambres: chaque
                                        chambre est équipée d'un frigo-bar,<br />
                                        d'un coffre-fort, de climatisation
                                        été/hiver, de télévision satellitaire,
                                        du téléphone, d’un sèche-cheveux,<br />
                                        d'une salle de bain avec douche, sauf
                                        deux chambres avec baignoire pour les
                                        personnes porteuses de handicap et
                                        deux avec douche hydromassage.
                                      </div>
                                      <p style={{ marginTop: 10 }}>
                                        <strong>Servizi</strong>
                                      </p>
                                      <div>
                                        Sports et divertissements: piscine.
                                        Court de tennis, salle de fitness.{" "}
                                        <br />
                                        Animation piano-bar tous les soirs.
                                        Remarque: surplombant la mer, <br />
                                        l'hôtel s'apparente à un petit château
                                        entouré de jardins en terrasses,
                                        <br />
                                        un aménagement de style art nouveau.
                                        Service de navette (d'avril à octobre,
                                        payant) pour le centre-ville de
                                        Palerme.
                                      </div>
                                    </div>
                                  </div>
                                </>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose4}
                                >
                                  Chiudi
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </>
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

export default CardSiracusa1;
