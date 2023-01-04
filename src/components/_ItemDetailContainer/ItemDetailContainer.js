import CounterContainer from "../_CounterCotainer/CounterContainer";
import styles from './ItemDetailContainer.module.css';
import { useEffect, useState } from "react";
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase/firebaseConfig";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const docRef = doc(db, 'items', itemId)
        getDoc(docRef)
            .then(doc => {
                const data = doc.data();
                const adaptedItem = {id: doc.id, ...data};
                setItem(adaptedItem);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId]);

    if (loading) {
        return <Spinner color="secondary" className={styles.loading}/>
    } else {
        return (
        <section id={styles.container} className={styles.itemDetailContainer}>
            <img id={styles.png} src={item.picture} alt={item.name}/>
            <h4 id={styles.title}>{item.name}</h4>
            <p id={styles.desc} >{item.description}</p>
            <CounterContainer stock={item.stock} items={item} id={item.id} price={item.price} name={item.name} />
        </section>
    )
    }
};

export default ItemDetailContainer;

