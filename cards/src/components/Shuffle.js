import React from 'react';

const Shuffle = ({onClick}) => {
    return (
        <div>
        <h2>Shuffle</h2>

        
        <button onClick={onClick}>Shuffle Current Deck</button>
        </div>
    )
}

export default Shuffle;