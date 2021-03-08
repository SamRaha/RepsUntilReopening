import React from "react";
import styled from "styled-components";
import "./RightNav.css";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin: 0 !important;
    padding: 60px 0 !important;
    background-color: black !important;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        transition: transform 0.3s ease-in-out;
    }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <div className="nav-dropdown">
                <div className="credits-rightnav">
                    <div className="credits-line-rightnav">
                        <p className="credits-p-rightnav">
                            CODE:
                            <a className="credits-a-rightnav" href="https://www.linkedin.com/in/sam-raha-6983a4b6/">
                                SAM RAHA
                            </a>
                        </p>
                        <p className="credits-p-rightnav">
                            DESIGN:
                            <a className="credits-a-rightnav" href="https://www.linkedin.com/in/j4seph/">
                                JOSEPH KELLY
                            </a>
                        </p>
                        <p className="credits-p-rightnav">
                            DATA:
                            <a className="credits-a-rightnav" href="https://www.bbc.co.uk/news/explainers-52530518">
                                BBC
                            </a>
                        </p>
                    </div>
                </div>
                <div className="slogan-rightnav">
                    <p className="slogan-p-rightnav">
                        REPS <br></br>TOWARDS<br></br> REOPENING
                    </p>
                </div>
            </div>
        </Ul>
    );
};

export default RightNav;
