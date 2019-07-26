import React, { Component } from 'react';
import './about.css';

//Stateless component
class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <div className="about-content">
          <p>This page is about ...</p>
        </div>
      </div>
    );
  }
}
  
export default About;