import { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.css';
import ItemsList from '../_ItemList/ItemList';
import Filter from '../_Filter/Filter';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig'

const ItemListContainer = ({ text }) => {
    
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {

        const collectionRef = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) : collection(db, 'items');
        
        getDocs(collectionRef)
            .then(response => {
                const adaptedItems = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data }
                })
                setItems(adaptedItems);
            })
            .catch(error => {
                console.log(error)
            })
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