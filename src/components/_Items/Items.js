import styles from './Items.module.css';

const Items = ({ item }) => {
    return(
        <article className={`${styles.itemContainer} ${styles.itemBorder}`}>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <p>{item.description}</p>
        </article>
    )
};

export default Items;