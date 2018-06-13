import React from 'react';

const Schools = ({teachers}) => {
    return (
        <div>
            <h1>Teachers by School</h1>
            <select>
                {teachers.map(el =>
                <option>{el.schoolid}</option>)}
            </select>
        </div>
    )
}

export default Schools;