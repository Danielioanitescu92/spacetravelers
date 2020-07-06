import React from 'react'
import logo from './spacetrav.png';
import './Header.scss'

const Header = ({functionRover,Cri,Opo,Spi}) => {

    return (
        <div className="Header-a">
            
            <div className="App-div">
                <a href="#index" className="App-a">
                    <img src={logo} className="App-img" alt="logo" />
                </a>
            </div>

            <div className="App-div-nav">
                <ul className="Header-nav">
                    <li id="curiosity" onClick={functionRover} className={`navi ${Cri ? "under" : ""}`}>
                        Curiosity
                    </li>
                    <li id="opportunity" onClick={functionRover} className={`navi ${Opo ? "under" : ""}`}>
                        Opportunity
                    </li>
                    <li id="spirit" onClick={functionRover} className={`navi ${Spi ? "under" : ""}`}>
                        Spirit
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header