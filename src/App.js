import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Navbar2 from "./components/Navbar2";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

//https://www.npmjs.com/package/react-countdown

function App() {
    return (
        <>
            <Navbarr />
            <div className="App">
                <div className="App-header">
                    <div className="timer-container">
                        <Timer dateToExpire={new Date(2021, 2, 5, 23, 41)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#00F5D4" numberOfImages={1} key={"1"} />
                        <Timer dateToExpire={new Date(2021, 2, 7, 23, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#00BBF9" numberOfImages={2} key={"2"} />
                        <Timer dateToExpire={new Date(2021, 2, 8, 24, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#FEE440" numberOfImages={3} onlyShowDays={true} key={"3"} />
                        <Timer
                            dateToExpire={new Date(2021, 2, 9, 25, 56)}
                            message={"WORKOUT WITH A FRIEND IN THE PARK"}
                            backgroundColor="#F15BB5"
                            numberOfImages={6}
                            onlyShowDays={true}
                            classNamePicture="muscle-men-6"
                            classNameCard="muscle-men-card-6"
                            key={"4"}
                        />
                        <Timer dateToExpire={new Date(2021, 2, 10, 26, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#9B5DE5" numberOfImages={12} onlyShowDays={true} classNameCard="muscle-men-card-12 last-div" key={"5"} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
