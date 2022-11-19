const CartWidget = (props) => {
    return (
        <button style={{backgroundColor: props.bgColor}}>
            X
            <img src={'./images/cart.svg'} alt='cart-widget'/>
        </button>
    )
};

export default CartWidget;