import React, { useEffect, useState} from 'react'
const url='http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18'

const Api =()=> {
    //state
    const [dati,setDati]=useState([]);

    //chaiamata API 
    const fetchData= async()=>{
        const res=await fetch (url);
        const dataArray=await res.json();
        console.log(dataArray)
        setDati(dataArray);
    }

    useEffect(()=>{
        fetchData();
        
    },[url])

    return (
        <div>
          <h1>{dati.message} </h1>
        </div>        
    )
}

export default Api
