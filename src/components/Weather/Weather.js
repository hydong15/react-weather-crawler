import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router';

import List from './List';
import TodayWeather from './TodayWeather';
import './weather.css';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';

class Weather extends Component {
  state = {
    cities: []
  };
  
  async componentDidMount() {   
    const cities = await fetch(API_CITIES)
      .then(data => data.json())
      .then(result => result);
    
    this.setState({
      cities
    });
  }
  
  render() {
    const {match} = this.props;
    const {cities} = this.state;
    
    return(
      <div className="weather">
        <Switch>
          <Route path={`${match.path}/:cityId`} component={TodayWeather} />
          <Route exact path={match.path} render={() => <List cities={cities} />} />
        </Switch>
      </div>
    );
  }
}
  
export default withRouter(Weather);