import React from 'react';

const AllCards = ({ cards }) => {
    return (
        <div>
            <h2>All Cards</h2>
            {cards.map(el => 
                <img src={el.image} alt="card" />)}
        </div>
    )
}

export default AllCards;