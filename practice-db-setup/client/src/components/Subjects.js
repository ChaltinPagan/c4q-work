import React from 'react';

const Subjects = ({list, onChange, subj}) => {
    let names = [...list];
    let sort = names.filter( el => {
        let arr = [];
        if (el.subject = subj) {
            arr.push(el.name);
        }
        return arr;
    })
    console.log("sort:",sort);
    console.log("subj:", subj);
    let subjects = ["", "Biology", "Art", "History", "Math"]
    return (
        <div>
            <h1>Teachers by Subject</h1>
            <select onChange={onChange}>
                {subjects.map(el =>
                <option value={el}>{el}</option>)}
            </select>
            <ul>
                {sort.map(el => 
                <li>{el.name}</li>)}
            </ul>
        </div>
    )
}

export default Subjects;