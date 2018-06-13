import React from 'react';

const Single = ( {onClick, single} ) => {
    //console.log("single:", single);
    //const random = cards[Math.floor(Math.random * cards.length)];
    return (
        <div>
            <h2>Single</h2>
            <button onClick={onClick}>Draw a Card</button>
            {single.map(el => 
            <img src={el.image} alt="card" />)}
        </div>
    )
}

export default Single;