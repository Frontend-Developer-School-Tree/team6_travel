import React, { useContext,useState } from "react";
import { ContextApi } from "../Api/ContextApi";
import CardVendicari from "./ComponentTappe/CardVendicari";
import CardSiracusa1 from "./ComponentTappe/CardSiracusa1"
import CardSiracusa2 from "./ComponentTappe/CardSiracusa2";
import CardCatania from "./ComponentTappe/CardCatania";


function CardLogicTappa() {
    const dati = useContext(ContextApi);


    /**********CARD 1 SIRACUSA ********/
    const siracusa1Tappa=dati.rows[0].places[0].name
    const dataTappa1= "20 - 21 NOVEMBRE"
    
    const titolo1S1= dati.rows[0].days[0].name
    const data1S1 = dati.rows[0].dayDate
    const img1S1 = dati.rows[0].days[0].images[0].image;
    const descrizioneImg1S1 = dati.rows[0].days[0].description
    
    const data2S1 = dati.rows[1].dayDate
    const titolo2S1 = dati.rows[1].days[0].name
    const img2S1 = dati.rows[1].days[0].images[0].image;
    const descrizioneImg2S1 = dati.rows[1].days[0].description;

    const [siracusa1, setSiracusa] = useState({
        siracusa1Tappa, dataTappa1, 
        titolo1S1, img1S1, data1S1, descrizioneImg1S1, 
        titolo2S1, img2S1, data2S1, descrizioneImg2S1})
    ///////////////////////////////////////////

    /**********CARD 2 VENDICARI ********/
    
    /* const vendicariTappa = dati.rows[2].places[0].name */
    const vendicariTappa = "VENDICARI"
    const dataTappa2= "22 NOVEMBRE"
    
    const titolo1V = dati.rows[2].days[0].name
    const img1V = dati.rows[2].days[0].images[0].image
    const data1V = dati.rows[2].dayDate
    const descrizioneImg1V = dati.rows[2].days[0].description;
    const [vendicari, setVendicari] = useState({
    vendicariTappa, dataTappa2,
    titolo1V, img1V, data1V, descrizioneImg1V
    })
    ///////////////////////////////////////////

    
    const dataTappa3= "23 - 25 NOVEMBRE"

    const titolo1S2= dati.rows[3].days[0].name //taormine
    const data1S2 = dati.rows[3].dayDate //23/11/2020
    const img1S2=dati.rows[3].accomodations[0].images[0].image //immagine principale 
    const descrizioneImg2S=dati.rows[3].days[0].description // descrizione Taormina
    const img1Pargrafo=dati.rows[3].days[0].images[0].image
    const img2Pargrafo=dati.rows[3].accomodations[0].images[1].image
    const img3Pargrafo=dati.rows[3].accomodations[0].images[2].image
    const img4Pargrafo=dati.rows[3].accomodations[0].images[4].image
    console.log("giorno3",img2Pargrafo);
    const [siracusa2,setSiracusa2]=useState({
        siracusa1Tappa,titolo1S2,data1S2,img1S2,dataTappa3,descrizioneImg2S,
        img1Pargrafo,img2Pargrafo,img3Pargrafo,img4Pargrafo
    })
    /////////////////////////////////////////

    /**********CARD 4 CATANIA **************/
    /* const cataniaTappa = dati.rows[6].places[0].name */
    const cataniaTappa = "CATANIA"
    const dataTappa4 = "26 NOVEMBRE"
    const titolo1C = dati.rows[6].days[0].name;
    const data1C = dati.rows[6].dayDate;
    const img1C = dati.rows[6].days[0].images[0].image;
    const descrizioneImg1C = dati.rows[6].days[0].description;
    
    const [catania, setCatania] = useState({
        cataniaTappa, dataTappa4, 
        titolo1C, data1C, img1C, descrizioneImg1C
    })
    /////////////////////////////////////////



    return (
        <>
            <CardSiracusa1 value={siracusa1}/>
            <CardVendicari value={vendicari}/>
            <CardSiracusa2 value={siracusa2}/>
            <CardCatania value={catania} />
        </>
    )
}

export default CardLogicTappa
