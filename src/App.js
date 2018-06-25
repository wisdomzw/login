import React, { Component } from 'react';
import Welcome from './components/Welcome';
import './App.scss';
import BgImage from "./images/Welcome.png";

const styles = {
  container: {
    backgroundImage: `url(${BgImage})`
  }
};

class App extends Component {
  render() {
    return <div style={styles.container}  className="container">
        <Welcome />
      </div>;
  }
}

export default App;
