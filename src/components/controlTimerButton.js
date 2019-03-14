import React from "react";

class  ControlButton extends React.Component {

render(){
    // console.log(this.props.handleDecremetBreakLength)
    const {
         handleDecremetBreakLength,
         handleIncremetBreakLength,
        handleDecremetsessionLength,
        handleIncremetsessionLength ,
        breakLength,
        sessionLength
        } = this.props;
    return (
        <div className="container" >
          <div className="buttom-label-wrapper">
            <div style={{ display: "grid" }}>
              <h2 id="break-label">break Length</h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <div id="break-decrement" onClick={handleDecremetBreakLength}><i className={`far  fa-arrow-alt-circle-down`}></i></div>
                <div id="break-length">{breakLength}</div>
              <div id= "break-increment" onClick={handleIncremetBreakLength}><i className="far  fa-arrow-alt-circle-up "></i></div>
              </div>
            </div>

            <div style={{ display: "grid" }}>
              <h2 id="session-label">session Length</h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <div id="session-increment" onClick={handleIncremetsessionLength}><i className="far fa-arrow-alt-circle-up DisabledButton"></i></div>
                        <div id="session-length" >{sessionLength}</div>
              <div id="session-decrement" onClick={handleDecremetsessionLength}><i className="far fa-arrow-alt-circle-down DisabledButton"></i></div>
              </div>
            </div>
          </div>
        </div>
    )
}
} 
ControlButton.defaultProps = {
  breakLength: 5,
  sessionLength:25
}
export default ControlButton;