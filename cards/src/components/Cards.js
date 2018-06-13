import React, {Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AllCards from './AllCards';
import Shuffle from './Shuffle';
import Single from './Single';
import Multiple from './Multiple';

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            deck_ID: "rf0xgpotupxf",
            cards: [],
            images: [], 
            single: []
        }
    }

    componentDidMount() {
        const { deck_ID } = this.state;
        fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=52`)
        .then(response => {
          console.log("response:", response);
          return response.json()})
        .then(obj => {
          console.log("obj:", obj);
        //   let cardsArr = obj.cards;
        //   let cards = cardsArr.map( el => {
        //       return ael.image;
        //   })
          console.log("cards:", obj)
          this.setState({
            cards: obj.cards
          })
        });
      }

      handleNewDeck() {
          fetch("https://deckofcardsapi.com/api/deck/new/")
          .then(response => {return response.json()})
          .then(obj =>
            this.setState({
                deck_ID: obj.deck_id
            })
        )
      }

      handleSingleCard = () => {
        const { deck_ID, single, cards } = this.state;
        // fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=1`)
        // .then(response => {return response.json()})
        // .then(obj => {
            
        //     console.log("single:", obj.cards.image)
        //     this.setState({
        //       single: [...single, obj.cards.image]
        //     })
        //   });
        const random = Math.floor(Math.random * cards.length);
        const add = cards[random];
        console.log("random:", random)
        this.setState({
            single: [...single, add]
        })
      }

      handleShuffle = () => {
        const { deck_ID } = this.state;
          fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/shuffle/`)
      }

      renderAllCards = () => {
          const { cards } = this.state;
          return (
            <AllCards 
            cards={cards}/>
          )
      }

      renderSingle = () => {
        const {single} = this.state;
        return (
            <Single 
            onClick={this.handleSingleCard}
            single={single}/>
        )
    }

    renderShuffle = () => {
        return (
            <Shuffle 
            onClick={this.handleShuffle} />
        )
    }

    render() {
        return (
            <div>

                <button onClick={this.handleNewDeck}>Draw New Deck</button>

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