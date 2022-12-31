import { useContext } from "react"
import { AddedCartContext } from "../../context/CartContext"
import { collection, writeBatch, query, where, getDocs, documentId, addDoc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';

const Checkout = () => {

    const {addedCart, } = useContext(AddedCartContext);

    const handleCreateOrder = async () => {
        const orderObj = {
            buyer: {
                name: 'name',
                emali: 'mail@gmail.com',
                phone: '1234567890'
            },
            items: addedCart,
            //total: getTotal()
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


    return(
        <section>
            <h2>Ingrese sus datos:</h2>
            <button onClick={handleCreateOrder}>Confirmar orden</button>
        </section>
    )
}

export default Checkout