import React from "react";
const Break = ({ breakLength, handleClickBreakLengthDown, handleClickBreakLengthUp })=> (
    <div>
        <h1 id="break-label">Break Length</h1>
        <button id="break-increment" onClick={handleClickBreakLengthUp}>up</button>
        <div id="break-length">{ breakLength }</div>
        <button  id="break-decrement" onClick={handleClickBreakLengthDown}>down</button>
    </div>
)

Break.getDefaultProps = {
    breakLength: 5,
}
export default Break;