import React from "react";
const ControlButton =({handleClickStart, handleClickReset,start_stop})=> (
           <div style={{display:"flex",justifyContent:"center"}}>
               <div  className="buttom-label-wrapper">
                <button id="start_stop" onClick={handleClickStart} className="button button2">{start_stop ? <i class="fas fa-play"></i> : <i class="fas fa-stop"></i>}</button>
                <button onClick={handleClickReset} id="reset" className="buttonreset button2"><i class="fas fa-sync-alt"></i></button>

            </div>
            </div>
)
export default ControlButton;