/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';
import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons';

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
const BTNSIZE = ['btn-default'];

export const Button = ({
  children,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  /* Checks for Button Style, defaults to first value in BTNSTYLE array */
  const checkBTNSTYLE = BTNSTYLE.includes(buttonStyle)
    ? buttonStyle
    : BTNSTYLE[0];

  /* Checks for Button Size, defaults to first value in BTNSIZE array */
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

/* default download button, is set to default sizing. Needs a file passed in to download
Usage: <DownloadButton file={"FILE NAME HERE"}></DownloadButton> */
export const DownloadButton = ({ file }) => (
  <a href={file} download>
    <Button>
      <FontAwesomeIcon icon={faDownload} />
    </Button>
  </a>
);

/* default preview button, is set to default sizing. Needs a page location to direct towards
Usage: <PreviewButton Page={"https://URL-LINK.COM or HTML-PAGE"}></PreviewButton> */
export const PreviewButton = ({ page }) => (
  <a href={page}>
    <Button buttonStyle="btn-preview-solid" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLink} />
    </Button>
  </a>
);

/* default DARKMODE download button, is set to default sizing. Needs a file passed in to download
Usage: <DarkmodeDB file={"FILE NAME HERE"}></DownloadButton> */
export const DarkmodeDB = ({ file }) => (
  <a href={file} download>
    <Button buttonStyle="btn-darkmode-solid">
      <FontAwesomeIcon icon={faDownload} />
    </Button>
  </a>
);

/* default DARKMODE preview button, is set to default sizing. Needs a page location to direct toward
Usage: <DarkmodePB Page={"https://URL-LINK.COM or HTML-PAGE"}></PreviewButton> */
export const DarkmodePB = ({ page }) => (
  <a href={page} target="_blank" rel="noopener noreferrer">
    <Button buttonStyle="btn-darkmode-solid">
      <FontAwesomeIcon icon={faLink} />
    </Button>
  </a>
);

/* default social media button, is set to default sizing. Needs a social link & icon
Usage: <SocialButton link={"https://URL-LINK.COM or HTML-PAGE"}> icon={"image.jpg"}</SocialButton> */
export const SocialButton = ({
  link,
  icon,
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Button buttonStyle="btn-social">
      <img src={icon} alt="fb icon" />
    </Button>
  </a>
);
