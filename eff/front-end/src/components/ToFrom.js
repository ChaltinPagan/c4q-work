import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class ToFrom extends Component {
    constructor() {
        super();
        this.state = {
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
          let sortToFrom = obj.filter(el => {
            if (el.fields.length === 2 && el.fields[0].name === "Name") {
              return el;
            }
          })
          
          this.setState({
            objToFrom: sortToFrom
          })
        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value.toUpperCase()
        })
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
        const { message, subtitle } = this.state;
        return (
            <div>
                <input name="to" type="text" placeholder="Enter a name" onInput={this.handleInput} />
                <p></p>
                <input name="from" type="text" placeholder="Your name here" onInput={this.handleInput} />
                <p></p>
                <button onClick={this.handleSubmitTwo}>submit</button>
                <div id="result">
                    <p id="m">{message}</p>
                    <p id="s">{subtitle}</p>
                </div>
            </div>
        )
    }
}

export default ToFrom;