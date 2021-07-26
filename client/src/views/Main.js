import React from 'react';
import {Link} from '@reach/router';
import ListComponent from '../components/ListComponent';

const Main = () => {
    return (
        <div>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            <ListComponent />
        </div>
    )
}
export default Main;