import styles from './CartWidget.module.css'
import { useContext } from 'react';
import { AddedCartContext } from '../../context/CartContext';

const CartWidget = () => {
    
    const { getQuantity } = useContext(AddedCartContext);
    const totalQuantity = getQuantity();
    return (
        <div className={styles.count}>
            <span>{ totalQuantity }</span>
            <img src='../../images/svg/cart.svg' alt='cart-widget'/>
        </div>
    )
};

export default CartWidget;