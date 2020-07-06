import React from 'react'
import './Details.scss'

const Details = ({manifest}) => {

    return (
        <div className="Body-details-intro">
            <div className="Body-details-intro-div">
                <p>Start by selecting the year, the month and then the day on the right side of the screen. Click on the <span>displayed day</span> to select it.</p>
                <div>
                    <p><b>Launch date:</b> {manifest.launch_date}</p>
                    <p><b>Landing date:</b> {manifest.landing_date}</p>
                    <p><b>Status:</b> {manifest.status}</p>
                </div>
            </div>
        </div>
    )
}

export default Details