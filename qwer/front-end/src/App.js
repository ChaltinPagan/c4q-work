import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      joke: []
    }
    fetch('http://localhost:3100')
    .then(response => {return response.json()})
    .then(obj => {
      console.log(obj);
      this.setState({
        joke: obj.jokes
      })
    });
  }
  render() {
    const { joke } = this.state;
    const random = joke[Math.floor(Math.random() * joke.length)];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{random}</p>
      </div>
    );
  }
}

export default App;
