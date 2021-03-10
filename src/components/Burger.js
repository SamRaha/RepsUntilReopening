import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import BuyMeACoffee from "./BuyMeACoffee";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;

    right: 25px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? "#ccc" : "white")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }
        &:nth-child(2) {
            transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="nav-link">
                {/* <a target="_" href="https://www.buymeacoffee.com/repsreopening">
                    LIKE THIS? BUY US A PROTEIN SHAKE
                </a> */}
                <BuyMeACoffee />
                <svg className="arrow" width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.61487 11.884H40M40 11.884L30.0346 1.91864M40 11.884L30.0346 21.8494" stroke="white" stroke-width="2.21453" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} />
        </>
    );
};

export default Burger;
