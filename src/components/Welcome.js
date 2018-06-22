import React, { Component } from 'react';
import Icon from  './Icon';
import Button from './Button';

class Welcome extends Component {
    render() {
        return <div>
            <Icon />
            <h2>Welcome to</h2>
            <h1>Gotham</h1>
            <Button text="Sign In"/>
            <a href="./">New to the city? Sign up</a>
          </div>;
    }
}

export default Welcome;
