import React, {useState} from "react";

const Counter = () => {
    const [value, setValue] = React.useState(0);
    const [secondValue , setSecondValue] = useState(0);
    return (
        <div>
            <p>Counter : {value}</p>
            <button onClick={ () => setValue(value +1 )}>+1</button>
            <p>Counter 2 : {secondValue}</p>
            <button onClick={ () => setSecondValue(secondValue +1 )}>+1</button>
        </div>
    )
}
export default Counter;