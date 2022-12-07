import { useState } from "react";
import styles from './Counter.module.css'

const Counter = ({ initial, stocks, onAdd }) => {

    const [count, setCount] = useState(initial);

    const decrease = () => {
        for(var i = 0; i < 1; i++){
            if(count > initial){
                setCount(prevValue => prevValue - 1)
            }
        }
    };
    
    /*const reset = () => {
        setCount(initial)
    };*/

    const increment = () => {
        for(var i = 0; i < 1; i++){
            if(count < stocks){
                setCount(prevValue => prevValue + 1)
            }
        }
    };

    return(
        <>
            <div className={styles.counter}>
                <button className={styles.quitButton} onClick={() => decrease()}>-</button>
                <h5 className={styles.count}>{count}</h5>
                <button className={styles.addButton} onClick={() => increment()}>+</button>
            </div>
            <button className={styles.addCartButton} onClick={() => onAdd(count)} disabled={!count}>Agregar al carrito</button>
        </>
    )
};

export default Counter;