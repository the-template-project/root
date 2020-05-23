import React from 'react';
import fbIcon from '../static/images/icons8-facebook-48.png'
import twitterIcon from '../static/images/icons8-twitter-48.png'
import '../static/css/homepage.css'


function Homepage() {
    return (
        <React.Fragment>
            <header>
                <div className="asd">
                    <h1 className="title">The Template Project</h1>
                    <p className="caption">
                        A one stop shop for beautifully designed ReactJS templates  
                    </p>
                </div>
                <div className="social-icons-container">
                    <a href="https://www.facebook.com/">
                        <img src={fbIcon} alt="fb icon"/>
                    </a>
                    <a href="https://www.twitter.com/">
                        <img src={twitterIcon} alt="fb icon"/>
                    </a>
                </div>
            </header>
        </React.Fragment>
    )
}


export default Homepage;