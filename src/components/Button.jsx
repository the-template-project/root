import React from 'react';
import './button.css';

/*Button Style Array
styles can be created and renamed here*/
const BTNSTYLE = [
    "btn--download--solid",
    "btn--preview--solid",
]

/*Button Sizing Array
Sizing can be created or renamed here*/
const BTNSIZE = ["btn--medium", "btn--small"]

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize}) => {

    /*Checks for Button Style, defualts to first value in BTNSTYLE array*/
    const checkBTNSTYLE = BTNSTYLE.includes(buttonStyle)
    ? buttonStyle
    : BTNSTYLE[0];

    /*Checks for Button Size, defualts to first value in BTNSIZE array*/
    const checkBTNSIZE = BTNSIZE.includes(buttonSize)
    ? buttonSize
    : BTNSIZE[0];

    return(
        <button className={`btn ${checkBTNSTYLE} ${checkBTNSIZE}`} 
        /*onClick can be called through {() => {function()}} or a custom function from button.js*/
        onClick={onClick} 
        type={type}
        >
            {children}
        </button>
    )
};

