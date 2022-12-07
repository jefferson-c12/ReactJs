import CounterContainer from "../_CounterCotainer/CounterContainer";
import styles from './ItemDetailContainer.module.css';
import { useEffect, useState } from "react";
import { getItemById } from "../../AsyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        getItemById(itemId)
            .then(response => {
                setItem(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [itemId]);

    return (
        <section id={styles.container} className={styles.itemDetailContainer}>
            <img id={styles.png} src={item.picture} alt={item.name}/>
            <h4 id={styles.title}>{item.name}</h4>
            <p id={styles.desc} >{item.description}</p>
            <CounterContainer stock={item.stock} />
        </section>
    )
};

export default ItemDetailContainer;

