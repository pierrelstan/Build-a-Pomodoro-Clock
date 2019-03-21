import React from "react";
const ControlButton =()=> (
    <div className="start_Stop_wrapper">
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
                <button id="start_stop" onClick={this.handleClickStart}>Start</button>
                <button onClick={this.handleClickReset}>Reset</button>

            </div>

        </div>
    </div>
)
export default ControlButton;