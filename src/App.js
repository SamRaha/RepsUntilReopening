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
                        <Timer
                            dateToExpire={new Date(2021, 2, 8)}
                            message={"WORKOUT WITH 1 PERSON, OUTSIDE, TEAM WORK MAKES DREAMS WORK!"}
                            backgroundColor="#00F5D4"
                            numberOfImages={2}
                            key={"1"}
                            classNamePicture="muscle-men-6"
                            classNameCard="muscle-men-card-6"
                        />
                        <Timer
                            dateToExpire={new Date(2021, 2, 29, 1, 0)}
                            message={"WORKOUT WITH 6 PEOPLE, OUTSIDE OR IN A GARDEN, MINI BOOT CAMP TIME!"}
                            backgroundColor="#00BBF9"
                            numberOfImages={6}
                            key={"2"}
                            classNamePicture="muscle-men-6"
                            classNameCard="muscle-men-card-6"
                        />
                        <Timer
                            dateToExpire={new Date(2021, 3, 12)}
                            message={"GYMS REOPEN ACROSS THE UK, GO GET THEM GAINS!"}
                            backgroundColor="#FEE440"
                            numberOfImages={12}
                            onlyShowDays={true}
                            key={"3"}
                            classNamePicture="muscle-men-12"
                            classNameCard="muscle-men-card-12"
                        />
                        <Timer
                            dateToExpire={new Date(2021, 4, 17)}
                            message={"INDOOR CLASSES ARE ON, GET YOURSELF TO A SPIN CLASS! "}
                            backgroundColor="#F15BB5"
                            numberOfImages={12}
                            onlyShowDays={true}
                            classNamePicture="muscle-men-12"
                            classNameCard="muscle-men-card-12"
                            key={"4"}
                        />
                        <Timer dateToExpire={new Date(2021, 5, 21)} message={"WORKOUT EVERYWHERE WITH EVERYONE!"} backgroundColor="#9B5DE5" numberOfImages={12} onlyShowDays={true} classNameCard="muscle-men-card-12 last-div" key={"5"} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
