import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=ed47fd9ca2f0ce282cf330ecfd9fa587';

//Stateless component
const Topics = () => {
    return (
        <div>
            <h1>Topics</h1>
            <p>Topic list</p>
        </div>
    );
};

export default Topics;