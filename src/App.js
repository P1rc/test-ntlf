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
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: 'orange' }}>Counter: {count}</h1>
            <div>
                <button onClick={increment} style={buttonStyle}>+1</button>
                <button onClick={reset} style={buttonStyle}>Reset</button>
            </div>
        </div>
    );
}