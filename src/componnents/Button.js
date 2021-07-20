import React from 'react'

const Button = ({text, onClick}) => {

    return (
    // <button 
    // onClick = {onClick}
    // style={{backgroundColor: color}} 
    // className = 'btn'>
    // {text}
    // </button>
    <span class="material-icons" onClick= {onClick} >{text}</span>

    )
}

export default Button
