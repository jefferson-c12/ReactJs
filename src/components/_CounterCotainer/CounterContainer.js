import Counter from "../_Counter/Counter";
import styles from './CounterContainer.module.css'

const CounterContainer = ({ stock }) => {

    const handleOnAdd = (quantity) => () =>{
        console.log(`Se agregaron ${quantity} productos al carrito`);
    };

    return(
        <div className={styles.counterContainer}>
            <Counter initial={0} stocks={stock} onAdd={handleOnAdd} />
        </div>
    )
};

export default CounterContainer;