import React from "react";
const Display = ({ getMinutes, getSecondes, reachZero})=> (
        <div style={{ textAlign: "center" }}>
        <h1>{ !reachZero ? "Session" : "Break"}</h1>
            <div id="timer-label" >{getMinutes}:{getSecondes} </div>
        </div>
)
export default Display;