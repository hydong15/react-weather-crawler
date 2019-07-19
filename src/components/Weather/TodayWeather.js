import React, {Component} from 'react';

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
            .then(data => data);
        
        this.setState({
            weather
        });
    }

    render() {
        const {cityId} = this.props.match.params;
        const {weather} = this.state;

        return (
            <>
                <h2>{cityId}</h2>
                {weather && <div>{JSON.stringify(weather)}</div>}
            </>
        );
    }
}

export default TodayWeather;