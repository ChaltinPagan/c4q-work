import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Popular.css';

class Popular extends Component {
    constructor() {
        super();
        this.state = {
            popular: []
        }
    }

    // Get shows with a rating of 8 out of 10.
    // Uses the /schedule endpoint and will change daily.
    handlePopular = () => {
        axios.get('http://api.tvmaze.com/schedule')
        .then( res => {
            let pop = res.data.filter( el => {
                if (el.show.rating.average > 8) {
                    return el;
                }
            })
            console.log("pop:", pop)
            this.setState({
                popular: pop
            })
        })
        .catch( err => console.log(err))
    }

    componentDidMount = () => {
        this.handlePopular();
    }

    render() {
        const {popular} = this.state;
        return ( 
            <div>
                <h1>Popular Shows</h1>
                <table>
                    <tbody>
                        {popular.map( (el, i) =>
                        <tr key={i}>
                            <td><Link to={`/chat/${el.show.name}/${el.show.id}`}>
                                <img src={el.show.image.medium} /></Link></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Popular;