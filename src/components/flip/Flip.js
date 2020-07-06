import React from 'react'
import logo from './spacetrav.png'
import './Flip.scss'

const Flip = () => {
    return (
        <div className="flipIt">
            <div className="flipItPicDiv">
                <img src={logo} className="flipItPic" alt="logo" />
            </div>
            <div className="flipItTextDiv">
                <p className="flipItTextDiv">For a great experience, please flip the device 90 deg.</p>
            </div>
        </div>
    )
}

export default Flip