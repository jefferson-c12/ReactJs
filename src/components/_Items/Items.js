// import styles from 'Items.module.css';

const Items = ({ item }) => {
    <div>
        <h3>{item.name}</h3>
        <h4>{item.price}</h4>
        <p>{item.description}</p>
    </div>
};

export default Items;