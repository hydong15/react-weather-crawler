import React, {Component} from 'react';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=ed47fd9ca2f0ce282cf330ecfd9fa587';

class Cities extends Component {
    state = {
        cities: []
    };

    componentDidMount() {
        console.log(this.state.cities);

        const cities = fetch(API_CITIES)
            .then(data => data.json())
            //.then(result => console.log(result));\
            .then(result => {
                this.setState({
                    cities: result
                })
            });
        //Can't use data as sync
        console.warn('FETCHED CITIES', cities);
    }

    render() {
        const {cities} = this.state;

        console.log('============ render');
        console.log(cities);

        return(
            <div>
                <h1>Cities</h1>
                <p>City list</p>
                <div>{this.state.cities.join(' ')}</div>
                <div>
                    API : <a href={API_CITIES}>{API_CITIES}</a>
                </div>
            </div>
        );
    }
}

export default Cities;


// class Cities extends Component {
//     state = {
//         cities: []
//     };

//     componentDidMount() {
//         const API = 'http://demo6468405.mockable.io/weather-crawlers/cities';//http://demo6468405.mockable.io/weather-crawlers/cities'

//         fetch(API)
//             .then(data => data.json())
//             //.then(result => console.log(result));\
//             .then(result => {
//                 this.setState({
//                     cities: result
//                 })
//             });
//     }

//     render() {
//         const {cities} = this.state;

//         console.log('============ render');
//         console.log(cities);

//         return(
//             <div>
//                 <h2>List: </h2>
//                 <ul>
//                     {cities.map(item => {
//                         return (
//                             <li key={item}>
//                                 <Link to={`/city/${item}`}>
//                                     {item}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                     <li>Seoul</li>
//                     <li>Gy</li>
//                 </ul>
//             </div>
//         );
//     }
// }