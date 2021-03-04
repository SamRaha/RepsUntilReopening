import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import "./Timer.css"
import muscleMan from "../assets/muscle-man.png"

function Timer (props) {
console.log("props is", props);
    let picture = []

    for (let i = 0; i < props.numberOfImages; i++) {
        picture.push (<img src={muscleMan} alt=""/>)
    }

const Completionist = () => <span>GET LIFTING! YOU CAN NOW...</span>
const date2 =  props.dateToExpire  - new Date()
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist key={props.key} />;
    } else {
      // Render a countdown
      if (props.onlyShowDays) {
          return (
            <span class="timer">
            {days} DAYS
          </span>
          )
      } else {
        return (
            <span class="timer">
              {days} DAYS, {hours} HOURS, {minutes} MINS, {seconds} SECS
            </span>
          );
      }
    }
  };

  return (

    // <div className="main-container">
    <div className="card-container" style={{backgroundColor: props.backgroundColor}}>
      
    <div className="timer-container">
      <div className="containerr">
        <Countdown className="countdown" date={Date.now() + date2} renderer={renderer} />
          <p className="message">{props.message}</p>
    </div>
    </div>
    <div className="picture">
    {picture}
    </div>
   
         
    </div>
    // </div>
  )

}
export default Timer;