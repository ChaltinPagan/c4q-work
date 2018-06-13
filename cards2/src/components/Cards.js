import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import AllCards from './AllCards';
import Shuffle from './Shuffle';
import Single from './Single';
import Multiple from './Multiple';

//old deck: rf0xgpotupxf
//new deck: fytf7zczg89m

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            deck_ID: "rymlbd5ybpyg",
            cards: [],
            single: [],
            multi: "",
            count: 52,
            shuffle: null
        }
    }

    handleAllCards = () => {
        const { deck_ID, cards, count } = this.state;
        fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=${count}`)
            .then(response => {
                console.log("response:", response);
                return response.json()
            })
            .then(obj => {
                console.log("obj:", obj);
                let cardsArr = obj.cards;
                console.log("cards:", cards)
                this.setState({
                    cards: obj.cards, 
                    count: obj.remaining
                })
            });
    }


    handleNewDeck = () => {
        const { deck_ID, cards, count } = this.state;
        fetch("https://deckofcardsapi.com/api/deck/new/")
            .then(response => { return response.json() })
            .then(obj => {
                console.log("new:", obj)
                this.setState({
                    deck_ID: obj.deck_id,
                    count: obj.remaining
                })
            })
    }

    handleSingleCard = () => {
        const { deck_ID, cards, single, count } = this.state;
        //const drawOne = cards.pop()
        //console.log("one:", drawOne.image)
        
        this.setState({
            single: [...single].push(cards.pop()),
            count: count - 1
        })
    }

    handleShuffle = () => {
        const { deck_ID, shuffle } = this.state;
        fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/shuffle/`)
            .then(response => { return response.json() })
            .then(obj => {
                console.log("shuffle:", obj)
                this.setState({
                    count: obj.remaining,
                    shuffle: true
                })
            })
    }


    componentDidMount = () => {
        this.handleShuffle();
        //this.handleNewDeck();
        // axios.all(this.handleShuffle(), this.handleAllCards())
        // .then(axios.spread( function (shuffle, all) {
        //         console.log("Shuffle:", shuffle)
        //         console.log("All:", all)
        // }))
    }

    renderAllCards = () => {
        const { cards, count } = this.state;
        return (
            <AllCards
                cards={cards}
                count={count}
                getCards={this.handleAllCards}
                newDeck={this.handleNewDeck} />
        )
    }

    renderSingle = () => {
        const { single, cards, count, deck_ID } = this.state;
        return (
            <Single
                onClick={this.handleSingleCard}
                cards={cards} 
                count={count}
                deck_ID={deck_ID} />
        )
    }

    renderShuffle = () => {
        const {shuffle, count, cards} = this.state;
        return (
            <Shuffle
                onClick={this.handleShuffle} 
                shuffle={shuffle} 
                cards={cards} 
                getCards={this.handleAllCards}/>
        )
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/cards" render={this.renderAllCards} />
                    <Route path="/cards/draw" render={this.renderSingle} />
                    <Route path="/cards/shuffle" render={this.renderShuffle} />
                </Switch>
            </div>
        )
    }

}

export default Cards;