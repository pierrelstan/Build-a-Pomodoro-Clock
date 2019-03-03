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
 
 
// componentDidMount(){
//   this.interval = setInterval(() => this.handleClickStart(), 1000)
// }
  handleClickStop=()=> {
  clearInterval(this.interval)
}
  render() {
    return (
      <div>
        <div><h1 style={{textAlign: "center"}}>Pomodoro Clock</h1></div>
        <div style={{ display: "flex",}}>
          <div>

            <button id="break-decrement">up</button>
            <div id="break-label">{this.state.breakLength}</div>
            <button id="session-decrement">down</button>
          </div>
          <div>
            <button id="break-decrement">up</button>
            <div id="session-label">{this.state.sessionLength}</div>
            <button id="session-decrement">down</button>
          </div>
        </div>
     
        <div style={{ textAlign: "center" }}>
          <h1>Session</h1>
          <div id="timer-label" >{this.getMinutes()} : {this.getSecondes()} </div>
       </div>
        <div className="start_Stop_wrapper">
         <div style={{display: "flex", justifyContent: "center"}}>
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
