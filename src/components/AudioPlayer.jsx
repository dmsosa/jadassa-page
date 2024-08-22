import { useRef, useState } from "react";
import audio from "../assets/obedeceatuspapas.mp3";
import btnAnimation from "../assets/lotties/play.json";
import muteAnimation from "../assets/lotties/mute.json";
import Lottie from "lottie-react";
import { secondsToString } from "../services/converter";

function AudioPlayer() {
    const [ play, setPlay ] = useState(false);
    const [ time, setTime ] = useState("0:00");
    const [ sliderVal, setSliderVal ] = useState(0);
    const [ duration, setDuration ] = useState("0:00");
    const [ volumeVal, setVolumeVal ] = useState("80");



    const audioBtn = useRef(null);
    const muteBtn = useRef(null);
    
    const findAudioElement = (e) => {
        if (e.currentTarget.classList.contains(".audio")) {
            return e.currentTarget;
        }
        else {
            return e.currentTarget.parentElement.firstChild;
        }
    }
    const setBeforeWidth = (audioElement, percent, target = "seek") => {
        const audioContainer = audioElement.parentElement;
        
        if (target === "volume") {
            audioContainer.style.setProperty('--volume-before-width', `${Math.floor(percent)}%`)
        } else {
            audioContainer.style.setProperty('--seek-before-width', `${Math.floor(percent)}%`)
        }
    }
    //seekable width wenn Progress
    const setBufferedWidth = (e) => {
        const audioElement = e.currentTarget;
        const audioContainer = e.currentTarget.parentElement;
        const seekable = audioElement.seekable;
        const duration = audioElement.duration;
        if (duration > 0) {
            if ( seekable.length > 0 ) {
                const percent = Math.floor((seekable.end(seekable.length - 1) * 100) / duration);
                audioContainer.style.setProperty('--buffered-width', `${percent}%`);
            }
        }
    }
    const handleButtonClick = (e) => {
        
        const audioElement = findAudioElement(e);
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
        const audioElement = findAudioElement(e);

        if (e.type === "timeupdate") {
            const percent = (audioElement.currentTime / audioElement.duration) * 100;
            setSliderVal(percent);
            setTime(secondsToString(audioElement.currentTime))
            setBeforeWidth(audioElement, percent);
        } else {
            const percent = e.currentTarget.value;
            const sekunden = Math.floor((percent * audioElement.duration) / 100)
            audioElement.currentTime = sekunden;
        }

    }

    const handleVolumeChange = (e) => {
        const audioElement = findAudioElement(e);
        setVolumeVal(e.currentTarget.value);
        const vol = (e.currentTarget.value / 100);
        audioElement.volume = vol;
        setBeforeWidth(audioElement, e.currentTarget.value, "volume");
    }

    const showVolInput = () => {
        const volInpunt = document.querySelector(".volume-slider");
        volInpunt.classList.remove("versteckt");
        volInpunt.classList.add("sichtbar");
    }
    const hideVolInput = () => {
        const volInpunt = document.querySelector(".volume-slider");
        volInpunt.classList.add("versteckt");
        volInpunt.classList.remove("sichtbar");
    }

    const handleMuteClick = (e) => {
        const audioElement = findAudioElement(e);
        if (audioElement.muted) {
            muteBtn.current.playSegments([30, 70], true);
            audioElement.muted = false;
            setVolumeVal(audioElement.volume * 100);
            setBeforeWidth(audioElement, audioElement.volume * 100, "volume");
        } else {
            muteBtn.current.playSegments([0, 35], true);
            audioElement.muted = true;
            setVolumeVal(0);
            setBeforeWidth(audioElement, 0, "volume");
        }
    }


    return(
        <>

        <div className="audio-container">
            <audio src={audio} preload="metadata" className="audio" onLoadedMetadata={(e) => {
                setDuration(secondsToString(e.currentTarget.duration));
            }} onTimeUpdate={handleSliderChange} onProgress={setBufferedWidth}>
            </audio>
            {/* AudioBtn */}
            <Lottie 
            lottieRef={audioBtn}
            animationData={btnAnimation} 
            loop={false}
            autoPlay={false}
            className="audio-btn"
            onProgress={(e) => {
                
            }}
            onDOMLoaded={(e) => {
                audioBtn.current.goToAndStop(14, true);
            }}
            onClick={handleButtonClick}
            />

            <span className="time current-time">{time}</span>
            
            <input type="range" className="seek-slider" max="100" value={sliderVal} onChange={handleSliderChange}/>

            <span className="time duration">{duration}</span>
            
            {/* Mute Btn */}
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
            onMouseEnter={showVolInput}
            onMouseLeave={hideVolInput}
            >
            </Lottie>
            <input type="range" className="volume-slider versteckt" max="100" value={volumeVal} onChange={handleVolumeChange} onMouseOver={showVolInput} onMouseLeave={hideVolInput}/>
        </div>

        </>
    )
}

export default AudioPlayer;