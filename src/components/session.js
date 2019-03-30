import React from "react";
const Session = ({ sessionLength, handleClickSessionLengthDown, handleClickSessionLengthUp})=> (
    <div className="container-session">
        <h3 id="session-label"> Session</h3>
        <div style={{display:"flex", justifyContent:"center"}}>
        <div id="session-increment"  onClick={handleClickSessionLengthUp} ><i class="far fa-arrow-alt-circle-up"></i></div>
        <div  id="session-length" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>{ sessionLength }</div>
        <div id="session-decrement" onClick={handleClickSessionLengthDown}><i class="far fa-arrow-alt-circle-down"></i></div>
        </div>
    </div>
)
Session.getDefaultProps = {
    sessionLength: 25,
}
export default  Session;