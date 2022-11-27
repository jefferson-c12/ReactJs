import Items from "../_Items/Items";
import styles from './ItemList.module.css'

const ItemsList = ({ items }) => {
    return(
        <div className={`${styles.itemsList} ${styles.itemsListContainer}`}>
            { 
                items.map(item => (
                    <Items key={item.ID} item={item} />
                ))
            }
        </div>
    )
};

export default ItemsList;