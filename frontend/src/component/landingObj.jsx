import React from 'react'
import "../css/LandingCard.css"

const landingObj = (props) => {
    return (
        <div className="ob">
            <p>{props.content}</p>
        </div>
    )
}

export default landingObj