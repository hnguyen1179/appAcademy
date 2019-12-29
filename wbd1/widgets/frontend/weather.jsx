import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null
        };
        this.pollWeather = this.pollWeather.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.pollWeather);
    }

    pollWeather(location) {
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        const apiKey = 'c429908633cdf925ea2ee11bfdc4b25d'

        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
        url += `&APPID=${apiKey}`;

        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.status == 200 && xmlhttp.readyState == XMLHttpRequest.DONE) {  
                const data = JSON.parse(xmlhttp.responseText);
                this.setState({weather: data});
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    render() {
        let content = <div></div>;

        if (this.state.weather) {
            const weather = this.state.weather;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32;
            content = <div>
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)} degrees</p>
            </div>;
        } else {
            content = <div className='loading'>loading weather...</div>;
        }
        return (
            <div className="weather-main">
                <h1>Weather</h1>
                <div className='weather'>
                    {content}
                </div>
            </div>
        );
    }


}

export default Weather;