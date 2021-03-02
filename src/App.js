import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer"

//https://www.npmjs.com/package/react-countdown


function App() {
    return (
        <div className="App">
          <div className="App-header">
          <Timer dateToExpire = {new Date(2021, 2, 2, 23, 41)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#00F5D4" numberOfImages={1}/>
          <Timer dateToExpire = {new Date(2021, 2, 2, 23, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#00BBF9" numberOfImages={2}/>
          <Timer dateToExpire = {new Date(2021, 2, 2, 24, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#FEE440" numberOfImages={6}/>
          <Timer dateToExpire = {new Date(2021, 2, 2, 25, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#F15BB5" numberOfImages={6}/>
          <Timer dateToExpire = {new Date(2021, 2, 2, 26, 56)} message={"WORKOUT WITH A FRIEND IN THE PARK"} backgroundColor="#9B5DE5" numberOfImages={12}/>
        </div>
        </div>
    );
}

export default App;
