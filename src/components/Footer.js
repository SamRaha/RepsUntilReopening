import React from "react";
import "./Footer.css"

function Footer() {
    return (
     <div className="footer">
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
    )
  
}

export default Footer;
