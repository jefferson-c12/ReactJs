import styles from './Filter.module.css'

const Filter = () => {
    return(
        <section className={styles.filterContainer}>
            <img className={styles.logo} src='./images/svg/marvelLogo.svg' alt='Marvel'/>
            <img className={styles.logo} src='./images/svg/DCComicsLogo.svg' alt='DC-Comics'/>
        </section>
    )
};

export default Filter;