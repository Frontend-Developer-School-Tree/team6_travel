import React, {useState} from 'react'
import "../../assets/css/cardTappa.css";
import Timeline from "../Timeline";

const CardCatania = (props) => {

    const [data, setData] = useState(props.value);

    return (
        <div className="card">
            <div
            className="accordion md-accordion"
            id="accordionEx"
            role="tablist"
            aria-multiselectable="true"
            >
                <div className="card-header" role="tab" id="headingFour4">
                <a
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    href="#collapseFour4"
                    aria-expanded="true"
                    aria-controls="collapseFour4"
                >
                    {console.log("catania tappa 4 ->", data.vendicariTappa)}
                    <h3 className="mb-0">
                    {data.cataniaTappa} {data.dataTappa4}{" "}
                    <i
                        className="fas fa-angle-down rotate-icon"
                        style={{ height: 50, width: 50 }}
                    />
                    </h3>
                </a>
                </div>
            </div>
        </div>
    )
}

export default CardCatania
