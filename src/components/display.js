import React from "react";

function format(value) {
        if(value <= 9){
                return `0${value}`
        } else {
                return value
        }
}
const Display = ({ getMinutes, getSecondes, reachZero,TimerLabeldDisplay})=> (
        <div style={{ textAlign: "center" }}>
        <h1 id="timer-label">{TimerLabeldDisplay}</h1>
        <div  id="time-left"> {format(getMinutes)}:{getSecondes} </div>
        </div>
)
export default Display;