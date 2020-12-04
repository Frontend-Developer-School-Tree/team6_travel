import React from 'react'

function PropostaCard(props) {
    return (
        <div className="container-fluid">
            <div className="card">
                <h3>Proposta</h3>
                <p>{props.value}</p>
            </div>
        </div>
    )
}

export default PropostaCard

