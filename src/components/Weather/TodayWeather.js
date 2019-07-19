import React, {Component} from 'react';

import Icon from './Icon';

const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q=';
const APP_ID = '&appid=ed47fd9ca2f0ce282cf330ecfd9fa587';
//http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=ed47fd9ca2f0ce282cf330ecfd9fa587

class TodayWeather extends Component {
    state = {
        weather : null
    };

    async componentDidMount() {
        const cityId = 'Daejeon';
        const api = `${API_WEATHER}${cityId}${APP_ID}`;

        const weather = await fetch(api)
            .then(res => res.json())
            .then(data => data.weather[0]);
        
        this.setState({
            weather
        });
    }

    render() {
        const {cityId} = this.props.match.params;
        const {weather} = this.state;

        if (!weather) {
            return <div>Loading...</div>
        }

        return (
            <>
                <h2>{cityId}</h2>
                <div>{JSON.stringify(weather)}</div>

                <h3 className="weather-main">{weather.main}</h3>
                <div className="weather-image">
                        <Icon iconId={weather.id} />
                </div>
            </>
        );
    }
}

export default TodayWeather;