import React, { Component } from 'react';
//import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import Schedule from './components/Schedule';
import Chat from './components/Chat';
import Popular from './components/Popular';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/popular">Popular</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Schedule} />
          <Route path="/chat/:name/:showid" component={Chat} />
          <Route path="/popular" component={Popular} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
