import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "react-compound-timer/build";

import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
    const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({ expiryTimestamp, onExpire: () => console.warn("onExpire called") });

    return (
        <div style={{ textAlign: "center" }}>
            <h1>react-timer-hook </h1>
            <p>Timer Demo</p>
            <div style={{ fontSize: "100px" }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? "Running" : "Not running"}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button
                onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time);
                }}
            >
                Restart
            </button>
        </div>
    );
}

export default function App() {
    var dateNow = new Date();
    var date2 = new Date(2021, 2, 8) - dateNow;
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    return (
        <div>
            <MyTimer expiryTimestamp={date2} />
        </div>
    );
}
function App() {
    var dateNow = new Date();
    var dateThen = new Date(2021, 2, 2, 22, 1);
    const datediff = dateNow - dateThen;

    // const isTrue = () => {
    //   if  (datediff > 0 ) {

    //     setTurnedTrueOnce(true)
    //     console.log("running");
    //   }
    // }

    // console.log('datediff > 0: ', datediff > 0);

    // const [turnedTrueOnce, setTurnedTrueOnce] = useState(false);
    // console.log('turnedTrueOnce: ', turnedTrueOnce);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //    isTrue()

    //    if (setTurnedTrueOnce) {
    //      console.log("running inside useeffect");
    //    }
    //     // console.log('This will run every second!');
    //   }, 1000);
    //   return () => clearInterval(interval);
    // }, []);

    //year/ month/ day

    var date2 = new Date(2021, 2, 8) - dateNow;
    // console.log((60000 * 60 * 48 - 1000).toDateString())
    // console.log("date2", date2);

    const date = dateThen - dateNow;
    // console.log(date);
    // var d3 = new Date(2021,10,30);

    // while(true) {
    //   isTrue()
    // }

    return (
        <div className="App">
            <div className="App-header">
                {}
                <Timer
                    initialTime={date2}
                    // initialTime={date}
                    direction="backward"
                    // checkpoints={[
                    //     {
                    //         // time:  d - new Date(2021, 2, 2, 21, 23) ,
                    //         // callback: () => console.log("Checkpoint A"),
                    //     },
                    //     {
                    //         // time: 60000 * 60 * 48 - 1000,
                    //         // callback: () => console.log("Checkpoint B"),
                    //     },
                    // ]}
                >
                    {() => (
                        <React.Fragment>
                            <Timer.Days className="time" />
                            DAYS,
                            <Timer.Hours className="time" /> HOURS,
                            <Timer.Minutes className="time" /> MINS,
                            <Timer.Seconds className="time" /> SECS
                        </React.Fragment>
                    )}
                </Timer>

                {/* <Timer initialTime={60000 * 60 * 70 + 5000} lastUnit="h" direction="backward">
                {() => (
                    <React.Fragment>
                        <Timer.Days /> days
                        <Timer.Hours /> hours
                        <Timer.Minutes /> minutes
                        <Timer.Seconds /> seconds
                    </React.Fragment>
                )}
            </Timer> */}
            </div>
        </div>
    );
}

export default App;
