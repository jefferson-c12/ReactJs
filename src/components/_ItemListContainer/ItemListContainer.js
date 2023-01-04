import { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.css';
import ItemsList from '../_ItemList/ItemList';
import Filter from '../_Filter/Filter';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';

const ItemListContainer = ({ text }) => {
    
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    const [ loading, setLoading ] = useState(true)

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
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]);

    if (loading) {
        return <Spinner color="secondary" className={styles.loading}/>
    } else {
        return(
        <section className={`${styles.bgItemsListContainer} ${styles.itemsListContainer}`}>
            <h2 className={styles.fontBlack}>{text}</h2>
            <Filter />
            <ItemsList items={items} />
        </section>
    )
    }
};


export default ItemListContainer;