import React, { useState } from 'react';

const Dashboard =  (props) => {
    const name2 = "shubham";
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return(
        <div>
            <h3>Hello, {props.name}</h3>
            <h3>Hello, {name2}</h3>
            <h3>Count : {count}</h3>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>

        </div>
    )
}

export default Dashboard