import React from 'react'
import "../css/featureobj.css"

const Feature = (props) => {
    return (
        <div className="feat">
            <p>{props.content}</p>
        </div>
    )
}

export default Feature