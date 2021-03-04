import React from "react";
import "./Nav.css"
import Weight from "../assets/weight.png"
import Arrow from "../assets/arrow.png"
function Nav() {
    return (
        <div className="navbar fixed-top" id="navbar">
            <div className="logo">
                <img className="logo-image"src={Weight} alt=""/>
            </div>
            <div className="nav-link">
                <a href="https://google.com">BUY US A PROTEIN SHAKE</a> 
                <img className="arrow" src={Arrow} alt=""/>
            </div>
        </div>
    )
  
}

export default Nav;
