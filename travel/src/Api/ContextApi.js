import React, { useEffect, useState, createContext} from 'react'
//import ContextApi from './ContextApi'

export const ContextApi=createContext()

const url='http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18';
/** api inserita nel contest  */
const ProviderApi =(props)=> {
    //state
    const [dati,setDati]=useState([]);

    //chaiamata API 
    const fetchData= async()=>{
        const res=await fetch (url);
        const dataArray=await res.json();
        //console.log(dataArray)
        
        setDati(dataArray.results.data);
        //console.log("dati.",dati)
    }

    useEffect(()=>{
        fetchData();
        console.log("dati.",dati)
    },[])

    return (
        //props per Provider Context    
        <ContextApi.Provider value={dati}> 
           {props.children}
        </ContextApi.Provider>
    )
}

export default ProviderApi;