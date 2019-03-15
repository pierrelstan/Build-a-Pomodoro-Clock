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
        const { handleClickReset, handleClickStart, handleClickStop } = this.props;
        return (
            <div className="start_Stop_wrapper">
                <div className="StartAndStop-Wrapper">
                    <div>
                        <button onClick={handleClickStart} className="button button2 " id="start_stop"><i className="fas fa-play"></i>
                            <audio
                                id="beep" src={`https://res.cloudinary.com/dteuk7cbl/video/upload/v1546541304/Audio/CardiakClap.mp3`}
                                ref={ref => this.audio = ref}
                            >
                            </audio>
                        </button>
                        {/* <button onClick={handleClickStop} className="button button2" ><i className="fas fa-stop"></i></button> */}
                        <button onClick={handleClickReset} className="button button2" id="reset"><i className="fas fa-sync-alt"></i></button>
                    </div>

                </div>
            </div>
        )
    }
}
export default ButtonStartPauseReset;