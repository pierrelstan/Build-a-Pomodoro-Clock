import React from "react";
const Session =()=> (
    <div>
        <button i id="session-decrement">down</button>
        <div id="session-label">{this.state.sessionLength}</div>
        <button id="session-increment">up</button>
    </div>
)

export default  Session;