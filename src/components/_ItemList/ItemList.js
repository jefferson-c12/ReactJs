import Items from "../_Items/Items";
import styles from './ItemList.module.css'

const ItemsList = ({ items }) => {
    <article className={styles.itemList}>
        { 
            items.map(item => (
                <Items key={item.ID} item={item} />
            ))
        }
    </article>
};

export default ItemsList;