import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Clock from 'react-live-clock';

import './navigation.css';

//Stateless component
class Navigation extends Component {
  render() {
    return (
      <ul className="navigation">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather" activeClassName="selected">
            Weather
          </NavLink>
        </li>
        <li>
          <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} />
        </li>
      </ul>
    );
  }
}
  
export default Navigation;