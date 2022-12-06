import styles from './Items.module.css';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {
    return(
        <article className={`${styles.itemContainer} ${styles.itemBorder} ${styles.bgItemContainer}`}>   
            <img className={styles.imgSize} src={item.picture} alt={item.name} />
            <h3 className={styles.fsName}>{item.name}</h3>
            <p className={styles.fsDesc}>{item.description}</p>
            <h4 className={styles.fsPrice}>{item.price}</h4>
            <Link className={`${styles.buttonBuy}`} to={`/detalles/${item.id}`}>Comprar</Link>
        </article>
    )
};

export default Items;
