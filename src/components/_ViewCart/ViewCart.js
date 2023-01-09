import { useContext } from "react";
import { Link } from "react-router-dom";
import { AddedCartContext } from "../../context/CartContext";
import styles from "./ViewCart.module.css";

const ViewCart = () => {

    const { addedCart, getTotal, removeItem } = useContext(AddedCartContext);

    const totalPrice = getTotal()

    return(
        <div className={styles.viewCartContainer}>
            <h2>Mi Carrito:</h2>
            {
                addedCart.map(addCart => {
                    return(
                        <div className={styles.viewCartProduct}  key={addCart.id}>
                            <h2 className={styles.fontStyle}>{addCart.name}</h2>
                            <h3 className={styles.fontStyle}>Cantidad: {addCart.quantity}</h3>
                            <h3 className={styles.fontStyle}>Precio: ${addCart.price}</h3>
                            <h3 className={styles.fontStyle}>Subtotal: $ {addCart.price * addCart.quantity}</h3>
                            <button onClick={() => removeItem(addCart.id)} className={styles.button}>Eliminar</button>
                        </div>
                    )
            })}
            <h3 className={styles.fontStyles}>TOTAL:  $ {totalPrice}</h3>
            <Link to='formulario'><button className={styles.button}>Finalizar compra</button></Link>
        </div>
    )
};

export default ViewCart;