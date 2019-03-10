import React, { Component } from 'react';
import './App.css';
import Title from './components/pomodoroTitle';
import ControlButton from './components/controlTimerButton';

const initialState = {
  min:"0",
  seconds: 25 * 60,
  sessionLength: 25,
  breakLength:  5,
  start: false,
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
      breakTitle:"Break"
    }
  }


componentDidMount(){
  setInterval(this.reange, 3000)
}
componentWillMount(){
  clearInterval(this.reange)
}
reange=()=> {
  if(this.state.seconds === 0){
    console.log(" i ma here")
    clearInterval(this.reange)
    this.setState((prev)=> ({
      seconds:Math.floor(prev.breakLength * 60),
      break: true
    }))
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
  let  sec= ("0" + this.state.seconds % 60).slice(-2)
  return sec
}
  
  handleClickStart =()=> {
    this.setState({start:true})

  console.log(this.audio)
    let sound = this.audio;
// sound 
    // this.PlaySound=setInterval(() => {
    //   sound.play()
    // }, 1000);

  this.interval = setInterval(() =>

    this.setState(state => ({
      seconds: state.seconds - 1,
      min: Math.floor((this.state.seconds / 60)),
    })),
    1000)

  
   
}

  handleClickReset=()=> {
    this.setState(()=>({
      ...initialState
    }))
    clearInterval(this.interval)
    clearInterval(this.PlaySound)

}
 
  handleClickStop=()=> {
  clearInterval(this.interval)
    clearInterval(this.PlaySound)
}


  render() {
    
    const { 
      breakLength, 
      sessionLength,
       seconds, 
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
     <div className="circle-wrapper">
          <div id="circle">
            <h2 id="timer-label">{!this.state.break ? "Session" :`${this.state.breakTitle}`}</h2>
            <div  id="time-left">{this.getMinutes()} : {this.getSecondes()} </div>
          </div>
     </div>
     
        <div className="start_Stop_wrapper">
         <div className="StartAndStop-Wrapper">
           <div>
              <button id="start_stop" onClick={this.handleClickStart} className="button button2 "><i className="fas fa-play"></i>
                <audio
                   id="beep" src={`https://res.cloudinary.com/dteuk7cbl/video/upload/v1546541304/Audio/CardiakClap.mp3`}
                  ref={ref => this.audio = ref}
                >
                </audio>
              </button>
              <button onClick={this.handleClickStop} className="button button2"><i className="fas fa-stop"></i></button>
              <button onClick={this.handleClickReset} className="button button2" id="reset"><i className="fas fa-sync-alt"></i></button>
           </div>
           
         </div>
        </div>
      </div>
    );
  }
}

export default App;
