import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Navbar2 from "./components/Navbar2";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import desktop2 from "./assets/desktop2.svg";
import desktop6 from "./assets/desktop6.svg";
import desktop8 from "./assets/desktop8.svg";
import desktopBike from "./assets/desktopBike.svg";
import earth from "./assets/earth.svg";
import mobile61 from "./assets/mobile61.svg";
import mobile62 from "./assets/mobile62.svg";
import mobile81 from "./assets/mobile81.svg";
import mobile82 from "./assets/mobile82.svg";
import mobileBike from "./assets/mobileBike.svg";
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
                            desktopImage={desktop2}
                            mobileImage={desktop2}
                            key={"1"}
                            // classNamePicture="muscle-men-6"
                            // classNameCard="muscle-men-card-6"
                        />
                        <Timer
                            dateToExpire={new Date(2021, 2, 29, 1, 0)}
                            message={"WORKOUT WITH 6 PEOPLE, OUTSIDE OR IN A GARDEN, MINI BOOT CAMP TIME!"}
                            backgroundColor="#00BBF9"
                            numberOfImages={6}
                            desktopImage={desktop6}
                            mobileImage={mobile61}
                            mobileImage2={mobile61}
                            mobileImage2MarginLeft={"mobileImage2MarginLeft"}
                            key={"2"}
                            // classNamePicture="muscle-men-6"
                            // classNameCard="muscle-men-card-6"
                        />
                        <Timer
                            dateToExpire={new Date(2021, 3, 12)}
                            message={"GYMS REOPEN ACROSS THE UK, GO GET THEM GAINS!"}
                            backgroundColor="#FEE440"
                            numberOfImages={12}
                            onlyShowDays={true}
                            desktopImage={desktop8}
                            mobileImage={mobile81}
                            mobileImage2={mobile81}
                            key={"3"}
                            // classNamePicture="muscle-men-12"
                            // classNameCard="muscle-men-card-12"
                        />
                        <Timer
                            dateToExpire={new Date(2021, 4, 17)}
                            message={"INDOOR CLASSES ARE ON, GET YOURSELF TO A SPIN CLASS! "}
                            backgroundColor="#F15BB5"
                            numberOfImages={12}
                            onlyShowDays={true}
                            desktopImage={desktopBike}
                            mobileImage={mobileBike}
                            mobileImage2={mobileBike}
                            // classNamePicture="muscle-men-12"
                            // classNameCard="muscle-men-card-12"
                            key={"4"}
                        />
                        <Timer
                            dateToExpire={new Date(2021, 5, 21)}
                            message={"WORKOUT EVERYWHERE WITH EVERYONE!"}
                            backgroundColor="#9B5DE5"
                            numberOfImages={12}
                            onlyShowDays={true}
                            classNameCard="last-div"
                            desktopImage={earth}
                            mobileImage={earth}
                            key={"5"}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
