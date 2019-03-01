import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    seconds: 25,
    breakLength: 5,
    sessionLength:25

  }

  tick() {
    this.setState(state=> ({
      seconds: state.seconds - 1
    }))
    if (this.state.seconds === -1) {
      this.setState(state => ({
        seconds: state.seconds + 26
      }))
    }
  }

 
 
componentDidMount(){
  this.interval = setInterval(()=> this.tick(), 1000)



}
componentWillUnmount() {
  clearInterval(this.interval)
}
  render() {
    const { seconds } = this.state;
    return (
      <div>
        <div><h1 style={{textAlign: "center"}}>Pomodoro Clock</h1></div>
        <div style={{ textAlign: "center" }}>Seconds: {seconds}</div> 
       <div>
          <div id="break-decrement">down</div>
          <div id="break-label">{this.state.breakLength}</div>
          <div id="session-decrement">up</div>
       </div>

      <div>
          <div id="break-decrement">down</div>
          <div id="session-label">{this.state.sessionLength}</div>
          <div id="session-decrement">up</div>
      </div>
       <div>
          <div id="timer-label">Session</div>
       </div>
        
      </div>
    );
  }
}

export default App;
