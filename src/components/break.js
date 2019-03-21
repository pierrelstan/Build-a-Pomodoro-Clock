import React from "react";
const Break =({ breakLength })=> (
    <div>
        <button id="break-decrement">down</button>
        <div id="break-label">{breakLength}</div>
        <button d="break-increment">up</button>
    </div>
)
export default Break;