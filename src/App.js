import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import RouterApp from './RouterApp';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('Component DID MOUNT')
  }

  render() {
    return (
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    );
  }
}

export default App;
