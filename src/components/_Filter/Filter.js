import styles from './Filter.module.css'
import { Link } from 'react-router-dom';

const Filter = () => {
    return(
        <section className={styles.filterContainer}>
            <Link to='/productos/categoria/marvel'><img className={styles.logo} src='./images/svg/marvelLogo.svg' alt='Marvel'/></Link>
            <Link to='/productos/categoria/dc'><img className={styles.logo} src='./images/svg/DCComicsLogo.svg' alt='DC-Comics'/></Link>
        </section>
    )
};

export default Filter;