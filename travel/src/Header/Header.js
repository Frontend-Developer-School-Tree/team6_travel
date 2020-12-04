import React, { useContext } from "react";
import "../assets/css/header.css";
import { ContextApi } from "../Api/ContextApi";

function Header() {
  const dati = useContext(ContextApi);
  return (
    <>
      <div
        className="container-fluid"
        id="header"
        style={{ backgroundImage: `url(${dati.images[0].image})` }}
      >
        <div className="row rowHeader">
          <div className="col">
            {/* {console.log("ture:", dati)} */}
            <img id="logoHeader" src={dati.agency.image}></img>
          </div>
          <div className="col colTitle d-flex align-items-end  justify-content-end text-right">
            <h1 id="titleHeader" className="pr-5">{dati.title}</h1>
            <p id="button" className="pr-5 pb-5">
                <button type="button" className="btn btn-primary">
                  scopri di più
                </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
