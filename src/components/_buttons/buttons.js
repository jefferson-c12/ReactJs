const Button = (props) => {
    return <button style={{color: props.colorText, backgroundColor: props.bgColor}}>{props.text}</button>
};

export default Button;