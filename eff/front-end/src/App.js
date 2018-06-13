import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import From from './components/From';
import ToFrom from './components/ToFrom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      objFrom: [],
      objToFrom: [], 
      url: "",
      to: "",
      from: "",
      message: "",
      subtitle: ""
    }
  }

  componentDidMount() {
    fetch("https://www.foaas.com/operations/")
    .then(response => {
      console.log("response:", response);
      return response.json()})
    .then(obj => {
      console.log("obj:", obj);
      let sortFrom = obj.filter(el => {
        if (el.fields.length === 1) {
          return el;
        }
      })
      let sortToFrom = obj.filter(el => {
        if (el.fields.length === 2 && el.fields[0].name === "Name") {
          return el;
        }
      })
      
      this.setState({
        objFrom: sortFrom, 
        objToFrom: sortToFrom
      })
    });
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase()
    })
  }

  handleSubmitOne = () => {
    const { objFrom, from } = this.state;
    const random = objFrom[Math.floor(Math.random()*objFrom.length)].url;
    const choice = random.replace(/:from/, from);
    fetch(`https://www.foaas.com${choice}`, { headers: new Headers({
      'Accept': 'application/json'
    }) })
    .then(response => {
      console.log("response:", response);
      return response.json()})
    .then(obj => {
      console.log("obj:", obj);
      this.setState({
        url: choice,
        message: obj.message,
        subtitle: obj.subtitle
      })
    });
  }

  handleSubmitTwo = () => {
    const { objToFrom, to, from } = this.state;
    const random = objToFrom[Math.floor(Math.random()*objToFrom.length)].url;
    const choice = random.replace(/:name/, to);
    const choice2 = choice.replace(/:from/, from);
    fetch(`https://www.foaas.com${choice2}`, { headers: new Headers({
      'Accept': 'application/json'
    }) })
    .then(response => {
      console.log("response:", response);
      return response.json()})
    .then(obj => {
      console.log("obj:", obj);
      this.setState({
        url: choice,
        message: obj.message,
        subtitle: obj.subtitle
      })
    });
  }
  
  render() {
    return (
      <div id="content">
        <h1>FOAAS</h1>
        <Link to='/from'>From</Link>
        <Link to='/to-from'>To-From</Link>
        <p></p>
        <Switch>
          <Route path='/from' component={From}/>
          <Route path='/to-from' component={ToFrom}/>
        </Switch>
      </div>
    );
  }
}

export default App;