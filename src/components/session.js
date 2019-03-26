import React from "react";
const Session = ({ sessionLength, handleClickSessionLengthDown, handleClickSessionLengthUp})=> (
    <div>
        <h1 id="session-label"> Session Length</h1>
        <button id="session-increment"  onClick={handleClickSessionLengthUp} >up</button>
        <div  id="session-length">{ sessionLength }</div>
        <button id="session-decrement" onClick={handleClickSessionLengthDown}>Down</button>
    </div>
)
Session.getDefaultProps = {
    sessionLength: 25,
}
export default  Session;