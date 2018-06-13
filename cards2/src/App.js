import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Cards from './components/Cards';
import Shuffle from './components/Shuffle';
import Single from './components/Single';
import Multiple from './components/Multiple';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/cards/shuffle">Shuffle</Link>
          <Link to="/cards/draw">Draw Single Card</Link>
          <Link to="/cards/draw/:num">Draw Multiple Cards</Link>
        </nav>

        <h1>Deck of Cards</h1>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cards" component={Cards} />
        </Switch>
      </div>
    );
  }
}

export default App;
