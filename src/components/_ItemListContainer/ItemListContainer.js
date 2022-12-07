import { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.css';
import ItemsList from '../_ItemList/ItemList';
import { getItems } from '../../AsyncMock';
import Filter from '../_Filter/Filter';

const ItemListContainer = ({ text }) => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(response => {
            setItems(response)
        }).catch(error => {
            console.log(error)
        });
    }, []);

    return(
        <section className={`${styles.bgItemsListContainer} ${styles.itemsListContainer}`}>
            <h2 className={styles.fontBlack}>{text}</h2>
            <Filter />
            <ItemsList items={items} />
        </section>
    );
};


export default ItemListContainer;