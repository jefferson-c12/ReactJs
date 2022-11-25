import styles from './buttons.module.css';

const ButtonNav = ({text}) => {
    return <button className={`${styles.bgButton} ${styles.buttonReset} ${styles.buttonSize} ${styles.borderButton} ${styles.fontBlack}`}>{text}</button>
};

export default ButtonNav;

