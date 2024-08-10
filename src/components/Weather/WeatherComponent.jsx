import moment from "moment";


function WeatherComponent({weatherData}) {

    const currentDay = moment().format('dddd') + ", " + moment().format('LL');
    const description = weatherData.description ? weatherData.description.toLowerCase() : "clear";
    return <div className="wetter-card container">
            <div className="wetter-title">
                <div className="title">{weatherData.name}</div>
                <div className="country">{weatherData.country}</div>
            </div>
            <div className="wetter-temperatur">
                <div className={`wetter-icon bg-${description}`}></div>
                <div>
                    <div className="wetter-min">{weatherData.min}</div>
                    <div className="wetter-max">{weatherData.max}</div>
                </div>
            </div>
            <div className="day">
                {currentDay}
            </div>
        </div>
         
}

export default WeatherComponent;