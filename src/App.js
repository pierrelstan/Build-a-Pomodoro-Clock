import React, { Component } from 'react';
import './App.css';
import Break from './components/break';
import Session from './components/session';
import Display from './components/display';
import ControlButton from './components/controlButton';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 25 * 60,
      breakLength: 5,
      sessionLength: 25,
      reachZero: false
    }
  }
c
 componentDidUpdate () {
   if (this.state.seconds === 0) {
     this.setState({
       seconds:900,
      reachZero: true
     })
   }
  
 }
getMinutes(){
  const { seconds } = this.state;
 let min= Math.floor((seconds / 60))
 return min
}

getSecondes(){
  const { seconds } = this.state;
  let  sec= ("0" + seconds % 60).slice(-2)
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
    const { sessionLength, breakLength, reachZero} = this.state;
    return (
      <div>
        <div><h1 style={{textAlign: "center"}}>Pomodoro Clock</h1></div>
        <div style={{ display: "flex", justifyContent:"center"}}>
           <Break 
           breakLength={ breakLength }
           />
           <Session
           sessionLength={ sessionLength }
            />
        </div>
            <Display
            getMinutes={this.getMinutes()}
            getSecondes ={this.getSecondes()}
            reachZero={reachZero}
            />
            <ControlButton
            handleClickStart={this.handleClickStart}
            handleClickReset={this.handleClickReset}
             />
      </div>
    );
  }
}

export default App;
