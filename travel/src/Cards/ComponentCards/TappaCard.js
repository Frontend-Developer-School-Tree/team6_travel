import React, { useState } from "react";
import "../../assets/css/cardTappa.css";
import Timeline from "../Timeline";


const  TappaCard =props => {
    const [data,setData]=useState(props.value)
        return (
            <div className="card">
                    <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                    
                        <div className="card-header" role="tab" id="headingOne1">
                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                            aria-controls="collapseOne1">
                                    {console.log('siracusa tappa 1 ->', data.siracusaTappa)}
                                <h3 className="mb-0">
                                {data.siracusaTappa} - {data.dataTappa} <i className="fas fa-angle-down rotate-icon" style={{height:50, width:50}}/>
                                </h3>
                            </a>
                        </div>
                        <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                            data-parent="#accordionEx">
                            <div className="card-body">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <div className="col-1 d-none d-xl-block">
                                            timeline
                                            {/* <Timeline /> */}
                                        </div>
                                        <div className="col-11 col-xl-11 p-0">
                                            {console.log('dati giorno 1', data.img1)}
                                            <h2>{data.benvenuti} </h2>
                                            <div className="containerImg1">
                                                <img id="imgDay1" src={data.img1} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <div id="collapseDiv1" className="collapse-div" role="tablist">
                    <div className="collapse-header" id="heading1">
                        <button data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            Collapsible Group Item #1
                        </button>
                    </div>
                    <div id="collapse1" className="collapse show" role="tabpanel" aria-labelledby="heading1">
                        <div className="collapse-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                        </div>
                    </div>
                </div> */}
            </div>
        )
    
}

export default TappaCard
