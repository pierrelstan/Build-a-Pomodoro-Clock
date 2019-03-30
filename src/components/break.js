import React from "react";
const Break = ({ breakLength, handleClickBreakLengthDown, handleClickBreakLengthUp })=> (
    <div className="container-break">
        <h3 id="break-label">Break</h3>
        <div style={{display:"flex", justifyContent:"center"}}>
        <div id="break-increment" onClick={handleClickBreakLengthUp}><i class="far fa-arrow-alt-circle-up"></i></div>
        <div id="break-length" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>{ breakLength }</div>
        <div  id="break-decrement" onClick={handleClickBreakLengthDown}><i class="far fa-arrow-alt-circle-down"></i></div>
        </div>
    </div>
)

Break.getDefaultProps = {
    breakLength: 5,
}
export default Break;