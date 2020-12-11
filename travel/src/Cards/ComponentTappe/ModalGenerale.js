import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

function ModalSiracusa2(props) {
    const [show, setShow] = useState(props.show);
    const data=props.data
    const handleClose = () => setShow(props.handleClose);
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tenuta San Michele</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="row my-3">
              <div className="col-12 rob small-text">
                <p className="rob">Agriturismo</p>
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
                  l'agritourisme appartient au cellier renommé Tenuta San
                  Michele du Baron Emanuele Scammacca del Murgo, où sont
                  produits des vins typiques du terroir et un vin mousseux.
                  Possibilité de participer aux activités du cellier,
                  dégustation de vins et visite des caves avec guide.
                </div>
              </div>
              <div className="row mt-4 w-100">
                <p className="col-12 small-text rob text-uppercase font-weight-bold">
                  Ristorante
                </p>
                <div className="col-12 rob small-text">
                  petit déjeuner servi au restaurant ou en terrasse. Le
                  restaurant propose des plats typiquement siciliens.
                </div>
              </div>
              <div className="row mt-4 w-100">
                <p className="col-12 small-text rob text-uppercase font-weight-bold">
                  Camere
                </p>
                <div className="col-12 rob small-text">
                  agréables, avec salle de bain ou douche/WC, sèche-cheveux,
                  chauffage, Wi-Fi (gratuit), TV via satellite, bouilloire
                  électrique, téléphone, mini-bar (payant). Certaines chambres
                  sont climatisées.
                </div>
              </div>
              <div className="row mt-4 w-100">
                <p className="col-12 small-text rob text-uppercase font-weight-bold">
                  Servizi
                </p>
                <div className="col-12 rob small-text">
                  piscine panoramique. Diverses excursions organisées sur
                  demande (payant).
                </div>
              </div>
              <div className="row mt-4 w-100">
                <div className="col-12 rob small-text">
                  <p className="rob normal-text mt-2">
                    Web: <a href="www.hotel.ie">www.hotel.ie</a>
                  </p>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default ModalSiracusa2

