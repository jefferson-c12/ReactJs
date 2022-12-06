import { useState } from "react";

const Counter = ({ initial }) => {

    const [count, setCount] = useState(initial);

    const decrease = () => {
        for(var i = 0; i < 1; i++){
            setCount(prevValue => prevValue - 1)
        }
    }

    const reset = () => {
        setCount(initial)
    };

    const increment = () => {
        for(var i = 0; i < 1; i++){
            setCount(prevValue => prevValue + 1)
        }
    };

    return(
        <div>
            <h5>{count}</h5>
            <button onClick={() => decrease()}>-</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => increment()}>+</button>
        </div>
    )
};

export default Counter;