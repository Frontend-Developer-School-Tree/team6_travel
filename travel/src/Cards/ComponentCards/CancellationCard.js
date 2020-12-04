import React from 'react'


function CancellationCard(props) {
    return (
        <div className="container-fluid">
            <div className="card">
                <h3>Cancellation</h3>
                <p>{props.value}</p>
            </div>
        </div>
    )
}

export default CancellationCard
