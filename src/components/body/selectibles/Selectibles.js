import React from 'react'
import './Selectibles.scss'

const Selectibles = ({ShowMeDets,ShowMePic,ShowMeCam,add}) => {
    return (
        <ul className="Body-details">
                    
            <div className='dots'></div>

            <li onClick={ShowMeDets}>
                <p>Details</p> <button className='btnSm'> <img className='add' src={add}></img> </button>
            </li>

            <li onClick={ShowMePic}>
                <p>Pictures</p> <button className='btnSm'> <img className='add' src={add}></img> </button>
            </li>

            <li onClick={ShowMeCam}>
                <p>Cameras</p> <button className='btnSm'> <img className='add' src={add}></img> </button>
            </li>

        </ul>
    )
}

export default Selectibles
