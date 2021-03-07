import React from "react";
import "./Nav.css";
import Weight from "../assets/weight.png";
import Arrow from "../assets/arrow.png";
import { Navbar, Form, FormControl, Nav, NavDropdown, Button } from "react-bootstrap";
import { slide as Menu } from 'react-burger-menu'

function Navbar2() {
    
    
    return (
        <>
        <div className="navbar sticky-top" id="navbar">
            <div className="logo">
                <svg className="logo-image" width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.36734" y="6.68219" width="6.12245" height="24.4898" rx="2.65889" fill="white" />
                    <rect x="77.6327" y="31.172" width="6.12245" height="24.4898" rx="2.65889" transform="rotate(-180 77.6327 31.172)" fill="white" />
                    <rect x="13.9592" y="0.559753" width="7.34694" height="36.7347" rx="2.65889" fill="white" />
                    <rect x="70.0408" y="37.2944" width="7.34694" height="36.7347" rx="2.65889" transform="rotate(-180 70.0408 37.2944)" fill="white" />
                    <path d="M0 18.9271C0 21.6322 2.19289 23.8251 4.89796 23.8251V14.0291C2.19289 14.0291 0 16.222 0 18.9271Z" fill="white" />
                    <path d="M84 18.9271C84 16.222 81.8071 14.0292 79.102 14.0292L79.102 23.8251C81.8071 23.8251 84 21.6322 84 18.9271Z" fill="white" />
                    <rect x="23.7551" y="16.4781" width="36.7347" height="4.89796" fill="white" />
                </svg>
            </div>
            <div className="nav-link">
                <a target="_" href="https://www.buymeacoffee.com/repsreopening">
                    LIKE THIS? BUY US A PROTEIN SHAKE
                </a>
                <img className="arrow" src={Arrow} alt="" />
            </div>
        </div>

        <div className="nav-dropdown">
        <div className="credits">
            <div className="credits-line">
                <p className="credits-p">CODE:  <a className="credits-a"href="https://www.linkedin.com/in/sam-raha-6983a4b6/">SAM RAHA</a> </p>
                <p className="credits-p">DESIGN: <a className="credits-a"href="https://www.linkedin.com/in/j4seph/">JOSEPH KELLY</a> </p>
                <p className="credits-p">DATA: <a className="credits-a"href="https://www.bbc.co.uk/news/explainers-52530518">BBC</a> </p> 
            </div>
         </div>
         <div className="slogan">
                <p className="slogan-p">REPS <br></br>TOWARDS<br></br> REOPENING</p>
         </div>
        </div>
</>

    );
}

export default Navbar2;
