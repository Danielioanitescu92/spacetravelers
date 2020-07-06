import React from 'react'
import arrow from './arrow.svg'
import './Pictures.scss'

const Pictures = ({fullScreen,HowManyPics,WichPic,prevPic,nextPic,photo,ROVER,CAM,date}) => {

    const concave = e => {
        e.currentTarget.className = 'concave'
    }

    const convex = e => {
        e.currentTarget.className = 'convex'
    }

    return (
        <div className="Body-pic">
            <div className="prevPicBtn"><button className='convex' onClick={prevPic} onMouseDown={concave} onMouseUp={convex}> <img className='arrowleft' src={arrow}></img> </button></div>
            <div className="Pic-div">
                <div className='border1'></div>
                <img src={photo} alt="" onClick={fullScreen} />
                <div className="Pic-info"> {ROVER} • {CAM} • {date} • picture {WichPic}/{HowManyPics} </div>
            </div>            
            <div className="nextPicBtn"><button className='convex' onClick={nextPic} onMouseDown={concave} onMouseUp={convex}> <img className='arrow' src={arrow}></img> </button></div>            
        </div>
    )
}

export default Pictures