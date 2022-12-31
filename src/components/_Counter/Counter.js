import { useContext, useState } from "react";
import styles from './Counter.module.css'
import { AddedCartContext } from "../../context/CartContext";

const Counter = ({ initial, stocks, onAdd, id }) => {

    const [count, setCount] = useState(initial);
    
    const { isAdded } = useContext(AddedCartContext);

    //const isInCart = isAdded(item.id);

    const decrease = () => {
        for(var i = 0; i < 1; i++){
            if(count > initial){
                setCount(prevValue => prevValue - 1)
            }
        }
    };

    const increment = () => {
        for(var i = 0; i < 1; i++){
            if(count < stocks){
                setCount(prevValue => prevValue + 1)
            }
        }
    };

    return(
        <div className={styles.counter}>
            <button className={styles.quitButton} onClick={() => decrease()} disabled={!count}>-</button>
            <h5 className={styles.count}>{count}</h5>
            <button className={styles.addButton} onClick={() => increment()} disabled={count === stocks}>+</button>
            {
                isAdded(id) 
                ? <button className={styles.addCartButton}>Terminar compra</button>
                : stocks > 0 
                    ? <button className={styles.addCartButton} onClick={() => onAdd(count )} disabled={!count}>Agregar al carrito</button>
                    : <div>No hay stock disponible</div>
            }
            
        </div>
    )
};

export default Counter;