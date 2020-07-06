import React from 'react'
import Cam from './cam/Cam'
import './Cameras.scss'

const Cameras = ({cams,functionCam}) => {

    return (
        <div className="Body-details-cameras">
            <div className="cam-div">
                <p>Choose a camera. Each rover has it's own set of cameras. Remember that some of them won't show pictures from everyday so there might be some gaps.</p>
                <ul className="cam-ul">
                    {cams.map(camcam => <li key={camcam} className="cam"> <Cam camcam={camcam} functionCam={functionCam} /> </li> )}
                </ul>
            </div>
        </div>
    )
}

export default Cameras