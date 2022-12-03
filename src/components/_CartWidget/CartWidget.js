import styles from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <div className={`${styles.contReset} ${styles.contSize} ${styles.bgCont} ${styles.borderCont} ${styles.fontBlack}`}>
            <span>x</span>
            <img src={'./images/svg/cart.svg'} alt='cart-widget'/>
        </div>
    )
};

export default CartWidget;