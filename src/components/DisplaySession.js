
import React from "react";

const leftValue=(val)=> {
if(val <= 9 ){ 
    return parseInt(0 ,10) + `${val}`;
}
else {
    return val
}

}
class DisplaySession extends React.Component {
    render(){
        
        const { getMinutes, getSecondes, title} = this.props;
        return (
            <div className="circle-wrapper">
                <div id="circle">
                    <h2 id="timer-label">{title ? "Session" : "Break" }</h2>
                    <div id="time-left">{ leftValue(getMinutes) }:{getSecondes}</div>
                </div>
            </div>
        )
    }
}

export default DisplaySession;