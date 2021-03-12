import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "./Nav.css";
import { useMediaQuery } from "react-responsive";
// height: ${({ isMobileNav }) => (isMobileNav ? "70px" : "100px")};

const Navbar = () => {
    const isMobileNav = useMediaQuery({ query: "(max-width: 768px)" });
    const [navHeight, setNavHeight] = useState("");

    useEffect(() => {
        if (isMobileNav) {
            setNavHeight("70px");
        } else {
            setNavHeight("100px");
        }
    }, [isMobileNav]);

    const Nav = styled.nav`
        color: white;
        background-color: black;
        width: 100%;
        height: ${navHeight};
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
    `;

    console.log("isMobileNav: ", isMobileNav);
    return (
        <Nav>
            <div className="navbar">
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

            <Burger />
        </Nav>
    );
};

export default Navbar;
