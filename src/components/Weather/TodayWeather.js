import React, {Component} from 'react';

import Icon from './Icon';

const APP_ID = 'ed47fd9ca2f0ce282cf330ecfd9fa587';

class TodayWeather extends Component {
  state = {
    weather : null
  };
  
  async componentDidMount() {
    const {match} = this.props;
    // console.log(match.params);
    
    const cityId = match.params.cityId;
    const API_WEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${APP_ID}`
    
    const weather = await fetch(API_WEATHER)
      .then(res => res.json())
      .then(data => data);
    
    this.setState({
      weather
    });
  }
  
  render() {
    const {cityId} = this.props.match.params;
    const {weather} = this.state;
    
    if (!weather) {
      return (
        <div>Loading...</div>
      );
    }
    
    const celsius = (weather.main.temp - 273.15).toFixed(2);    //kelvin to celsius
    const weatherMain = weather.weather[0].main;
    const iconId = weather.weather[0].id;
    
    return (
      <div className="weather-today">
        <h2 className="weather-city">{cityId}</h2>
        <div className="weather-today-meta">
          <h3 className="weather-main">{weatherMain}</h3>
          <div className="weather-temp">{celsius}°</div>
        </div>
        <div className="weather-image">
          <Icon iconId={iconId} />
        </div>
      </div>
    );
  }
}
  
export default TodayWeather;