import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {;
  renderUppercase = props => {
    const {str} = props.match.params;
    return (
      <p>{str.toUpperCase()}</p>
    )
  }

  renderLowercase = props => {
    const {str} = props.match.params;
    return (
      <p>{str.toLowerCase()}</p>
    )
  }

  renderReverse = props => {
    const {str} = props.match.params;
    return (
      <p>{str.split("").reverse().join("")}</p>
    )
  }

  renderLength = props => {
    const {str} = props.match.params;
    return (
      <p>{str.length}</p>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>String API</h1>
        <Switch>
          <Route path='/upper/:str' render={this.renderUppercase} />
          <Route path='/lower/:str' render={this.renderLowercase} />
          <Route path='/reverse/:str' render={this.renderReverse} />
          <Route path='/length/:str' render={this.renderLength} />
        </Switch>
      </div>
    );
  }
}

export default App;
