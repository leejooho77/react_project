import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <BootstrapNavBar />
        <div className="container main">
          <h1>Main App</h1>
        </div>
      </div>
    );
  }
}

export default App;
