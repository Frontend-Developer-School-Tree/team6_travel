import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../assets/css/cardMap.css";
import "leaflet/dist/leaflet.css";

const MapCard = (props) => {
  const [data, setData] = useState(props.value);
  const target = [];
  /********** funzione Map **************/

  return (
    <>
      <div className="container-fluid containerMap">
        <div className="row">
          <div
            className="card cardMap"
            style={{
              width: "80vw",
            }}
          >
            <MapContainer
              style={{
                height: 300,
              }}
              center={data.coordsMarker[0]}
              zoom={7}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {data.coordsMarker.map((val) => (
                <Marker position={val}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            <div className="card-body card-bodyMap">
              <h3 className="titleMap">{data.title}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {data.search.map((el, i) => (
                    <li key={i} active className="breadcrumb-item">
                      <a href="#">{el}</a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="dettagliMap">
                <>
                  <p>{target}</p>
                </>
                <div className="inlineDettagliMap">
                  <i class="fa fa-long-arrow-right"/>
                  <p>Dal {data.dateFrom} al {data.dateTo}{" "}</p>
                </div>
                <div className="inlineDettagliMap">
                  <i class="fa fa-long-arrow-right"/>
                  <p>2 adulti</p>
                </div>
                <div className="inlineDettagliMap">
                  <i class="fa fa-long-arrow-right"/>
                  <p>7 Giorni - 6 Notti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapCard;
