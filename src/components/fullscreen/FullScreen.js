import React from 'react'
import './FullScreen.scss'

const FullScreen = ({photo,setfullScr}) => {
    return (
        <div className="modal" onClick={() => setfullScr(false)}>
            <img src={photo.img_src} alt="Pic"/>
        </div>
    )
}

export default FullScreen