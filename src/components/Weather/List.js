import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

//Stateless component
const List = ({cities, match}) => {
    const {url} = match;

    return (
        <ul>
            {cities.map(item => (
                <li key={item}>
                    <Link to={`${url}/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    );
}

export default withRouter(List);