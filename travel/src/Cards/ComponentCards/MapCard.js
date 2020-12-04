import "../../assets/css/cardMap.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const MapCard = (props) => {
  const [data, setData] = useState(props.value);
  const target = [];
  /********** funzione Map **************/

  return (
    <div className="container-fluid">
        <div className="row">
            <div 
                className="card cardMap"
                style={{
                    width: '100vw',
                }}>
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
                                <li key={i} active className="breadcrumb-item"><a href="#">{el}</a></li>
                            ))}
                        </ol>
                    </nav>
                    <div><p>{target}</p></div>
                    <i><h5>Dal {data.dateFrom} al {data.dateTo}{" "}</h5></i>
                    <i><h5>2 adulti</h5></i>
                    <i><h5>7 Giorni - 6 Notti</h5></i>
                </div>
            </div>
        </div>
    </div>
  );
};
            
    // <div className="card">
      {/* <MapContainer
        style={{
            height: 300,
            marginTop: "1rem",
            marginRight: "1rem",
            marginBottom: ".5rem",
            marginLeft: "1rem"
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
      </MapContainer> */}
      {/* <h3 className="titleMap">{data.title}</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {data.search.map((el, i) => (
            <li key={i} active className="breadcrumb-item">
              <a href="#">{el}</a>
            </li>
          ))}
        </ol>
      </nav>
      <div><p>{target}</p></div>
      <i><h5>Dal {data.dateFrom} al {data.dateTo}{" "}</h5></i>
      <i><h5>2 adulti</h5></i>
      <i><h5>7 Giorni - 6 Notti</h5></i>
    </div> */}
//   );
// };

export default MapCard;
