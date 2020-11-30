import React, { useContext,useState } from "react";
import { ContextApi } from "../Api/ContextApi";
import Card from './Card'



/** component Padre di tutte le Card a cui invia i dati alla singola Component per stampare */
function Cards() {
    //importazione dati
    const dati = useContext(ContextApi);
    
    var numbCard=0
    
    /*******************CARD1 CONTATTI***************/
    //destructuring dei dati per contatti
    const {name,image}=dati.operator
    const {phone,email}=dati.operator.contact
    const frase="Il tuo agente di viaggio";
    const informations=["- Insolita Travels di InSicilia snc: Tour Operator Sicilia, DMC e Agenzia di Viaggi;",
    "- Licenza Agenzia Viaggio nr. 2226/S2-TUR della Regione Siciliana;",
    "- Polizza R.C. nr. 45130310-RC14 Europaische Reiserversicherung A;",
    "- InSicilia snc è iscritta all'Ufficio Registro Imprese di Catania N. REA 260386;",
    "- Fondo Garanzia Viaggi: Certificato n. A/286.1059/1/R;"]
    ///////////////////////////////////////////////////////////
    
    /* state Contatti */
    const [contatti,setContatti]=useState({name,frase,image,phone,email});  
    const [logo,setLogo]=useState({image:dati.agency.image})
    /******************** */
    

    /****************CARD2 TARIFFE*************/
    //destructuring tariffe
    const type=dati.partecipants.map((val)=>{
        //console.log("test",val.type)
        return val.type
    })
    const prezzi=dati.partecipants.map((val)=>{
        //console.log("test",val.type)
        return val.price
    })
    const strComprende="COSA COMPRENDE IL PREZZO"
    const strNonComprende="COSA NON COMPRENDE IL PREZZO"
    const {included}=dati
    const {notIncluded}=dati
    

    /** state tariffe */
    const [tariffa,setTariffa]=useState({type,prezzi,strComprende,included,strNonComprende,notIncluded})
    //////////////////////////////////

    /**********CARD DOCUMENTI *********/
    const titoloDocumenti="DOCUMENTI RICHIESTI"
    const paragrafoDocumenti=`Per entrare in modo regolare in Italia è necessario il passaporto o altro documento di viaggio e il visto di ingresso, 
    che va richiesto all'ambasciata o ai consolati italiani nel Paese d'origine o di residenza stabile del cittadino straniero extracomunitario.
    L'ingresso in Italia è consentito con visti per soggiorni di breve durata, validi fino a 3 mesi, e per soggiorni di lunga durata che comportano 
    la concessione di un permesso di soggiorno (di lunga durata) con motivazione identica a quella del visto.`
    
    //state documentiCard
    const [documents,setDocuments]=useState({titoloDocumenti,paragrafoDocumenti})
    console.log(documents)
    //////////////////////////////////////

    /********** CARD MAP ******/
    

    /***********DETERMINA LO SWITCH RENDER IN CARD********* */
    //determina le card da visualizzare
    function addNumCard(){
            numbCard+=1
            return numbCard
    }
    //////////////////

    return (
        <div>
            {/**card contatti */}
            <Card value={contatti} num={addNumCard()} logo={logo} info={informations}/>
            <Card num={addNumCard()}/> 
            <Card value={tariffa} num={addNumCard()}/> 
            <Card value={documents} num={addNumCard()}/>

        </div>
    )
}

export default Cards
