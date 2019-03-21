import React, { Component } from 'react';
import './App.css';
import Title from './components/pomodoroTitle';
import ControlButton from './components/controlTimerButton';
import DisplaySession  from './components/DisplaySession';
import ButtonStartPauseReset from './components/ButtonStartPauseReset';

const  defaultstate = {
  min:"0",
  seconds: 25 * 60,
  sessionLength: 25,
  break: false,
  start: true,
  titleTimer:"Session",
  session:false
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      start:true,
      min:"",
      seconds: 25 * 60,
      breakLength:5,
      break: false,
      sessionLength: 25,
      titleTimer:"Session",
      title:false,
      session: false
    }
  }
  componentWillUpdate(){
    if (this.state.seconds === 0) {
      let elem = document.getElementById("time-left");
      elem.style.color = "yellow";
      let title = document.getElementById("timer-label");
      title.style.color = "yellow";

      this.setState({
        seconds: Math.floor(this.state.breakLength * 60),
        break:true,
      })
    }
        
  }
  componentDidUpdate(){
    if(this.state.seconds === 0) {
      this.setState({
        title: true
      })
    }
  }
  

  handleIncremetBreakLength =()=> {
    
    this.setState((prevState) => ({
      breakLength: this.state.breakLength + 1,
    }))

    if(this.state.breakLength > 60 - 1) {
      console.log("greater than 60")
      this.setState(()=> ({
        breakLength: 60
      }))
    }
  }
 
  handleDecremetBreakLength=()=> {
    this.setState((prevState) => ({
      breakLength: prevState.breakLength - 1,
    }))
    if (this.state.breakLength === 1) {
      console.log("work")
      this.setState(() => ({
        breakLength: 1
      }))
    }

  }
  handleIncremetsessionLength = () => {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength + 1,
    }))
    if (this.state.sessionLength > 60 - 1) {
      console.log("greater than 60")
      this.setState(() => ({
        sessionLength: 60
      }))
    }

    if(this.state.session === true){
      this.setState(prevState => ({
        seconds: prevState.sessionLength * 60
      }))
    }
  }
  handleDecremetsessionLength = () => {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength - 1,
      session: true 
   }))
    if (this.state.session === true) {
      this.setState(prevState => ({
        seconds: prevState.sessionLength * 60
      }))
    }
    if (this.state.sessionLength === 1) {
      this.setState((state) => ({
        sessionLength: 1
      }))
    }
    if(this.state.sessionLength === 1){
      this.setState((state)=> ({
       seconds: 1 * 60
      }))
    }
  
  }
 
getMinutes(){
 let min= Math.floor((0 + this.state.seconds / 60))
 return min
}
getSecondes(){
  let  sec= ("0"+this.state.seconds % 60).slice(-2)
  
  return sec
}

  handleClickStop = () => {
    clearInterval(this.interval)
    clearInterval(this.PlaySound)
  }

  startTime=()=> {
    if(this.state.start){
      this.interval = setInterval(() =>
        this.setState(state => ({
          seconds: state.seconds - 1,
          start: false,
          min: Math.floor((this.state.seconds / 60)),
           
        })),
        1000);
    }
    else {
      clearInterval(this.interval)
      this.setState({
        start:true
      })   
    }
}
  handleClickStart =()=> {
  this.startTime();
}
  

  handleClickReset=()=> {
    this.setState(() => ({
      ...defaultstate
    }))
      clearInterval(this.interval)
      clearInterval(this.PlaySound)
    let elem = document.getElementById("time-left");
    elem.style.color = "white";
    let title = document.getElementById("timer-label");
    title.style.color = "white"
  
  }
 

  render() {
    const { 
      breakLength, 
      sessionLength,
      title,
       start
     } = this.state;

    return (
      <div>
      <Title />

      <ControlButton 
        breakLength={breakLength}
        sessionLength={sessionLength}
        handleDecremetsessionLength={this.handleDecremetsessionLength}
        handleIncremetsessionLength={this.handleIncremetsessionLength}
        handleDecremetBreakLength={this.handleDecremetBreakLength}
        handleIncremetBreakLength={this.handleIncremetBreakLength}
        />

        <DisplaySession
          getMinutes={this.getMinutes()}
          getSecondes={this.getSecondes()}
          title={title}
         />

        <ButtonStartPauseReset
          handleClickStart={this.handleClickStart}
          handleClickStop={this.handleClickStop}
          handleClickReset={this.handleClickReset}
          start={start}
         />
         
      </div>
    );
  }
}

export default App;
