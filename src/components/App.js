import React from 'react';
import MediaQuery from 'react-responsive';

import '../css/styles.css';
import introDesktop from '../images/image-intro-desktop.jpg';
import introMobile from '../images/image-intro-mobile.jpg';

import {ReactComponent as Snappy} from '../images/icon-snappy-process.svg';
import {ReactComponent as Dollar} from '../images/icon-affordable-prices.svg';
import {ReactComponent as People} from '../images/icon-people-first.svg';

import {ReactComponent as Facebook} from '../images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../images/icon-twitter.svg';
import {ReactComponent as Pinterest} from '../images/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../images/icon-instagram.svg';
import {ReactComponent as Hamburger} from '../images/icon-hamburger.svg';


const App=()=>{
    return (
        <div className="container">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo black-text logo">Insurance</a>
                    <MediaQuery query="(max-width: 375px)">
                        <div id="hamburger"><Hamburger /></div>
                    </MediaQuery>
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#" className="grey-text">How we work</a></li>
                        <li><a href="#" className="grey-text">Blog</a></li>
                        <li><a href="#" className="grey-text">Account</a></li>
                        <li><a href="#" className="grey-text">View plans</a></li>
                    </ul>
                </div>
            </nav>
            
            <MediaQuery query="(min-width: 376px)">
                <img id="introDesktop" src={introDesktop}/>
            </MediaQuery>
            <MediaQuery query="(max-width:375px)">
                <img id="introMobile" src={introMobile}/>
            </MediaQuery>
            <div id="showcase" className="show-case">
                
                <p id="humanizingBig">Humanizing <br/>your insurance.</p>
                
                <p id="humanizing">Get your life insurance coverage easier and faster. We blend our expertise 
                        and technology to help you find the plan that’s right for you. Ensure you 
                        and your loved ones are protected.</p>
                
                <p id="view">View plans</p>
                
                
            </div>
                
            
            <h3>We’re different</h3>
            <div id="features" className="row">
                <div className="col s12 m4">
                    <Snappy />
                    <h4>Snappy Process</h4>
                    <p className="grey-text">Our application process can be completed in minutes, not hours. Don’t get 
                    stuck filling in tedious forms.</p>
                </div>
                <div className="col s12 m4">
                    <Dollar />
                    <h4>Affordable Prices</h4>
                    <p className="grey-text">We don’t want you worrying about high monthly costs. Our prices may be low, 
                    but we still offer the best coverage possible.</p>
                </div>
                <div className="col s12 m4">
                    <People />
                    <h4>People First</h4>
                    <p className="grey-text">Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                    sure you’re covered when you need it.</p>
                </div>
            </div>
            <div className="bottom">
                <h2><span id="find">Find out more </span>about how we work</h2>
        
                <p id="work">How we work</p>
            </div>
            <div id="icons">
                <p id="insure">Insure</p>
                <ul>
                    <li><Facebook /></li>
                    <li><Twitter /></li>
                    <li><Pinterest /></li>
                    <li><Instagram /></li>
                </ul>
                
            </div>
            
            <div id="footer" className="row">
                <div className="col s12 m3">
                    <p className="grey-text">Our company</p>
                    <ul>
                        <li>How we work</li>
                        <li>Why Insure?</li>
                        <li>View plans</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className="col s12 m3">
                    <p className="grey-text">Help me</p>
                    <ul>
                        <li>FAQ</li>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div className="col s12 m3">
                <p className="grey-text">Contact</p>
                <ul>
                    <li>Sales</li>
                    <li>Support</li>
                    <li>Live chat</li>
                </ul>
                </div>
                <div className="col s12 m3">
                <p className="grey-text">Others</p>
                <ul>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Licenses</li>
                </ul>
                </div>
            </div>
                <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Miguel Martinez</a>.
                </footer>
            
        </div>
    )
}

export default App;

