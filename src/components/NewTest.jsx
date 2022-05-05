import React, { useState } from 'react';

const NewTest = () => {
    const [text, setText] = useState ("Введите текст")

    return (
        <div>
            <h1>{text}</h1>
            <input 
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}/> 
        </div>
    );
};

export default NewTest;