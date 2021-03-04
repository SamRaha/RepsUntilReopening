import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Nav from "./components/Nav";

//https://www.npmjs.com/package/react-countdown

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="App-header">
              <div className="timer-container">
                <Timer dateToExpire={new Date(2021, 2, 2, 23, 41)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#00F5D4" numberOfImages={1} key={"1"} />
                <Timer dateToExpire={new Date(2021, 2, 4, 23, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#00BBF9" numberOfImages={2} key={"2"} />
                <Timer dateToExpire={new Date(2021, 2, 5, 24, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#FEE440" numberOfImages={6} onlyShowDays={true} key={"3"} />
                <Timer dateToExpire={new Date(2021, 2, 6, 25, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#F15BB5" numberOfImages={6} onlyShowDays={true} key={"4"} />
                <Timer dateToExpire={new Date(2021, 2, 7, 26, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#9B5DE5" numberOfImages={6} onlyShowDays={true} key={"5"} />
            </div>
            </div>
        </div>
    );
}

export default App;
