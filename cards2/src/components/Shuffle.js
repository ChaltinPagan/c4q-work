import React from 'react';

const Shuffle = ({onClick, shuffle, getCards, cards}) => {
    console.log("shuff cards:", cards)
    return (
        <div>
        <h2>Shuffle</h2>
        <button onClick={onClick}>Shuffle Deck</button>{" "}
        <button onClick={getCards}>Get Cards</button>
        {/* <p>{count === 52 ? "Your deck is shuffled." : ""}</p> */}
        <p>Click Shuffle, then click Get Cards.</p>
        {cards.map(el =>
        <img src={el.image} alt="card"/>)}
        </div>
    )
}

export default Shuffle;