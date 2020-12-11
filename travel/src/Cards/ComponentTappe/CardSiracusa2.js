import React, { useState } from "react";
import "../../assets/css/CardSiracusa2.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../assets/drop.css";
import Timeline from "../Timeline";

function CardSiracusa2(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState(props.value);

  const imgs = [
    data.img1Pargrafo,
    data.img2Pargrafo,
    data.img3Pargrafo,
    data.img4Pargrafo,
  ];
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //   const [siracusa2,setSiracusa2]=useState({
  //     siracusa1Tappa,titolo1S2,data1S2,img1S2,dataTappa3,descrizioneImg2S,
  //     img1Pargrafo,img2Pargrafo,img3Pargrafo,img4Pargrafo
  // })
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
                        <div className="col-1 d-xl-block dots">
                          <Timeline day={4} />
                        </div>
                        <div className="col-11 col-xl-11 p-0">
                          <div className="contday h2">
                            {console.log("dati giorno 1", data.dataInizio)}
                            <h2>
                              {data.titolo1S2}{" "}
                              <span
                                style={{ fontSize: "1.2rem", color: "grey" }}
                              >
                                {data.data1S1}
                              </span>
                            </h2>
                            <div className="containerImg">
                              <img id="imgDay1" src={data.img1Pargrafo} />
                            </div>
                            <p>{data.descrizioneImg2S}</p>
                          </div>
                          <div className="row my-3">
                            <div className="col-12 col-xl-6">
                              <div className="row pl-4">
                                <div className="col-12 padding-card">
                                  <p className="body-section rob font-weight-bold">
                                    Alternativa 1
                                  </p>
                                </div>
                              </div>
                              {/** immagini sotto il paragrafo Alternativa 1 */}
                              <div className="row pl-4" onClick={handleShow}>
                                <div className="col-12">
                                  <div className="container-gallery">
                                    <div
                                      className="container-image"
                                      style={{
                                        backgroundImage: `url(${data.img1Pargrafo})`,
                                      }}
                                    ></div>
                                    <div
                                      className="container-image"
                                      style={{
                                        backgroundImage: `url(${data.img2Pargrafo})`,
                                        objectFit: "cover",
                                      }}
                                    ></div>
                                    <div
                                      className="container-image"
                                      style={{
                                        backgroundImage: `url(${data.img3Pargrafo})`,
                                      }}
                                    ></div>
                                    <div
                                      aria-hidden="true"
                                      className="modal custom-modal"
                                    >
                                      <div
                                        role="document"
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header bg-white">
                                            <button
                                              type="button"
                                              aria-label=""
                                              className="close text-black"
                                            >
                                              <span aria-hidden="true">×</span>
                                            </button>
                                          </div>
                                          <div className="modal-body bg-white">
                                            <div className="row">
                                              <div className="col-12">
                                                <div
                                                  className="container-image-top"
                                                  style={{
                                                    backgroundImage: `url(${data.img1Pargrafo})`,
                                                  }}
                                                ></div>
                                              </div>
                                            </div>
                                            <div className="row mt-3">
                                              <div className="col-12">
                                                <div className="container-preview-gallery">
                                                  <div
                                                    className="container-image"
                                                    style={{
                                                      backgroundImage: `url(${data.img1Pargrafo})`,
                                                    }}
                                                  ></div>
                                                  <div
                                                    className="container-image"
                                                    style={{
                                                      backgroundImage: `url(${data.img2Pargrafo})`,
                                                    }}
                                                  ></div>
                                                  <div
                                                    className="container-image"
                                                    style={{
                                                      backgroundImage: `url(${data.img3Pargrafo})`,
                                                    }}
                                                  ></div>
                                                  <div
                                                    className="container-image"
                                                    style={{
                                                      backgroundImage: `url("null")`,
                                                    }}
                                                  ></div>
                                                  <div
                                                    className="container-image"
                                                    style={{
                                                      backgroundImage: `url(${data.img4Pargrafo})`,
                                                    }}
                                                  ></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <>
                                      <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                          <Modal.Title>Gallery</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                          <>
                                            <div>
                                              <div className="row">
                                                <div className="col-md-12">
                                                  {imgs.map((val, i) => {
                                                    return (
                                                      <>
                                                        <>
                                                          <div
                                                            key={i}
                                                            className="col-sm-3"
                                                          >
                                                            <img
                                                              src={val}
                                                              style={{
                                                                width: "100%",
                                                                height: "auto",
                                                              }}
                                                            />
                                                          </div>
                                                        </>
                                                      </>
                                                    );
                                                  })}
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <Button
                                            variant="secondary"
                                            onClick={handleClose}
                                          >
                                            Close
                                          </Button>
                                        </Modal.Footer>
                                      </Modal>
                                    </>
                                    ;
                                    <div className="container-gallery-vertical">
                                      <div
                                        className="image-miniature"
                                        style={{
                                          backgroundImage: `url("null")`,
                                        }}
                                      ></div>
                                      <div
                                        className="image-miniature"
                                        style={{
                                          backgroundImage: `url(${data.img4Pargrafo})`,
                                        }}
                                      ></div>
                                    </div>
                                    <div className="col">
                                      <div style={{ breakInside: "avoid" }}>
                                        <div
                                          className="col-12 hover-section p-4"
                                          onClick={handleShow2}
                                        >
                                          <div>
                                            <p className="rob title-hotel title-section font-weight-bold">
                                              Tenuta San Michele
                                            </p>
                                            <p className="small-text rob">
                                              l'agritourisme appartient au
                                              cellier renommé Tenuta San Michele
                                              du Baron Emanuele Scammacca del
                                              Murgo, où sont produits des vins
                                              typiques du terroir et un vin
                                              mousseux. Possibilité de
                                              participer aux activités du
                                              cellier, dégustation de vins et
                                              visite des caves avec guide.
                                            </p>
                                            <p className="small-text rob">
                                              <a>
                                                Clicca qui per maggiori dettagli
                                              </a>
                                            </p>
                                          </div>
                                          <div className="d-flex">
                                            <p className="text-blue radius-50 btn-outline mr-2">
                                              agritourisme
                                            </p>
                                            <p className="text-blue radius-50 btn-outline mr-2">
                                              panoramique{" "}
                                            </p>
                                            <p className="text-blue radius-50 btn-outline mr-2">
                                              vignoble
                                            </p>
                                          </div>
                                        </div>
                                        <div className="modal custom-modal ">
                                          <div className="modal-dialog modal-dialog-centered modal-xl">
                                            <Modal
                                              show={show2}
                                              onHide={handleClose2}
                                            >
                                              <Modal.Header closeButton>
                                                <Modal.Title>
                                                  Tenuta San Michele
                                                </Modal.Title>
                                              </Modal.Header>
                                              <Modal.Body>
                                                <>
                                                  <div className="row my-3">
                                                    <div className="col-12 rob small-text">
                                                      <p className="rob">
                                                        Agriturismo
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <div className="container-img">
                                                    <div
                                                      className="image"
                                                      style={{
                                                        backgroundImage: `url(${data.img1Pargrafo})`,
                                                      }}
                                                    ></div>
                                                    <div
                                                      className="image"
                                                      style={{
                                                        backgroundImage: `url(${data.img2Pargrafo})`,
                                                      }}
                                                    ></div>
                                                    <div
                                                      className="image"
                                                      style={{
                                                        backgroundImage: `url(${data.img3Pargrafo})`,
                                                      }}
                                                    ></div>
                                                    <div className="row mt-4 w-100">
                                                      <p className="col-12 small-text rob text-uppercase font-weight-bold">
                                                        Descrizione
                                                      </p>
                                                      <div className="col-12 rob small-text">
                                                        l'agritourisme
                                                        appartient au cellier
                                                        renommé Tenuta San
                                                        Michele du Baron
                                                        Emanuele Scammacca del
                                                        Murgo, où sont produits
                                                        des vins typiques du
                                                        terroir et un vin
                                                        mousseux. Possibilité de
                                                        participer aux activités
                                                        du cellier, dégustation
                                                        de vins et visite des
                                                        caves avec guide.
                                                      </div>
                                                    </div>
                                                    <div className="row mt-4 w-100">
                                                      <p className="col-12 small-text rob text-uppercase font-weight-bold">
                                                        Ristorante
                                                      </p>
                                                      <div className="col-12 rob small-text">
                                                        petit déjeuner servi au
                                                        restaurant ou en
                                                        terrasse. Le restaurant
                                                        propose des plats
                                                        typiquement siciliens.
                                                      </div>
                                                    </div>
                                                    <div className="row mt-4 w-100">
                                                      <p className="col-12 small-text rob text-uppercase font-weight-bold">
                                                        Camere
                                                      </p>
                                                      <div className="col-12 rob small-text">
                                                        agréables, avec salle de
                                                        bain ou douche/WC,
                                                        sèche-cheveux,
                                                        chauffage, Wi-Fi
                                                        (gratuit), TV via
                                                        satellite, bouilloire
                                                        électrique, téléphone,
                                                        mini-bar (payant).
                                                        Certaines chambres sont
                                                        climatisées.
                                                      </div>
                                                    </div>
                                                    <div className="row mt-4 w-100">
                                                      <p className="col-12 small-text rob text-uppercase font-weight-bold">
                                                        Servizi
                                                      </p>
                                                      <div className="col-12 rob small-text">
                                                        piscine panoramique.
                                                        Diverses excursions
                                                        organisées sur demande
                                                        (payant).
                                                      </div>
                                                    </div>
                                                    <div className="row mt-4 w-100">
                                                      <div className="col-12 rob small-text">
                                                        <p className="rob normal-text mt-2">
                                                          Web:{" "}
                                                          <a href="www.hotel.ie">
                                                            www.hotel.ie
                                                          </a>
                                                        </p>
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
                                                  Close
                                                </Button>
                                              </Modal.Footer>
                                            </Modal>
                                          </div>
                                        </div>
                                        <div className="modal custom-modal">
                                          <div
                                            role="document"
                                            className="modal-dialog modal-dialog-centered modal-lg"
                                          ></div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSiracusa2;
