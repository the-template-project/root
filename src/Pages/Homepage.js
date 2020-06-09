import React from 'react';
import fbIcon from '../static/images/f_logo_RGB-Blue_58.png';
import twitterIcon from '../static/images/Twitter_Social_Icon_Circle_Color.png';
import antonJansson from '../static/images/anton-jansson-y32uYxeqjPc-unsplash.jpg';
import bennMcGuinness from '../static/images/benn-mcguinness-GwkNXnOCNaI-unsplash.jpg';
import hiepDuong from '../static/images/hiep-duong-cqspyPWxW_M-unsplash.jpg';
import nathanAnderson from '../static/images/nathan-anderson-0wKpv3o8D1I-unsplash.jpg';
import thomanBennie from '../static/images/thomas-bennie-4D22-YTLewU-unsplash.jpg';
import unitedNations from '../static/images/united-nations-covid-19-response-IKyhoO8giSA-unsplash.jpg';
import '../static/css/homepage.css';

import Carousel from '../components/Carousel';

function Homepage() {
  const style = {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  };
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
      <Carousel
        itemsPerPage={6}
      >
        <img
          style={
            {
              width: '50px',
              height: '50px',
            }
          }
          src={fbIcon}
          alt="fbIcon"
        />
        <img
          style={
            {
              width: '200px',
              height: '200px',
            }
          }
          src={twitterIcon}
          alt="twitterIcon"
        />
        <img
          style={style}
          src={antonJansson}
          alt="antonJansson"
        />
        <img
          style={style}
          src={bennMcGuinness}
          alt="bennMcGuinness"
        />
        <img
          style={style}
          src={hiepDuong}
          alt="hiepDuong"
        />
        <img
          style={style}
          src={nathanAnderson}
          alt="nathanAnderson"
        />
        <img
          style={style}
          src={thomanBennie}
          alt="thomanBennie"
        />
        <img
          style={style}
          src={unitedNations}
          alt="unitedNations"
        />
      </Carousel>
    </div>
  );
}

export default Homepage;
