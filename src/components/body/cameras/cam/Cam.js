import React from 'react'
import './Cam.scss'

const Cam = ({camcam,functionCam}) => {    

    const concaveCam = e => {
        e.target.className = 'concaveCam'
    }

    const convexCam = e => {
        e.target.className = 'convexCam'
    }

    return(
        <button className='convexCam' id={camcam} onClick={functionCam}  onMouseDown={concaveCam} onMouseUp={convexCam}> {camcam} </button>
    )
}

export default Cam