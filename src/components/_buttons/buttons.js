import styles from './buttons.module.css';
import CartWidget from '../_CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const ButtonsNav = () => {
    return (
    <div className={styles.buttonContainer}>
        <Link to='/' className={`${styles.bgButton} ${styles.buttonReset} ${styles.buttonSize} ${styles.borderButton}`}>Inicio</Link>
        <Link to='productos' className={`${styles.bgButton} ${styles.buttonReset} ${styles.buttonSize} ${styles.borderButton}`}>Productos</Link>
        <Link to='nosotros' className={`${styles.bgButton} ${styles.buttonReset} ${styles.buttonSize} ${styles.borderButton}`}>About Us</Link>
        <Link to='micarrito'><CartWidget /></Link>
    </div>    
    )
};

export default ButtonsNav;

