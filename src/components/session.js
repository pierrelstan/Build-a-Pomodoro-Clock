import React from "react";
const Session =({ sessionLength })=> (
    <div>
        <button i id="session-decrement">down</button>
        <div id="session-label">{ sessionLength }</div>
        <button id="session-increment">up</button>
    </div>
)

export default  Session;