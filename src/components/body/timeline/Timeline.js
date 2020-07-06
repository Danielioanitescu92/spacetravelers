import React from 'react'
import Month from './month/Month'
import './Timeline.scss'

const Timeline = ({Year,updateYearMinus,updateYearPlus,updateMonth,date,concaveSm,convexSm,minus,add,Months}) => {
    return (
    <div className="Body-timeline">
        <div className="Body-year">
            <h3>{Year}</h3>
        </div>

        <div className="Body-month">
            <div className="prevYearBtn"><button onClick={updateYearMinus} className='convexSm' onMouseDown={concaveSm} onMouseUp={convexSm}> <img className='minus' src={minus}></img> </button></div>                    
            
            <ul className="Body-months">

                <div className='line'></div>

                {Months.map(month => <li key={month}> <Month updateMonth={updateMonth} date={date} className="Body-day" month={month} /> </li> )}
                
            </ul>
            <div className="nextYearBtn"><button onClick={updateYearPlus} className='convexSm' onMouseDown={concaveSm} onMouseUp={convexSm}> <img className='plus' src={add}></img> </button></div>                    
        </div>
    </div>
    )
}

export default Timeline