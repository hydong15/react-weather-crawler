import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Cities extends Component {
    state = {
        cities: []
    };

    componentDidMount() {
        const API = 'http://demo6468405.mockable.io/weather-crawlers/cities';

        fetch(API)
            .then(data => data.json())
            //.then(result => console.log(result));
            .then(result => {
                this.setState({
                    cities: result
                });
            });
        //Can't use data as sync
        console.warn('FETCHED CITIES');
    }

    render() {
        const {cities} = this.state;

        console.log('============ render');
        console.log(cities);

        return(
            <div>
                <h2>List:</h2>
                <ul>
                    {cities.map(item => {
                        return (
                            <li key={item}>
                                <Link to={`/city/${item}`}>
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Cities;