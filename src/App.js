import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Break from './components/break';
import Break from './components/break';
import Session from './components/session';
import Display from './components/display';


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
 
  render() {
    return (
      <div>
        <div><h1 style={{textAlign: "center"}}>Pomodoro Clock</h1></div>
        <div style={{ display: "flex", justifyContent:"center"}}>
           <Break />
           <Session />
        </div>
            <Display />
      </div>
    );
  }
}

export default App;
