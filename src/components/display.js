import React from "react";
const Display=()=> (
        <div style={{ textAlign: "center" }}>
            <h1>Session</h1>
            <div id="timer-label" >{this.getMinutes()} : {this.getSecondes()} </div>
        </div>
)
export default Display;