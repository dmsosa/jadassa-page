import { useRef, useState } from "react";
import audio from "../assets/obedeceatuspapas.mp3";
import btnAnimation from "../assets/lotties/play.json";
import muteAnimation from "../assets/lotties/mute.json";
import Lottie from "lottie-react";
import { secondsToString, stringToSeconds } from "../services/converter";

function AudioPlayer() {
    const [ play, setPlay ] = useState(false);
    const [ time, setTime ] = useState("0:00");
    const [ sliderVal, setSliderVal ] = useState(0);
    const [ duration, setDuration ] = useState("0:00");
    const [ volumeVal, setVolumeVal ] = useState("80");


    const audioBtn = useRef(null);
    const muteBtn = useRef(null);
    
    const handleButtonClick = (e) => {
        const audioElement = document.querySelector(".audio");
        if (play) {
            audioBtn.current.playSegments([0,14], true);
            audioElement.pause();
            setPlay(!play);
        } else {
            audioBtn.current.playSegments([14,27], true);
            audioElement.play();
            setPlay(!play);
        }
    }

    const handleSliderChange = (e) => {
        const audioElement = document.querySelector(".audio");
        const percent = Number(e.currentTarget.value);
        const totaleSekunden = stringToSeconds(duration);
        const sekunden = Math.floor((percent * totaleSekunden) / 100);
        audioElement.currentTime = sekunden;
        setSliderVal(e.currentTarget.value);
        setTime(secondsToString(sekunden));
    }

    const handleVolumeChange = (e) => {
        const audioElement = document.querySelector(".audio");
        setVolumeVal(e.currentTarget.value);
        const vol = (e.currentTarget.value / 100);
        audioElement.volume = vol;
    }

    const handleMuteClick = (e) => {
        const audioElement = document.querySelector(".audio");
        if (audioElement.muted) {
            muteBtn.current.playSegments([30, 70], true);
        } else {
            muteBtn.current.playSegments([0, 35], true);
        }
        audioElement.muted = !audioElement.muted;
    }


    return(
        <>
        <audio controls preload="metadata" className="audio" onLoadedMetadata={(e) => {
            console.log(e.currentTarget.duration, e.currentTarget);
            setDuration(secondsToString(e.currentTarget.duration));
        }}>
            <source src={audio}></source>
            audio
        </audio>
        <div className="audio-container">
            <Lottie 
            lottieRef={audioBtn}
            animationData={btnAnimation} 
            loop={false}
            autoPlay={false}
            className="audio-btn"
            onDOMLoaded={(e) => {
                audioBtn.current.goToAndStop(14, true);
            }}
            onClick={handleButtonClick}
            />
            <span className="time current-time">{time}</span>
            
            <input type="range" className="seek-slider" max="100" value={sliderVal} onChange={handleSliderChange}/>

            <span className="time duration" on>{duration}</span>

            <input type="range" className="volume-slider" max="100" value={volumeVal} onChange={handleVolumeChange}/>
            <Lottie 
            lottieRef={muteBtn}
            animationData={muteAnimation}
            loop={false}
            autoPlay={false}
            className="mute-btn"
            onDOMLoaded={(e) => {
                audioBtn.current.goToAndStop(14, true);
            }}
            onClick={handleMuteClick}
            />
        </div>

        </>
    )
}

export default AudioPlayer;