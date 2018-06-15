import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import Menubar from './Menubar';
import Group from './Group';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Menubar} />
          <Route exact path="/" component={Group} />
        </div>
      </Router>
    );
  }
}

export default App;
