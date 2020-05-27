/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
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

/**/
export const Button = ({ 
    children, 
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
        /*onClick can be called through {() => {function()}} or a custom function*/
        onClick={onClick} 
        >
            {children}
        </button>
    )
};

/*Defualt download button, is set to medium sizing. Needs a file passed in to download
Use example: <DownloadButton file={"FILE NAME HERE"}></DownloadButton>*/
export const DownloadButton = ({file}) => {
    return  <a href={file} download>
        <Button>
        <img src="download_icon.png" alt=""/>
        </Button>
        </a>
}

/*Defualt preview button, is set to medium sizing. Needs a page location to direct towards
Use example: <PreviewButton Page={"https://github.com/the-template-project/root"}></PreviewButton>*/
export const PreviewButton = ({Page}) => {
    return  <a href={Page}>
        <Button buttonStyle="btn--preview--solid">
        <img src="preview_icon.png" alt=""/>
        </Button>
        </a>
}
