import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from  './Icon';
import Button from './Button';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <Icon />
                <h2>Welcome to</h2>
                <h1>Gotham</h1>
                <Button text="Sign in" />
                <Link to="./SignUp">New to the city? Sign up</Link>
            </div>
        );
    }
}

export default Welcome;
