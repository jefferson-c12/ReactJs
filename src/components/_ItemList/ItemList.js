import Items from "../_Items/Items";
import styles from './ItemList.module.css'

const ItemsList = ({ items }) => {
    <article className={styles.itemList}>
        { 
            items.map(items => (
                <Items key={items.ID} items={items} />
            ))
        }
    </article>
};

export default ItemsList;