import styles from './CartWidget.module.css'
const CartWidget = (props) => {
    return (
        <button className={`${styles.contReset} ${styles.contSize} ${styles.bgCont} ${styles.borderCont} ${styles.fontBlack}`}>
            X
            <img src={'./images/cart.svg'} alt='cart-widget'/>
        </button>
    )
};

export default CartWidget;