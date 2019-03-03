import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 25 * 60,
      breakLength: 5,
      sessionLength: 25
    }
  }

 
getMinutes(){
 let min= Math.floor(("0" + this.state.seconds / 60))
 return min
}
getSecondes(){
  let  sec= ("0" + this.state.seconds % 60).slice(-2)
  return sec
}

breakLength(){
 if(this.getSecondes() === 57) {
  this.setState({
    seconds:clearInterval(this.interval)
  })
 }
}
  handleClickStart =()=> {

    this.interval = setInterval(() => this.setState(state => ({
      seconds: state.seconds - 1,
    })), 1000)
  }

  handleClickReset=()=> {
    this.setState({
      seconds: this.state.sessionLength * 60
    })
    clearInterval(this.interval)
  }
 
  handleClickStop=()=> {
  clearInterval(this.interval)
}
  render() {
    return (
      <div>
        <div><h1 style={{textAlign: "center"}}>Pomodoro Clock</h1></div>
        <div style={{display: "flex", justifyContent:"center"}}>
          <div>
             <h2>break Length</h2>
            <div id="break-decrement"><i class="far fa-arrow-alt-circle-up"></i></div>
            <div id="break-label">{this.state.breakLength}</div>
            <div id="session-decrement"><i class="far fa-arrow-alt-circle-down"></i></div>
          </div>
          <div>
            <h2>session Length</h2>
            <div id="break-decrement"><i class="far fa-arrow-alt-circle-up"></i></div>
            <div id="session-label">{this.state.sessionLength}</div>
            <div id="session-decrement"><i class="far fa-arrow-alt-circle-down"></i></div>
          </div>
        </div>
     <div className="circle-wrapper">
          <div id="circle">
            <h2>Session</h2>
            <div id="timer-label" >{this.getMinutes()} : {this.getSecondes()} </div>
          </div>
     </div>
     
        <div className="start_Stop_wrapper">
         <div className="StartAndStop-Wrapper">
           <div>
              <button id="start_stop" onClick={this.handleClickStart}>Start</button>

              <button onClick={this.handleClickStop}>Stop</button>
              <button onClick={this.handleClickReset}>Reset</button>

           </div>
           
         </div>
        </div>
      </div>
    );
  }
}

export default App;
