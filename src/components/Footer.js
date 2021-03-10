import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="credits">
                <div className="credits-line">
                    <p className="credits-p">
                        CODE:{" "}
                        <a className="credits-a" href="https://www.linkedin.com/in/sam-raha-6983a4b6/">
                            SAM RAHA
                        </a>{" "}
                    </p>
                    <p className="credits-p">
                        DESIGN:{" "}
                        <a className="credits-a" href="https://www.linkedin.com/in/j4seph/">
                            JOSEPH KELLY
                        </a>{" "}
                    </p>
                    <p className="credits-p">
                        DATA:{" "}
                        <a className="credits-a" href="https://www.bbc.co.uk/news/explainers-52530518">
                            BBC
                        </a>{" "}
                    </p>
                </div>
            </div>
            <div className="slogan">
                <p className="slogan-p">
                    REPS <br></br>TOWARDS<br></br> REOPENING
                </p>
            </div>
            <div className="nav-link-footer footer-link">
                <a target="_" href="https://www.buymeacoffee.com/repsreopening">
                    LIKE THIS? BUY US A PROTEIN SHAKE
                </a>
                <svg className="arrow" width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.61487 11.884H40M40 11.884L30.0346 1.91864M40 11.884L30.0346 21.8494" stroke="white" stroke-width="2.21453" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    );
}

export default Footer;
