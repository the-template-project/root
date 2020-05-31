/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import './button.css';

/* Button Style Array
styles can be created and renamed here */
const BTNSTYLE = [
  'btn-download-solid',
  'btn-preview-solid',
  'btn-darkmode-solid',
  'btn-social',
];

/* Button Sizing Array
Sizing can be created or renamed here */
const BTNSIZE = ['btn-defualt', 'btn-small'];
export const Button = ({
  children,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  /* Checks for Button Style, defualts to first value in BTNSTYLE array */
  const checkBTNSTYLE = BTNSTYLE.includes(buttonStyle)
    ? buttonStyle
    : BTNSTYLE[0];

  /* Checks for Button Size, defualts to first value in BTNSIZE array */
  const checkBTNSIZE = BTNSIZE.includes(buttonSize)
    ? buttonSize
    : BTNSIZE[0];

  return (
    <button
      className={`btn ${checkBTNSTYLE} ${checkBTNSIZE}`}
    /* onClick can be called through {() => {function()}} or a custom function */
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/* Defualt download button, is set to defualt sizing. Needs a file passed in to download
Use example: <DownloadButton file={"FILE NAME HERE"}></DownloadButton> */
export const DownloadButton = ({ file }) => (
  <a href={file} download>
    <Button>
      <img src="download_icon_Light.png" alt="" height="80%" />
    </Button>
  </a>
);

/* Defualt preview button, is set to defualt sizing. Needs a page location to direct towards
Use example: <PreviewButton Page={"https://URL-LINK.COM or HTML-PAGE"}></PreviewButton> */
export const PreviewButton = ({ page }) => (
  <a href={page}>
    <Button buttonStyle="btn-preview-solid">
      <img src="preview_icon_Light.png" alt="" height="50%" />
    </Button>
  </a>
);

/* Defualt DARKMODE download button, is set to defualt sizing. Needs a file passed in to download
Use example: <DarkmodeDB file={"FILE NAME HERE"}></DownloadButton> */
export const DarkmodeDB = ({ file }) => (
  <a href={file} download>
    <Button buttonStyle="btn-darkmode-solid">
      <img src="download_icon.png" alt="" height="80%" />
    </Button>
  </a>
);

/* Defualt DARKMODE preview button, is set to defualt sizing. Needs a page location to direct toward
Use example: <DarkmodePB Page={"https://URL-LINK.COM or HTML-PAGE"}></PreviewButton> */
export const DarkmodePB = ({ page }) => (
  <a href={page}>
    <Button buttonStyle="btn-darkmode-solid">
      <img src="preview_icon.png" alt="" height="50%" />
    </Button>
  </a>
);

/* Defualt social media button, is set to defualt sizing. Needs a social link & icon
Use example: <SocialButton link={"https://URL-LINK.COM or HTML-PAGE"}> icon={"image.jpg"}</SocialButton> */
export const SocialButton = ({
  link,
  icon,
}) => (
  <a href={link}>
    <Button buttonStyle="btn-social">
      <img src={icon} alt="fb icon" />
    </Button>
  </a>
);
