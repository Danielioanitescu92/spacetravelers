import React from 'react'
import Day from './day/Day'
import './Scrolldrag.scss'

const Scrolldrag = ({onMouseDown,onMouseUp,onMouseMove,Dayzzz,ScrollDays,updateDay,ShowDay,scroll}) => {

    return(   
        <div>
            
            <div id="Body-days" onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
        
                <div className="Body-number-days" onClick={updateDay}> <h1> {ShowDay} </h1> </div>
                
                <div id="Body-details-parent" onScroll={ScrollDays}>
                    <ul id="Body-details-days" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                        {Dayzzz.map(dazz => <li key={dazz}> <Day className="Body-details-day" dazz={dazz} /> </li> )}
                    </ul>                  
                </div>

                <div>
                    <img className="scroll" src={scroll} alt="scroll"/>
                </div>

            </div>

        </div>
    )
}

export default Scrolldrag