import { useState, useEffect } from 'react';
import ItemsList from '../_ItemList/ItemList';
import styles from './ItemListContainer.module.css';
import { getItems} from '../../AsyncMock';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getItems()
            .then(response => {
                setItems(response)
        }).catch(error => {
            console.log(error)
        })
    }, []);
    return(
        <section>
            <h2 className={styles.fontBlack}>{greeting}</h2>
            <ItemsList items={items} />
        </section>
    );
};


export default ItemListContainer;