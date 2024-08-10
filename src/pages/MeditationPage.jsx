import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weather";
import WeatherComponent from "../components/Weather/WeatherComponent";
import Toaster from "../components/Toaster";
import Message from "../components/Message";
import Robot from "../components/Robot";

function MeditationPage() {
    const [ lat, setLat ] = useState([]);
    const [ lon, setLon ] = useState([]);
    const [ weatherData, setWeatherData ] = useState({});

    function onPositionSuccess(pos) {
        const crd = pos.coords;
        setLat(crd.latitude);
        setLon(crd.longitude);
    }
    
    function onPositionError(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError);
        if (lat.length < 1 || lon.length < 1 ) { return }

        fetchWeather({lat, lon})
        .then((wd) => {
            setWeatherData(wd);
        })
        .catch((err) => console.warn(err));
    
    }, [lat, lon]);

    return ( 
        <div className="page meditation-page">
            <div className="wetter-wrapper">
                { 
                typeof weatherData != 'undefined' ? 
                <WeatherComponent weatherData={weatherData} /> : 
                <div className="kein-wetter">
                    <h1>No weather</h1>
                    <p>404</p>
                </div>
                }
            </div>
            <div className="row">
            <div className="col">
                <Message />
            </div>
            <div className="col">
                <div className="row">
                    <Robot />              
                </div>
                <div className="row">
                    <Toaster />
                </div>
            </div>
            </div>
        </div>
)
}

export default MeditationPage;