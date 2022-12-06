import CounterContainer from "../_CounterCotainer/CounterContainer";
import { useEffect, useState } from "react";
import { getItemById } from "../../AsyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();
    console.log(item);

    useEffect(() => {
        getItemById(itemId)
            .then(response => {
                setItem(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [itemId]);

    return (
        <section>
            <img src={item.picture} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <CounterContainer />
        </section>
    )
};

export default ItemDetailContainer;

