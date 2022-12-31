import Counter from "../_Counter/Counter";
import styles from './CounterContainer.module.css'
import { AddedCartContext } from "../../context/CartContext";
import { useContext } from "react";

const CounterContainer = ({ stock, items, id, price, name }) => {

    const { addCart } = useContext(AddedCartContext);

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
        addCart({ id, name, price, quantity })
    };

    return(
        <div className={styles.counterContainer}>
            <Counter initial={0} stocks={stock} item={items} onAdd={handleOnAdd} />
        </div>
    )
};

export default CounterContainer;