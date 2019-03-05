import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const initialState = {
  seconds: 25 * 60,
  sessionLength: 25,
  breakLength: 5
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 25 * 60,
      breakLength: 5,
      break: false,
      sessionLength: 25,
      session:false
    }
  }


componentWillMount(){
  clearInterval(this.sam)
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
    // if (this.state.seconds === 55) {
    //   let sam = setInterval(() => console.log("huhuhu"), 1000)
    //   return sam
    // }
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

  this.setState({
    break: true
  })
   if (this.state.seconds === 55) {
      console.log("stats")
    }
    
}

  handleClickReset=()=> {
    this.setState(()=>({
      ...initialState
    }))
    clearInterval(this.interval)

}
 
  handleClickStop=()=> {
  clearInterval(this.interval)
}
  render() {
    return (
      <div>
       <h1 className="title-Pomodoro" style={{textAlign: "center"}}>Pomodoro Clock</h1>
        <div className="container" >
          
     
        <div className="buttom-label-wrapper">
          <div style={{ display: "grid" }}>
              <h2 id="break-label">break Length</h2>
          <div style={{display:"flex", justifyContent:"center"}}>
                <div id="break-decrement" onClick={this.handleIncremetBreakLength}><i className="far fa-arrow-alt-circle-up"></i></div>
                <div id="break-length" >{this.state.breakLength}</div>
                <div id="session-decrement" onClick={this.handleDecremetBreakLength}><i className="far fa-arrow-alt-circle-down"></i></div>
       </div>
       </div>

          <div style={{display:"grid"}}>
              <h2 id="session-label">session Length</h2>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <div id="break-increment" onClick={this.handleIncremetsessionLength}><i className="far fa-arrow-alt-circle-up"></i></div>
                <div  id="session-length" >{this.state.sessionLength}</div>
                <div id="session-increment" onClick={this.handleDecremetsessionLength}><i className="far fa-arrow-alt-circle-down"></i></div>
            </div>
          </div>
        </div>
        </div>
     <div className="circle-wrapper">
          <div id="circle">
            <h2 id="timer-label">Session</h2>
            <div  id="time-left">{this.getMinutes()} : {this.getSecondes()} </div>
          </div>
     </div>
     
        <div className="start_Stop_wrapper">
         <div className="StartAndStop-Wrapper">
           <div>
              <button id="start_stop" onClick={this.handleClickStart} className="button button2"><i className="fas fa-play"></i></button>
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
