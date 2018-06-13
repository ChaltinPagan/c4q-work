import React from 'react';

const Search = ({onChange, onClick, teachers, search, submitSearch}) => {
    let arr = [...teachers];
    let list = arr.filter(el => {
        if (el.name.toLowerCase().match(/submitSearch/)) {
            return el.name;
        }
    })
    return (
        <div>
            <h1>Search Teachers</h1>
            <input onChange={onChange} type='search' />
            <button onClick={onClick}>submit</button>
            <p>{submitSearch}</p>
            <ul>
                {list.map(el => {
                    <li>{el}</li>
                })}
            </ul>
        </div>
    )
}

export default Search;