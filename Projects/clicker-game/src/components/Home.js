import React, { Component } from 'react';

import heart from './images/heart.png';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';
import five from './images/5.png';
import six from './images/6.png';
import seven from './images/7.png';


class Home extends Component {
    constructor() {
        super();
        this.img = [one, two, three, four, five, six, seven]
        this.state = {
            img: one,
            clicks: 0
        }
    }

    handleClick = () => {
        const { clicks } = this.state;
        let src = this.img[Math.floor(Math.random() * this.img.length)];
        this.setState({
            clicks: clicks + 1,
            img: src
        })
    }

    render () {

        return (
            <div>
                <img alt='heart' src={heart} />
                <br />
                <br />
                <h2 id="score">Score: {this.state.clicks}</h2>
                <button onClick={this.handleClick}>Click Me!</button>
                <br />
                <br />
                <img alt='img' id="changable" src={this.state.img} height="300" width="300" />
            </div>
        )
    }
}

export default Home;