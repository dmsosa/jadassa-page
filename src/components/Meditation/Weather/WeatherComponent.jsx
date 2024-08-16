import moment from "moment";
import { useEffect, useState } from "react";
import { fetchWeather } from "../../../services/weather";


function WeatherComponent() {
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

    const currentDay = moment().format('dddd') + ", " + moment().format('LL');
    const description = weatherData.description ? weatherData.description.toLowerCase() : "clear";

    return  typeof weatherData != undefined ?
            <div className="wetter-wrapper">
                <div className="row wetter-header">
                    <p>{weatherData.name}</p>
                    <div className="wetter-temperatur">
                        <div className={`wetter-icon bg-${description}`}></div>
                        <div>
                            <div className="wetter-min">{weatherData.min}</div>
                            <div className="wetter-max">{weatherData.max}</div>
                        </div>
                    </div>
                </div>
                <div className="row wetter-details">
                    <p>
                        {currentDay}
                    </p>
                    <div className="country">{weatherData.country}</div>
                </div>
            </div> :
            <div className="kein-wetter">
                <h1>No weather</h1>
                <p>404</p>
            </div>
         
}

export default WeatherComponent;