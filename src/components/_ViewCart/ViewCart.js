import { useContext } from "react";
import { Link } from "react-router-dom";
import { AddedCartContext } from "../../context/CartContext";
import styles from "./ViewCart.module.css";

const ViewCart = () => {

    const { addedCart, getTotal } = useContext(AddedCartContext);

    const totalPrice = getTotal()

    return(
        <div className={styles.viewCartContainer}>
            <h2>Mi Carrito:</h2>
            {
                addedCart.map(addCart => {
                    return(
                        <div className={styles.viewCartProduct}  key={addCart.id}>
                            <h2 className={styles.fontStyles}>{addCart.name}</h2>
                            <h3 className={styles.fontStyles}>Cantidad: {addCart.quantity}</h3>
                            <p className={styles.fontStyles}>{addCart.price}</p>
                            <h3 className={styles.fontStyles}>Subtotal: $ {addCart.price * addCart.quantity}</h3>
                        </div>
                    )
            })}
            <h3 className={styles.fontStyles}>TOTAL:  $ {totalPrice}</h3>
            <Link to='formulario'><button>Finalizar compra</button></Link>
        </div>
    )
};

export default ViewCart;