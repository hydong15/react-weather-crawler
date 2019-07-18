import React, {Component} from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('Component DID MOUNT')
  }

  render() {
    const name = "Huigyun";

    return (
      <div className="App">
        <Header name={name} foo="var"/>
      </div>
    );
  }
}

export default App;
