import React from "react";
const ControlButton =({handleClickStart, handleClickReset})=> (
    <div className="start_Stop_wrapper">
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
                <button id="start_stop" onClick={handleClickStart}>Start</button>
                <button onClick={handleClickReset} id="reset">Reset</button>

            </div>

        </div>
    </div>
)
export default ControlButton;