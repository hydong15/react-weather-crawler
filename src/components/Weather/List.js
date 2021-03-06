import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

//Stateless component
const List = ({cities, match}) => {
  const {url} = match;
  
  return (
    <div className="weather-list">
      <h2>Choose your city:</h2>
      <ul className="weather-cities">
        {cities.map(item => (
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
    
export default withRouter(List);