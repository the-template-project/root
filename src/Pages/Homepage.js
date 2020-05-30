/* eslint-disable linebreak-style */
import React from 'react';
import fbIcon from '../static/images/f_logo_RGB-Blue_58.png';
import twitterIcon from '../static/images/Twitter_Social_Icon_Circle_Color.png';
import '../static/css/homepage.css';


function Homepage() {
  return (
    <div>
      <header>
        <div className="header-text-container">
          <h1>The Template Project</h1>
          <p>A one stop shop for beautifully designed ReactJS templates</p>
        </div>
        <div className="social-icons-container">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fbIcon} alt="fb icon" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="fb icon" />
          </a>
        </div>
      </header>
    </div>
  );
}


export default Homepage;
