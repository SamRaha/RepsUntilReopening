import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import "./Timer.css";
import muscleMan from "../assets/muscle-man.png";
import { useMediaQuery } from "react-responsive";

function Timer(props) {
    const isMobile = useMediaQuery({ query: "(max-width: 1433px)" });
    console.log("isMobile: ", isMobile);

    let mobileImage;
    let mobileImage2;
    let desktopImage;
    if (isMobile) {
        mobileImage = <img src={props.mobileImage} className="mobileImage"></img>;
        mobileImage2 = <img src={props.mobileImage2} className={`mobileImage2 ${props.mobileImage2MarginLeft} `}></img>;
    } else {
        mobileImage = "";
        mobileImage2 = "";
    }
    if (!isMobile) {
        desktopImage = <img src={props.desktopImage} className="desktopImage"></img>;
    } else {
        desktopImage = "";
    }

    let picture = [];

    for (let i = 0; i < props.numberOfImages; i++) {
        picture.push(
            <svg className="muscle-man" width="85" height="64" viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M20 12.2C21.2 11.6 21.8 10.3 21.3 9.19998C21.3 9.19998 20.8 7.59998 20.4 7.29998C19.2 6.49998 15.9 6.89998 14.4 7.29998C12.4 7.89998 9 11.7 9 11.7C9 11.7 15.3 13.7 17.8 13.3C18.4 13.2 18.8 12.8 20 12.2Z" fill="#E3BF8D" />
                    <path
                        d="M84.3 23.5L77.1 11.8L71.5 12.8L73.6 19.5L75.2 24.2L72.4 21.4C71.4 20.4 69.3 19.7 67.9 19.9L67.2 20C65.7 20.2 64.1 21.3 63.5 22.4C62.9 23.5 63.1 24.4 63.1 24.4L60 23.6C58.7 23.2 56.5 23.8 55.1 24.9C53.7 26 52.7 27 52.7 27C52.7 27 48.9 24.6 48.9 23.2C48.9 21.8 48.7 19.5 49.5 17.5C51.1 15.7 51.5 10.9 51.2 8.69999C51 7.39999 50 4.69999 49.2 3.69999C47.9 2.19999 45.7 0.899994 42.6 0.899994C38.5 0.899994 36.9 3.49999 35.8 5.29999C34.8 6.99999 34.3 11.2 34.7 13.2C35.2 15.7 36.8 18.1 36.8 18.1C36.8 18.1 37.7 22 37.2 23.2C36.7 24.5 32.9 27 32.9 27L30.5 24.9C29.1 23.8 27 23.2 25.6 23.6C24.3 24 23.2 24.4 23.2 24.4C23.2 24.4 22.7 23.5 22.1 22.4C21.5 21.3 19.8 20.2 18.4 20H17.6C16.1 19.8 14.1 20.4 13.1 21.5L10.3 24.3L11.9 19.6L14 12.9L8.99996 11.8L1.19996 23.5C0.499963 24.8 0.299963 27 0.799963 28.3C0.799963 28.3 1.79996 31.2 2.39996 32.1C3.29996 33.5 6.89996 37 6.89996 37C7.89996 38.1 9.89996 39 11.3 39C11.3 39 18.3 40.4 19.9 39C20.4 42 24.6 47.1 25.8 49.6C27 52 30.4 58.5 30.4 58.5L31.9 63.1H42.7H42.8H53.6L55.1 58.5C55.1 58.5 58.5 52 59.7 49.6C60.9 47.1 65 42 65.5 39C67.2 40.4 74.1 39 74.1 39C75.6 39 77.6 38.1 78.5 37C78.5 37 82.1 33.5 83 32.1C83.6 31.2 84.6 28.3 84.6 28.3C85.2 27 85 24.8 84.3 23.5Z"
                        fill="#E3BF8D"
                    />
                    <path
                        d="M65.2 7.29998C64.8 7.59998 64.8 8.09998 64.3 9.19998C63.8 10.2 64.3 11.6 65.6 12.2C65.6 12.2 67.2 13.2 67.8 13.3C70.4 13.7 77.2 11.8 77.2 11.8C77.2 11.8 73.3 7.89998 71.3 7.29998C69.7 6.89998 66.4 6.49998 65.2 7.29998Z"
                        fill="#E3BF8D"
                    />
                    <path d="M53.6 63.2L55.1 58.6C55.1 58.6 58.5 52.1 59.7 49.7C60.9 47.1 65 42 65.5 39C65.5 39 55.2 45.6 53.6 63.2Z" fill="#CEA168" />
                    <path d="M31.9 63.2L30.4 58.6C30.4 58.6 27 52.1 25.8 49.7C24.7 47.1 20.5 42 20 39C20 39 30.3 45.6 31.9 63.2Z" fill="#CEA168" />
                    <path d="M38.2999 43.5C35.1999 45.2 29.5999 43.9 26.2999 41.7C29.5999 44.5 35.8999 48.3 40.6999 41.6C40.0999 42.3 39.2999 42.9 38.2999 43.5Z" fill="#B38C5A" />
                    <path d="M47.9 43.5C51 45.2 56.6 43.9 59.9 41.7C56.6 44.5 50.3 48.3 45.5 41.6C46.1 42.3 46.9 42.9 47.9 43.5Z" fill="#B38C5A" />
                    <path d="M42.5999 50C42.5999 51.1 41.6999 52 40.5999 52H35.7999C34.6999 52 33.7999 51.1 33.7999 50C33.7999 48.9 34.6999 48 35.7999 48H40.5999C41.6999 48 42.5999 48.9 42.5999 50Z" fill="#D9B687" />
                    <path d="M51.8 50C51.8 51.1 50.9 52 49.8 52H45C43.9 52 43 51.1 43 50C43 48.9 43.9 48 45 48H49.8C50.9 48 51.8 48.9 51.8 50Z" fill="#D9B687" />
                    <path d="M42.5999 54.4C42.5999 55.5 41.6999 56.4 40.5999 56.4H35.7999C34.6999 56.4 33.7999 55.5 33.7999 54.4C33.7999 53.3 34.6999 52.4 35.7999 52.4H40.5999C41.6999 52.4 42.5999 53.3 42.5999 54.4Z" fill="#D9B687" />
                    <path d="M51.8 54.4C51.8 55.5 50.9 56.4 49.8 56.4H45C43.9 56.4 43 55.5 43 54.4C43 53.3 43.9 52.4 45 52.4H49.8C50.9 52.4 51.8 53.3 51.8 54.4Z" fill="#D9B687" />
                    <path d="M42.5999 58.9C42.5999 60 41.6999 60.9 40.5999 60.9H35.7999C34.6999 60.9 33.7999 60 33.7999 58.9C33.7999 57.8 34.6999 56.9 35.7999 56.9H40.5999C41.6999 56.9 42.5999 57.8 42.5999 58.9Z" fill="#D9B687" />
                    <path d="M51.8 58.9C51.8 60 50.9 60.9 49.8 60.9H45C43.9 60.9 43 60 43 58.9C43 57.8 43.9 56.9 45 56.9H49.8C50.9 56.9 51.8 57.8 51.8 58.9Z" fill="#D9B687" />
                    <path d="M36.4 47.4C36.4 47.4 35.5 47 36.4 46.4C37.3 45.9 40.3 44.3 41.5 44.1C42.8 44 43.1 47.3 41.5 47.3C39.8 47.4 36.4 47.4 36.4 47.4Z" fill="#D9B687" />
                    <path d="M49.0999 47.4C49.0999 47.4 49.9999 47 49.0999 46.4C48.1999 45.9 45.1999 44.3 43.9999 44.1C42.6999 44 42.3999 47.3 43.9999 47.3C45.6999 47.4 49.0999 47.4 49.0999 47.4Z" fill="#D9B687" />
                    <path
                        d="M34.1 11.6C33.7 9.8 33.9 7.9 34.3 6.1C34.9 4.2 36.3 2.6 38.4 1.5C40.3 -4.76837e-07 42.3 -0.300001 44.5 0.499999C46.2 0.7 47.7 1.4 49 2.8C50.1 4.1 50.8 5.7 51.3 7.4C51.6 8.8 51.6 10.2 51.4 11.6L50.8 14.9C50.8 13 49.9 11.1 49.2 8.7C48.8 7.6 48.2 6.9 47.2 6.5C45.7 8 44.8 9.1 41.8 9.8C40 9.9 38.4 9.6 36.9 8.8C37.3 8.2 37.6 7.5 37.6 6.8C36.9 7.2 36.5 7.9 36.1 8.6C35.6 10.6 35.2 12.7 35.1 14.8C35.1 14.7 34.3 12.4 34.1 11.6Z"
                        fill="black"
                    />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="84.5" height="63.2" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
        );
    }

    const Completionist = () => <span className="after-text">GET LIFTING! YOU CAN NOW...</span>;
    const date2 = props.dateToExpire - new Date();
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <Completionist key={props.key} />;
        } else {
            // Render a countdown
            if (props.onlyShowDays) {
                return <span className="timer">{days} DAYS</span>;
            } else {
                return (
                    <span className={`timer ${props.onlyShowDays == false ? `` : `font-size-35`}`}>
                        {days} DAYS, {hours} HOURS, {minutes} MINS, {seconds} SECS
                    </span>
                );
            }
        }
    };

    return (
        <>
            <div className={`card-container ${props.classNameCard} `} style={{ backgroundColor: props.backgroundColor }}>
                <div className="timer-container">
                    <div className="containerr">
                        <Countdown className="countdown" date={Date.now() + date2} renderer={renderer} />
                        <p className="message">{props.message}</p>
                    </div>
                </div>
                <div className={`picture ${props.classNamePicture} `}>
                    {props.desktopImage ? desktopImage : ""} {props.mobileImage ? mobileImage : ""} {props.mobileImage2 ? mobileImage2 : ""}
                </div>
            </div>
        </>
    );
}
export default Timer;
