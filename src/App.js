import React, { useState } from 'react';

const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer'
};

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: 'cyan' }}>Counter: {count}</h1>
            <div>
                <button onClick={increment} style={buttonStyle}>+1</button>
            </div>
        </div>
    );
}