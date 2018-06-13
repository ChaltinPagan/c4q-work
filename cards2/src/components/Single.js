import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Multiple from './Multiple';

class Single extends Component {
    constructor(props){
        super(props);
        this.state = {
            single: [],
            onClick: this.props.onClick,
            cards: this.props.cards,
            multi: [],
            count: this.props.count, 
            deck_ID: this.props.deck_ID
        }
    }
    
    handleSingleCard = () => {
        const { cards, single, count } = this.state;
        const drawOne = cards.pop()
        //console.log("one:", drawOne.image)
        if (cards.length === 0) {
            this.setState({
                single: ["No cards left. Shuffle current deck or Draw a new deck."]
            })
        } else {
            this.setState({
                single: [...single, drawOne.image]
            })

        }
    }

    renderSingle = () => {
        const {single, onClick} = this.state;
        //console.log("sing click:", onClick)
        return (
            <div>
                <h2>Single</h2>
                <button onClick={this.handleSingleCard}>Draw a Card</button>
                <p></p>
                {single.map(el => 
                <img src={el} alt={el} />)}
                <p></p>
                {/* <img src={single} /> */}
            </div>
        )
    }

    renderMultiDraw = (props) => {
        const {cards, multi, deck_ID} = this.state;
        const num = props.match.params.num;
        //const drawMulti = cards.slice(0, Number(num));
        //console.log("multi:", drawMulti)
        

        // fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=${num}`)
        // .then(response => {
        //     console.log("response:", response);
        //     return response.json()
        // })
        // .then(obj => {
        //     console.log("obj:", obj);
        //     // let cardsArr = obj.cards;
        //     // console.log("cards:", cards)
        //     this.setState({
        //         multi: obj.cards
        //     })
        // });

        return (
            <Multiple 
            drawMulti={multi} 
            num={num}
            cards={cards}
            deck_ID={deck_ID} />
        )
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/cards/draw" render={this.renderSingle} />
                    <Route path="/cards/draw/:num" render={this.renderMultiDraw} />
                </Switch>
            </div>
        )
    }
    
}

export default Single;