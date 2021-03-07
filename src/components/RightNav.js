import React from "react";
import styled from "styled-components";

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
            </div>
        </Ul>
    );
};

export default RightNav;
