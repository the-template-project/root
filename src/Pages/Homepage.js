/* eslint-disable linebreak-style */
import React from 'react';
import fbIcon from '../static/images/f_logo_RGB-Blue_58.png';
import twitterIcon from '../static/images/Twitter_Social_Icon_Circle_Color.png';
import '../static/css/homepage.css';
import { SocialButton } from '../components/Button';


function Homepage() {
  return (
    <div>
      <header>
        <div className="header-text-container">
          <h1>The Template Project</h1>
          <p>A one stop shop for beautifully designed ReactJS templates</p>
        </div>
        <div className="social-icons-container">
          <SocialButton link="https://www.facebook.com/" icon={fbIcon}> </SocialButton>
          <SocialButton link="https://www.twitter.com/" icon={twitterIcon}> </SocialButton>
        </div>
      </header>
    </div>
  );
}


export default Homepage;
