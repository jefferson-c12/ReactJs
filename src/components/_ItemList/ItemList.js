import styles from './ItemList.module.css';
import Items from '../_Items/Items';

const ItemsList = ({ items }) => {
    return(
        <div className={`${styles.itemsList} ${styles.itemsListContainer}`}>
            { 
                items.map(item => (
                    <Items key={item.id} item={item}/>
                )) 
            }
        </div>
    )
};

export default ItemsList;