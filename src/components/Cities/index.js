import React, {Component} from 'react';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=ed47fd9ca2f0ce282cf330ecfd9fa587';

//Stateless component
class Cities extends Component {
    render() {
        return(
            <div>
                <h1>Cities</h1>
                <p>City list</p>
                <div>
                    API : <a href={API_CITIES}>{API_CITIES}</a>
                </div>
            </div>
        );
    }
}

export default Cities;