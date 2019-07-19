import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Cities from './components/Cities/';

const RouterApp = () => {
    const city = 'Your location';

    return (
        <div>
            <Header city={city} />
            <Navigation />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cities" component={Cities} />
        </div>
    );
};

export default RouterApp;