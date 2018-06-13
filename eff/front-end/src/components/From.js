import React, { Component } from 'react';

class From extends Component {
    constructor(){
        super();
        this.state = {
            objFrom: [], 
            from: "",
            url: "",
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
          
          this.setState({
            objFrom: sortFrom
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

    render() {
      const { message, subtitle } = this.state;
        return (
            <div>
                <input name="from" type="text" placeholder="Enter a name" onInput={this.handleInput} />
                <p></p>
                <button onClick={this.handleSubmitOne}>submit</button>
                <div id="result">
                  <p id="m">{message}</p>
                  <p id="s">{subtitle}</p>
                </div>
            </div>
        )
    }
}

export default From;