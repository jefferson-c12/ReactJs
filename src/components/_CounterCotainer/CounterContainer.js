import Counter from "../_Counter/Counter";

const CounterContainer = ({ greeting }) => {
    return(
        <div>
            <h4>{greeting}</h4>
            <Counter initial={0} />
        </div>
    )
};

export default CounterContainer;