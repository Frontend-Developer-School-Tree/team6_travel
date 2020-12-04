import React from 'react'

function AssicurationCard(props) {
    return (
<div className="container-fluid">
            <div className="card">
                <h3>Assicuration</h3>
                <p>{props.value}</p>
            </div>
        </div>
    )
}

export default AssicurationCard
