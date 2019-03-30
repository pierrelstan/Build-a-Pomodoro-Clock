import React from "react";

function format(value) {
        if(value <= 9){
                return `0${value}`
        } else {
                return value
        }
}
const Display = ({ getMinutes, getSecondes, reachZero,TimerLabeldDisplay})=> (
        <div className="circle-wrapper">
        <div id="circle">
        <h2 id="timer-label">{TimerLabeldDisplay}</h2>
        <div  id="time-left"> {format(getMinutes)}:{getSecondes} </div>
        </div>
        </div>
)
export default Display;