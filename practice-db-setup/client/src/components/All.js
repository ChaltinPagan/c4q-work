import React from 'react';

const All = ({teachers}) => {
    return (
        <div>
            <h1>All Teachers</h1>
            <ul>
                {teachers.map(el =>
                <li>{el.teacher}, subject:{" "}{el.subject}, school:{" "}{el.school}</li>)}
            </ul>
        </div>
    )
}

export default All;