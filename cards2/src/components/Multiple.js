import React, {Component} from 'react';

class Multiple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawMulti: this.props.drawMulti,
            num: this.props.num,
            cards: this.props.cards,
            deck_ID: this.props.deck_ID,
            multi: [],
            remaining: null
        }
    }

    getCards = (props) => {
        //const num = props.match.params.num
        const {deck_ID, num} = this.state;
        fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=${num}`)
        .then(response => {
            return response.json()
        })
        .then(obj => {
            console.log("obj:", obj);
            // let cardsArr = obj.cards;
            // console.log("cards:", cards)
            this.setState({
                multi: obj.cards, 
                remaining: obj.remaining
            })
        });
    }

    shuffle = () => {
        const { deck_ID } = this.state;
        fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/shuffle/`)
            .then(response => { return response.json() })
            .then(obj => {
                console.log("shuffle:", obj)
                this.setState({
                    deck_ID: obj.deck_id
                })
            })
    }

    componentDidMount = () => {
        this.getCards();
    }

    render() {
        const {drawMulti, multi, num, remaining} = this.state;

        return (
            <div>
                <h2>Multiple</h2>
                <button onClick={this.getCards}>Draw Again</button>
                <p></p>
                <p>{remaining === 0 ? "Here are your remaing cards. No more cards left. Shuffle the deck or draw a new deck." : ""}</p>
                {multi.map( el => 
                <img src={el.image} />)}
                {/* <p>{num.toString()}</p> */}
            </div>
        )
    }
    
}

export default Multiple;