import React, {Component} from 'react';
import './home.css';

//Stateless component
class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Home</h1>
                <div className="home-content">
                    <p>Today's weather is ...</p>
                </div>
            </div>
        );
    }
}

export default Home;