import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Teachers from './components/Teachers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/teachers">All Teachers</Link>
          <Link to="/teachers/schools">Teachers by School</Link>
          <Link to="/teachers/subjects">Teachers by Subject</Link>
          <Link to="/teachers/search">Search by Name</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teachers" component={Teachers} />
        </Switch>

      </div>
    );
  }
}

export default App;
