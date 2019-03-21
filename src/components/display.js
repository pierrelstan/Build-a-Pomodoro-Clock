import React from "react";
const Display=({getMinutes, getSecondes})=> (
        <div style={{ textAlign: "center" }}>
            <h1>Session</h1>
            <div id="timer-label" >{getMinutes}:{getSecondes} </div>
        </div>
)
export default Display;