import React, { useState } from "react";
import '../timeline.css'
import Timeline from "../Timeline";


const  TappaCard =props => {
    const [data,setData]=useState(props.value)
        return (
            <div className="card">
                <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                    
                        <div className="card-header" role="tab" id="headingOne1">
                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                            aria-controls="collapseOne1">
                            <h5 className="mb-0">
                            <p>{data.titoloTappa} - {data.dataTappa}</p> <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                            </a>
                        </div>
                        <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                            data-parent="#accordionEx">
                            <div className="card-body">
                                <Timeline />
                            </div>
                        </div>
                
                </div>
            </div>
        )
    
}

export default TappaCard
