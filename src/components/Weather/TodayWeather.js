import React, {Component} from 'react';

const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=ed47fd9ca2f0ce282cf330ecfd9fa587';

class TodayWeather extends Component {
    state = {
        weather : {}
    };

    async componentDidMount() {
        // const weather = await fetch(API_WEATHER)
        //     .then(res => res.json())
        //     .then(data => data);
        // this.setState({
        //     weather
        // });
    }

    render() {
        const {cityId} = this.props.match.params;
        const {weather} = this.state;

        return <div>{cityId}</div>;
    }
}

export default TodayWeather;