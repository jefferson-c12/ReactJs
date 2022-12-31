import styles from './Items.module.css';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {

    return(
        <article className={`${styles.itemContainer} ${styles.itemBorder} ${styles.bgItemContainer}`}>   
            <img className={styles.imgSize} src={item.picture} alt={item.name} />
            <h3 className={styles.fsName}>{item.name}</h3>
            <h4 className={styles.fsPrice}>{`$ ${item.price}`}</h4>
            <Link to={`/detalles/${item.id}`}><button className={styles.buttonBuy}>Ver producto</button></Link>
        </article>
    )
};

export default Items;
