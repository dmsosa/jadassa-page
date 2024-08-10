export async function fetchWeather({lat, lon}) {
    const url =  `${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    return fetch(url)
        .then((response) => {
            
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Please allow access to your location");
            }})
        .then((data) => {
            if (Object.entries(data).length) {
                const weatherData = mapDataToWeatherInterface(data);
                return weatherData;
            }
        });
}

function mapDataToWeatherInterface(data) {
    const mapped = {
        date: data.dt * 1000,
        description: data.weather[0].main,
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max),
        country: data.sys.country,
        name: data.name
    }
    return mapped;
}