import React from 'react';
import fbIcon from '../Static/icons8-facebook-48.png'
import twitterIcon from '../Static/icons8-twitter-48.png'



function Homepage() {
    return (
        <React.Fragment>
            <h1 className="main-logo title">The Template Project</h1>
            <p className="main-logo caption">
                A one stop shop for beautifully designed ReactJS templates  
            </p>
            <a href="https://www.facebook.com/">
                <img src={fbIcon} alt="fb icon"/>
                </a>
            <a href="https://www.twitter.com/">
                <img src={twitterIcon} alt="fb icon"/>
            </a>
        </React.Fragment>
    )
}


export default Homepage;