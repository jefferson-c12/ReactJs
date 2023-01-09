import { useState, createContext } from "react";

export const AddedCartContext = createContext({cart: []});

export const CartProvider = ({ children }) => {

    const [addedCart, setAddedCart] = useState([]);

    const addCart = (itemToAdd) => {
        if(!isAdded(itemToAdd.id)) {
            setAddedCart([...addedCart, itemToAdd])
        }
    };

    const isAdded = (id) => {
    return addedCart.some(added => added.id === id)
    };

    const removeItem = (id) => {
        const updatedAddedProd = addedCart.filter(added => added.id !== id);
        setAddedCart(updatedAddedProd);
    };

    const getQuantity = () => {
        let acc = 0;
        addedCart.forEach(items => {
            acc += items.quantity;
        })
        return acc;
    }

    const getTotal = () => {
        let acc = 0;
        addedCart.forEach(items => {
            acc += items.quantity * items.price
        })
        return acc;
    }

    return(
        <AddedCartContext.Provider value={{ addedCart, addCart, removeItem, isAdded, getQuantity, getTotal }}>
            { children }
        </AddedCartContext.Provider>
    )
}