import React, { useState } from "react";
//import ReactDom from "react-dom";
import {MapContainer,TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './timeline.css'
import Timeline from "./Timeline";
/** 
 * Questa component riceve le props dal padre Cards
 * e le stampa a prescindere da ciò viene passato
 */

function Card(props) {
    
    console.log("props",props.value) 
    const [data,setData]=useState(props.value) //utilizzata da tutte le cards
    const numCard=props.num //serve a switchare il render 
    console.log(numCard)
    
    /*  Object.entries(data) -> conversione e map di un oggetto 
     * [1] corrisponde al valore, mentre [0] alla chiave dell'oggetto
     */
    
    /************funzione render contattiCard ***************/
    function contattiCard(){
        /* props supplementari dei contatti*/
        const logo=props.logo
        const info=props.info
        //////////////////////
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="card" style={{
                        width: '100vw',
                    }}>
                        <div className="card-body">
                            <div className="col">
                                <div className="row mt-3">
                                    <div className="col-3">
                                        {Object.entries(data).map(val=>{
                                        // name: Carlo [name,Carlo]
                                        //image : http-- [image., http]
                                        //{console.log("entries",val)}
                                            return(
                                                (val[1].substring(0,4)=="http") ?
                                                        <img id="imageCard" key={val[0]} src={val[1]} className="card-img-top"/>
                                                        : " "
                                            )
                                        })}
                                    </div>
                                    <div className="col-6">
                                        {Object.entries(data).map(val=>{
                                            return(
                                                (val[1].substring(0,4)!="http") ?
                                                            <p id={val[0]} key={val[0]}>{val[1]}</p>
                                                        : " "
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <img id="logoContact"src={logo.image}/>
                                <div className="p-contact">
                                    {info.map((val,index)=>{
                                        return(
                                            <p key={index}>{val}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    /////////////////////////////////////////////////////


    /************funzione render Card Tariffa ***************/
    function tariffaCard(){
        let tot=0
        //calcola il totale complessivo dei prezzi
        function totale(price){
            tot+=price
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="card" style={{
                            width: '100vw',
                        }}>
                        <div className="card-body">
                            <div className="col tipologia">
                                {/**map dei type:adulto e adolescente */}
                                {Object.entries(data.type).map((val)=>{
                                    //val[0] perchè è la key di ogni riga dell'object
                                    {console.log("tariffa",val[1])}
                                    return(
                                        <div>
                                                <p key={val[0]}>{val[1]}</p>
                                            </div>
                                        )})}
                            </div>
                            <div className="col prezzi">
                                {/**map dei prezzi */}
                                {Object.entries(data.prezzi).map((val)=>{
                                    //val[0] perchè è la key di ogni riga dell'object
                                    {console.log("tariffa",val[1])}
                                    return(
                                        <div>
                                            {totale(val[1])}
                                            <p key={val[0]}>{val[1]}</p>
                                        </div>
                                        )})}
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="PrezzoTotale">
                                        <p id="textTotale">Totale: </p>
                                        <p id="totale">{tot}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="Comprende"> 
                            <p>{data.strComprende}</p>
                            <p>{data.included}</p>
                        </div>
                        <div className="NonComprende"> 
                            <p>{data.strNonComprende}</p>
                            <p>{data.notIncluded}</p>
                        </div>
           </div>
        )
    }
    ///////////////////////////////////////////////////

    /***********funzione render Documenti Card ****************/
    function documentiCard(){
        return(
        <div className="card">
                    {console.log("dati3:",data.titoloDocumenti)}
                    <p id="TitoloDocumenti">{data.titoloDocumenti}</p>
                    <p id="ParagrafoDocumenti">{data.paragrafoDocumenti}</p>
                </div>
        )
    }

    /********** funzione Map **************/
    function mappa(){
        return(
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 text-center">
                        <MapContainer style={{width:950, height:300}}center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    function tappaCard(){
        return (
            <div className="card">
                <p>{data.titoloTappa}</p>
                <p>{data.dataTappa}</p>
                <Timeline />
            </div>
        )
    }

    function renderSwitchCard() {
        switch(numCard) {
          case 1:
            return mappa();
          case 2:
            return contattiCard();
          case 3: 
            return tappaCard();
          case 4:
            return tariffaCard();
          case 5:
            return documentiCard();
        }
      }

    //render 
    return (
            <>    
                {renderSwitchCard()}
                
            </>
    )
}
export default Card

