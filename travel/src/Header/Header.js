import React, { useContext } from "react";
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
        <div className="row">
          <div className="col">
            {/* {console.log("ture:", dati)} */}
            <img id="logoAgency" src={dati.agency.image}></img>
          </div>
          <div className="col align-items-end">
            <h1 id="titleHeader" className="float-right">{dati.title}</h1>
            <p id="button">
                <button type="button" className="btn btn-primary float-right">
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
