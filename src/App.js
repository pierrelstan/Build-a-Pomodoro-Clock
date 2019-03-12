import React, { Component } from 'react';
import './App.css';
import Title from './components/pomodoroTitle';
import ControlButton from './components/controlTimerButton';
import DisplaySession  from './components/DisplaySession';
import ButtonStartPauseReset from './components/ButtonStartPauseReset';

const initialState = {
  min:"0",
  seconds: 25 * 60,
  sessionLength: 25,
  breakLength:  5,
  start: false,
  titleTimer:"Session"
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      start:false,
      min:"",
      seconds: 25 * 60,
      breakLength: 5,
      break: false,
      sessionLength: 25,
      br: false,
      titleTimer:"Session"
    }
  }

componentDidMount(){
  document.title = `You clicked ${this.state.seconds} times`;
}
 
componentWillUnmount(){
  document.title = `You clicked ${this.state.seconds} times`;
 
  
}
componentDidUpdate(){
  if (this.state.seconds === 0) {
    setTimeout(() => {
      this.setState( {
        seconds: Math.floor(this.state.breakLength * 60),
        titleTimer: "Break"
        // break: true
      })
    }, 1000);
  }
}

 

  handleIncremetBreakLength =()=> {
    this.setState((prevState) => ({
      breakLength: this.state.breakLength + 1,
    }))
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
    
    else {
      return 
    }
   
  }
  handleIncremetsessionLength = () => {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength + 1,
      // break:false,
      session:true
    }))
   
    if(this.state.session === true){
      this.setState(prevState => ({
        seconds: prevState.sessionLength * 60
      }))
    }
  }
  handleDecremetsessionLength = () => {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength - 1,
      session: true,
     
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
  startTime=()=> {
    this.interval = setInterval(() => 
      this.setState(state => ({
        seconds: state.seconds - 1,
        min: Math.floor((this.state.seconds / 60)),
      })),
      1000)
   
    return;
  }
  handleClickStart =()=> {
    this.setState({start:true})
    this.startTime();
}
  ResetButton=()=> {
  this.setState(() => ({
    ...initialState
  }))
  clearInterval(this.interval)
  clearInterval(this.PlaySound)

  }
  handleClickReset=()=> {
  this.ResetButton()
}
 
  handleClickStop=()=> {
  clearInterval(this.interval)
    clearInterval(this.PlaySound)
}


  render() {
    console.log(this.state.seconds)
    const { 
      breakLength, 
      sessionLength,
      titleTimer,
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
          titleTimer={titleTimer}
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
