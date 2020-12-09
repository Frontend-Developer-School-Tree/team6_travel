import React, { useState } from "react";
import "../../assets/css/CardSiracusa2.css";
function CardSiracusa2(props) {
  const [data, setData] = useState(props.value);
  return (
    <div className="container-fluid accordition-print">
      <div className="row">
        <div className="col 12 col-md 10 offset-md-1 pb-4">
          <div className="accordition">
            <div className="card">
              <div className="card-header" role="tab" id="headingThree3">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  className="font-weight-bold m-0 title-section text-uppercase link color-title"
                  href="#collapseThree3"
                  aria-expanded="true"
                  aria-controls="collapseThree3"
                >
                  {data.siracusa1Tappa}
                  {console.log("siracusa tappa 1 ->", data.siracusaTappa)}
                  <span className="rob text-grey body-section">
                    {"   "}
                    {"   "}
                    {data.dataTappa3}{" "}
                    <i
                      className="fas fa-angle-down rotate-icon"
                      style={{ height: 50, width: 50 }}
                    />
                  </span>
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
                  <div>
                    <div>
                      <div>
                        <div className="container-fluid p-0">
                          <div className="row">
                            <div className="col-1 d-none d-xl-block">
                              <div className="row" style={{ height: "99%" }}>
                                <div
                                  class="col-12"
                                  style={{ overflow: "hidden" }}
                                >
                                  <div class="row">
                                    <div class="col-12">
                                      <div class="day d-flex align-items-center justify-content-center">
                                        <p class="rob m-0 text-white text-uppercase">
                                          Day
                                          <span class="font-weight-bold">
                                            4
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row pt-2">
                                    <div class="col-12 d-flex align-items-center justify-content-center">
                                      <div class="pinmap pin ">
                                        <p
                                          class="m-0 material-icons icon-center"
                                          style={{
                                            color: " rgb(137, 170, 185)",
                                          }}
                                        >
                                          place
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row pt-2 h-100">
                                    <div
                                      class="col-12 bg-dot dot-background"
                                      style={{
                                        backgroundImage:
                                          "url(http://51.77.82.133:86/images/Ellipse.png)",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              timeline
                              {/* <Timeline /> */}
                            </div>
                            <div className="col-12 col-xl-11 p-0">
                              <div className="card no-shadow-border">
                                <p className="rob">{data.siracusa1Tappa}</p>
                                <div className="card-header card-header-custom pt-0 d-md-flex align-items-md-center">
                                  <div className="d-block d-xl-none day-mobile d-flex align-items-center justify-content-center mr-3 mr-xl-0">
                                    <p className="rob m-0 text-white text-uppercase">
                                      Day<span class="font-weight-bold">1</span>
                                    </p>
                                  </div>
                                  <p className="rob title-day text-yellow font-weight-bold m-0">
                                    {data.titolo1S2}{" "}
                                  </p>
                                  <p className="rob text-grey body-section mb-0 ml-0 ml-md-3">
                                    {" "}
                                    {data.data1S2}
                                  </p>
                                </div>
                                <div className="card-body pt-0">
                                  <div className="no-print">
                                    <div className="VueCarousel d-block d-lg-none">
                                      <div className="VueCarousel-wrapper">
                                        <div className="VueCarousel-inner">
                                          <div
                                            tabIndex="-1"
                                            role="tabpanel"
                                            className="VueCarousel-slide VueCarousel-slide-active VueCarousel-slide-center"
                                          >
                                            <div
                                              className="background-image h-300"
                                              style={{
                                                backgroundImage: `url(${data.img1S2})`,
                                              }}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div
                                      data-v-438fd353=""
                                      className="VueCarousel-pagination"
                                      style={{ display: "none" }}
                                    >
                                      <div
                                        data-v-438fd353=""
                                        role="tablist"
                                        className="VueCarousel-dot-container"
                                        style={{ marginTop: "20px" }}
                                      > */}
                                        {/* <button
                                          data-v-438fd353=""
                                          aria-hidden="false"
                                          role="tab"
                                          title="Item 0"
                                          value="Item 0"
                                          aria-label="Item 0"
                                          aria-selected="true"
                                          className="VueCarousel-dot VueCarousel-dot--active"
                                          style={{
                                            marginTop: "20px",
                                            padding: "10px",
                                            width: "10px",
                                            height: "10px",
                                            backgroundColor: "rgb(0, 0, 0)",
                                          }}
                                        ></button> */}
                                      {/* </div>
                                    </div> */}
                                  </div>
                                </div>
                                {/* <div
                                  className="background-image h-300 print"
                                  style={{
                                    backgroundImage: `url("undefined")`,
                                  }}
                                ></div> */}
                                <div className="no-print">
                                  <div className="d-none d-lg-block ">
                                    <div className="row">
                                      <div className="col-12">
                                        <div
                                          className="background-image h-300 hover-section"
                                          style={{
                                            backgroundImage: `url(${data.img1S2})`,
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pt-3">
                                  <p className="card-text rob small-text">
                                    {data.descrizioneImg2S}
                                  </p>
                                </div>
                                {/* <div
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
                                      </div>{" "}
                                      <div className="modal-body bg-white">
                                        <div className="row">
                                          <div className="col-12">
                                            <div
                                              className="container-image-top"
                                              style={{
                                                backgroundImage: `url(${data.img1S2})`,
                                              }}
                                            ></div>
                                          </div>
                                        </div>
                                        <div className="row mt-3">
                                          <div className="col-12"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
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
                                    <div className="row pl-4">
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
                                                    <span aria-hidden="true">
                                                      ×
                                                    </span>
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-xl-6">
                                    <div style={{ breakInside: "avoid" }}>
                                      <div className="col-12 hover-section p-4">
                                        <div>
                                          <p className="rob title-hotel title-section font-weight-bold">
                                            Tenuta San Michele
                                          </p>
                                          <p className="small-text rob">
                                            l'agritourisme appartient au cellier
                                            renommé Tenuta San Michele du Baron
                                            Emanuele Scammacca del Murgo, où
                                            sont produits des vins typiques du
                                            terroir et un vin mousseux.
                                            Possibilité de participer aux
                                            activités du cellier, dégustation de
                                            vins et visite des caves avec guide.
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
                                      <div
                                        aria-hidden="true"
                                        className="modal custom-modal"
                                      >
                                        <div
                                          role="document"
                                          className="modal-dialog modal-dialog-centered modal-lg"
                                        >
                                          <div className="modal-content">
                                            <div className="modal-header">
                                              <h5 className="modal-title rob">
                                                Tenuta San Michele
                                              </h5>
                                              <button
                                                type="button"
                                                aria-label=""
                                                className="close"
                                              >
                                                <span aria-hidden="true">
                                                  ×
                                                </span>
                                              </button>
                                            </div>
                                            <div className="modal-body">
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
                                                    backgroundImage: `url(${data.img1Pargrafo})`,
                                                  }}
                                                ></div>
                                                <div className="row mt-4 w-100">
                                                  <p className="col-12 small-text rob text-uppercase font-weight-bold">
                                                    Descrizione
                                                  </p>
                                                  <div className="col-12 rob small-text">
                                                    l'agritourisme appartient au
                                                    cellier renommé Tenuta San
                                                    Michele du Baron Emanuele
                                                    Scammacca del Murgo, où sont
                                                    produits des vins typiques
                                                    du terroir et un vin
                                                    mousseux. Possibilité de
                                                    participer aux activités du
                                                    cellier, dégustation de vins
                                                    et visite des caves avec
                                                    guide.
                                                  </div>
                                                </div>
                                                <div className="row mt-4 w-100">
                                                  <p className="col-12 small-text rob text-uppercase font-weight-bold">
                                                    Ristorante
                                                  </p>
                                                  <div className="col-12 rob small-text">
                                                    petit déjeuner servi au
                                                    restaurant ou en terrasse.
                                                    Le restaurant propose des
                                                    plats typiquement siciliens.
                                                  </div>
                                                </div>
                                                <div className="row mt-4 w-100">
                                                  <p className="col-12 small-text rob text-uppercase font-weight-bold">
                                                    Camere
                                                  </p>
                                                  <div className="col-12 rob small-text">
                                                    agréables, avec salle de
                                                    bain ou douche/WC,
                                                    sèche-cheveux, chauffage,
                                                    Wi-Fi (gratuit), TV via
                                                    satellite, bouilloire
                                                    électrique, téléphone,
                                                    mini-bar (payant). Certaines
                                                    chambres sont climatisées.
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
      </div>
    </div>
  );
}

export default CardSiracusa2;
