import React, { useState } from "react";
import '../timeline.css'
import Timeline from "../Timeline";


const  TappaCard =props => {
    const [data,setData]=useState(props.value)
        return (
            <div className="card">
                <p>{data.titoloTappa}</p>
                <p>{data.dataTappa}</p>
                <Timeline />
            </div>
        )
    
}

export default TappaCard
