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
    console.log(this.state.cities);
    
    const cities = await fetch(API_CITIES)
      .then(data => data.json())
      //.then(result => console.log(result));\
      .then(result => result);
    
    //Can use data as sync
    //console.warn('FETCHED CITIES', cities);
    
    this.setState({
      cities
    });
  }
  
  render() {
    const {match} = this.props;
    const {cities} = this.state;
    
    console.log('============ render');
    console.log(cities);
    
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