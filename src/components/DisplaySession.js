
import React from "react";

class DisplaySession extends React.Component {
    render(){
        const { getMinutes , getSecondes} = this.props;
        return (
            <div className="circle-wrapper">
                <div id="circle">
                    <h2 id="timer-label">Session</h2>
                    <div id="time-left">{getMinutes} : {getSecondes} </div>
                </div>
            </div>
        )
    }
}

export default DisplaySession;