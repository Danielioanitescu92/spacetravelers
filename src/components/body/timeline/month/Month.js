import React from 'react'

const Month = ({month,updateMonth,date}) => {

    return(
        <h4 className="month" id={month} date={date} onClick={updateMonth}> {month} </h4>
    )
}

export default Month