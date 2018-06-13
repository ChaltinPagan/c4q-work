import React from 'react';

const AllCards = ({ cards, count, getCards, newDeck }) => {
    return (
        <div>
            <h2>All Cards</h2>
            <button onClick={newDeck}>Draw New Deck</button>{" "}
            <button onClick={getCards}>Get Cards</button>
            <p>{count === 52 ? "Click Get Cards." : 
                (count === 0 ? "If no more cards. Click Draw New Deck, then click Get Cards." : " ")}</p>
            {cards.map(el => 
                <img src={el.image} alt="card" />)}
        </div>
    )
}

export default AllCards;