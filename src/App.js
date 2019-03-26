import React, { Component } from 'react';
import './App.css';
import Break from './components/break';
import Session from './components/session';
import Display from './components/display';
import ControlButton from './components/controlButton';

const DefaulttState ={
  seconds: 25 * 60 ,
  breakLength: 5,
  sessionLength: 25,
  reachZero: false,
  start_stop: true,
  TimerLabeldDisplay:"Session",
  count:0
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds:25 * 60,
      breakLength:5,
      sessionLength:25,
      reachZero:false,
      start_stop: true,
      TimerLabeldDisplay:"Session",
      count:0
    }
  }

 componentWillUpdate() {
 
   if (this.state.seconds === 0) {
     this.setState({
       seconds: Math.floor(this.state.breakLength * 60),
       TimerLabeldDisplay:"Break",
       count:1
     })
   }
   if(this.state.count === 1 && this.state.seconds === 0) {
     this.setState({
       TimerLabeldDisplay:"Session"
     })
   }
else {
  console.log("not ready")
}
 }
// componentWillUpdate(){
//   let calculBreaktoReturnSession = this.state.breakLength - this.state.seconds;
//   console.log(calculBreaktoReturnSession + " the result")
//   // if(this.state.seconds === 0 && this.state.reachZero === "Break") {
//   //   this.setState({
//   //     ses:true,
//   //    breakdDisplay:"Session"
//   //   })
// // }
// // else {
// //   return 
// // }
//  }

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
    if(this.state.start_stop) {
      this.interval = setInterval(() => this.setState(state => ({
        seconds: state.seconds - 1,
      })), 1000)
      console.log("je suis la putain")
      this.setState({
        start_stop:false
      })
    }
    else {
      clearInterval(this.interval)
    this.setState({
      start_stop:true
    })
     
     console.log("la aussi putain")
     
    }
    
  }

  handleClickReset=()=> {
    console.log("wesh cest vrai")
    clearInterval(this.interval)

    this.setState({
      ...DefaulttState
    })
   
  }
 handleClickBreakLengthUp=()=> {
   this.setState((prevState)=>({
     breakLength: prevState.breakLength + 1
   }))
   
    if(this.state.breakLength > 60 - 1){
     this.setState({
       breakLength: 60
     })
   }
 }
  handleClickBreakLengthDown = () => {
    this.setState((prevState) => ({
      breakLength: prevState.breakLength - 1,
     
    }))
    if (this.state.breakLength <=  2 - 1) {
      this.setState({
        breakLength: 1
      })
    }
  }
  handleClickSessionLengthDown=()=> {
    this.setState((prevState)=>({
      sessionLength: prevState.sessionLength - 1 ,
      seconds: Math.floor( this.state.sessionLength  *  60) - 1
    }))
    if (this.state.sessionLength <= 2 - 1) {
      this.setState((prevState)=>({
        sessionLength: 1,
      }))
    }
  }
  handleClickSessionLengthUp = () => {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength + 1,
      seconds: Math.floor(this.state.sessionLength * 60) + 1
    }))
    if (this.state.sessionLength > 60 - 1) {
      this.setState({
        sessionLength: 60
      })
    }
  }
  render() {
    const { sessionLength, breakLength, reachZero} = this.state;
    return (
      <div>
        <div><h1 style={{textAlign: "center"}}>Pomodoro Clock</h1></div>
        <div style={{ display: "flex", justifyContent:"center"}}>
           <Break 
           handleClickBreakLengthUp={this.handleClickBreakLengthUp}
           handleClickBreakLengthDown={this.handleClickBreakLengthDown}
           breakLength={ breakLength }
           />
           <Session
           handleClickSessionLengthDown={this.handleClickSessionLengthDown}
           handleClickSessionLengthUp={this.handleClickSessionLengthUp}
           sessionLength={ sessionLength }
            />
        </div>
            <Display
            getMinutes={this.getMinutes()}
            getSecondes ={this.getSecondes()}
            reachZero={reachZero}
            TimerLabeldDisplay={this.state.TimerLabeldDisplay}
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
