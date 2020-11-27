import React, { useEffect, useState, createContext} from 'react'
//import ContextApi from './ContextApi'
import gif from '../assets/spinner.gif'
import Spinner from '../Spinner'
export const ContextApi=createContext()

const url='http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18';
/** api inserita nel contest  */
const ProviderApi =(props)=> {
    //state
    const [dati,setDati]=useState([]);
    const [isLoading,setIsLoading]=useState(true)

    //chaiamata API 
    const fetchData= async()=>{
        const res=await fetch (url);
        const dataArray=await res.json();
        //console.log(dataArray)
        
        setDati(dataArray.results.data);
        setIsLoading(false)
        //console.log("dati.",dati)
    }

    useEffect(()=>{
        fetchData();
        
        console.log("dati.",dati)
    },[])

    return (
        (isLoading)? (
            <Spinner style={{
                width:'40%',
                margin:'50px auto',
                textAlign:'center',
                padding:40,
            }}>
                <h2>Loading...</h2>
                <img src={gif}/>
            </Spinner>
        ): 
        <ContextApi.Provider value={dati}> 
           {props.children}
        </ContextApi.Provider>
    )
}

export default ProviderApi;