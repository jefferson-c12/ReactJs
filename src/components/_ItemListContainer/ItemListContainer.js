import { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.css';
import ItemsList from '../_ItemList/ItemList';
import { getItems, getItemsByCategory } from '../../AsyncMock';
import Filter from '../_Filter/Filter';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ text }) => {
    
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId);

    useEffect(() => {
        if(!categoryId) {
            getItems().then(response => {
                setItems(response)
            }).catch(error => {
                console.log(error)
            })
        }else{
            getItemsByCategory(categoryId).then(response => {
                setItems(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [categoryId]);

    return(
        <section className={`${styles.bgItemsListContainer} ${styles.itemsListContainer}`}>
            <h2 className={styles.fontBlack}>{text}</h2>
            <Filter />
            <ItemsList items={items} />
        </section>
    );
};


export default ItemListContainer;