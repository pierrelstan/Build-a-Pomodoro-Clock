import React from 'react';
class ButtonStartPauseReset extends React.Component {
play(){
    if(this.props.start === true){
        console.log(this.audio)
        let sound = this.audio;
        // sound
        this.PlaySound = setInterval(() => {
            sound.play()
        }, 1000);
    }
   
}


    render(){
        const { handleClickReset, handleClickStart, handleClickStop, start } = this.props;
        return (
            <div className="start_Stop_wrapper">
                <div className="StartAndStop-Wrapper">    
                    <button onClick={handleClickStart} className="button button2 " id="start_stop">{start ? <i className="fas fa-play"></i> : <i className="fas fa-stop"></i> }
                        </button>
                        <button onClick={handleClickReset} className="button button2" id="reset"><i className="fas fa-sync-alt"></i></button>
                   

                </div>
            </div>
        )
    }
}
export default ButtonStartPauseReset;