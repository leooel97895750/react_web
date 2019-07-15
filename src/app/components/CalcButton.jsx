import React from 'react'
import '../css/main.css'

function CalcButton(props){
    return(
        <button className="calc-button" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default CalcButton