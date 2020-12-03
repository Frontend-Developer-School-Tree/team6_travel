import React, { useState } from "react";
import {Breadcrumb} from 'react-bootstrap'
import {MapContainer,TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const MapCard =props => {
    const [data,setData]=useState(props.value)
    const target=[]
     /********** funzione Map **************/
     return(
             <div className="card">
                 <h3 id="titleMappa">MAPPA</h3>
                  <MapContainer style={{width:800, height:300, marginTop:30}} center={data.coordsMarker[0]} zoom={7} scrollWheelZoom={false}>
                     <TileLayer
                         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                     {data.coordsMarker.map(val=>(<Marker position={val}>
                     <Popup>
                         A pretty CSS3 popup. <br /> Easily customizable.
                     </Popup>
                 </Marker>
                 ))}
                 </MapContainer>
                 <Breadcrumb className="breadCrumb">
                        {data.search.map((el,i) =>(
                        <Breadcrumb.Item key={i}active>{el}</Breadcrumb.Item>
                        ))}
                </Breadcrumb>
                         {/* <div className="cardTitle"><h3>{data.title}</h3>
                             <div className="breadCrumb">
                             {data.search.map(el =>(
                                target.push(el,">")
                             ))}
                         </div> */}
                             <div><p>{target}</p></div>
                         <i><h5>Dal {data.dateFrom} al {data.dateTo} </h5></i>
                         <i><h5>2 adulti</h5></i>
                         <i><h5>7 Giorni - 6 Notti</h5></i>
                 </div>
            
     )
   
}

export default MapCard
