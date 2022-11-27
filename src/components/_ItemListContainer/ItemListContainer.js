import { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.css';
import { getItems } from '../../AsyncMock';
import ItemsList from '../_ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        getItems()
            .then(response => {
                setItems(response)
        }).catch(error => {
            console.log(error)
        })
    }, []);
    return(
        <section className={`${styles.bgItemsListContainer} ${styles.itemsListContainer}`}>
            <h2 className={styles.fontBlack}>{greeting}</h2>
            <ItemsList items={items} />
        </section>
    );
};


export default ItemListContainer;