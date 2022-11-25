// import styles from 'Items.module.css';

const Items = ({ items }) => {
    <div>
        <h3>{items.name}</h3>
        <h4>{items.price}</h4>
        <p>{items.description}</p>
    </div>
};

export default Items;