import React, { useContext,useState } from "react";
import { ContextApi } from "../Api/ContextApi";
import TappaCard from "../Cards/ComponentCards/TappaCard"
import CardSiracusa2 from "./ComponentTappe/CardSiracusa2";


function CardLogicTappa() {
    const dati = useContext(ContextApi);


    /**********CARD 1 SIRACUSA ********/
    const siracusaTappa=dati.rows[0].places[0].name
    const dataTappa1= "20 - 21 NOVEMBRE"
    
    const titolo1= dati.rows[0].days[0].name
    const data1 = dati.rows[0].dayDate
    const img1 = dati.rows[0].days[0].images[0].image;
    const descrizioneImg1 = dati.rows[0].days[0].description
    
    const data2 = dati.rows[1].dayDate
    const titolo2 = dati.rows[1].days[0].name
    const img2 = dati.rows[1].days[0].images[0].image;
    const descrizioneImg2 = dati.rows[1].days[0].description;

    const [siracusa, setSiracusa] = useState({
        siracusaTappa, dataTappa1, 
        titolo1, img1, data1, descrizioneImg1, 
        titolo2, img2, data2, descrizioneImg2})
    ///////////////////////////////////////////

    /**********CARD 3 SIRACUSA **************/
    const titolo3= dati.rows[3].days[0].name //taormine
    const data3 = dati.rows[3].dayDate //23/11/2020
    const img3=dati.rows[3].accomodations[0].images[0].image
    const dataTappa3= "23 - 25 NOVEMBRE"
    console.log("giorno3",img1);
    const [siracusa2,setSiracusa2]=useState({
        siracusaTappa,titolo3,data3,img3,dataTappa3
    })



    return (
        <>
            <TappaCard value={siracusa}/>
            <CardSiracusa2 value={siracusa2}/>
        </>
    )
}

export default CardLogicTappa
