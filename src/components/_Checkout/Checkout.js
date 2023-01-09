import { useContext, useState } from "react"
import { AddedCartContext } from "../../context/CartContext"
import { collection, writeBatch, query, where, getDocs, documentId, addDoc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';
import styles from './Checkout.module.css';

const Checkout = () => {

    const { addedCart, getTotal } = useContext(AddedCartContext);

    const handleCreateOrder = async () => {
        const orderObj = {
            buyer: {
                name: userName,
                emali: userMail,
                phone: userPhone
            },
            items: addedCart,
            total: getTotal()
        }

        const batch = writeBatch(db);
        const ids = addedCart.map(addCart => addCart.id);
        const orderRef = query(collection(db, 'orders'), where(documentId(), 'in', ids));
        const itemsAddedtoCartFromFirestore = await getDocs(orderRef);
        const { docs } = itemsAddedtoCartFromFirestore;

        const outOfStock = [];

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;
            const addedToCart = addedCart.find(added => added.id === doc.id);
            const orderQuantity = addedToCart?.quantity
            if(stockDb >= orderQuantity) {
                batch.update(doc.ref, {stock: stockDb - orderQuantity})
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })
        if(outOfStock.length === 0) {
            await batch.commit()
            const orderRef = collection(db, 'orders');
            const orderAdded = await addDoc(orderRef, orderObj)
            console.log(orderAdded.id);
        } else {
            console.log('Hay productos fuera de stock');
        }
    }

    const [ userName, setUserName ] = useState("");
    const [ userMail, setUserMail ] = useState("");
    const [ userPhone, setUserPhone ] = useState("");
    

    return(
        <section className={styles.section}>
            <h2>Ingrese sus datos:</h2>
            <form className={styles.formContainer} onSubmit={ e => {e.preventDefault();}}>
                <input className={styles.inputForm} name='userName' autoComplete="off" placeholder="Nombre y apellido" onChange={ e => { setUserName(e.target.value) } } value={userName}></input>
                <input className={styles.inputForm} name='userMail' autoComplete="off" placeholder="email@gmail.com" onChange={ e => { setUserMail(e.target.value) } } value={userMail}></input>
                <input className={styles.inputForm} name='userPhone' autoComplete="off" placeholder="Nº de telefono" onChange={ e => { setUserPhone(e.target.value) } } value={userPhone}></input>
                <button className={styles.button} type="submit" onClick={handleCreateOrder}>Confirmar orden</button>
            </form>
        </section>
    )
}

export default Checkout
