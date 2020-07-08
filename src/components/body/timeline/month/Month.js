import React from 'react'

const Month = ({month,updateMonth}) => {

    return(
        <h4 id={month} onClick={updateMonth}> {month} </h4>
    )
}

export default Month