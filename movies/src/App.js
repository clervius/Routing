import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import { Home, Movies, MovieDetail, AddMovie } from './components';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Your Movies
            <small>A Lambda School Project</small>
          </h2>
        </div>
        <Navigation />
        <Route path="/" exact component={ Home } />
        <Route path="/movies" exact component={ Movies } />
        <Route path="/movies/:id" component={ MovieDetail } />
        <Route path="/add" component={ AddMovie } />
      </div>
    );
  }
}

export default App;
