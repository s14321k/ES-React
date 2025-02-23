import "./App.css"
import {useState} from "react";

export default function App() {

    const[count, setCount] = useState(0);

    const addToCount = () => {
        if(count < 10)
        {
            setCount(count + 1);
        }
    }

    const subToCount = () => {
        if(count < 10)
        {
            setCount(count - 1);
        }
    }

    return (
        <>
            <h4>Current count is..</h4>
            <h1>{count}</h1>
            <button onClick={subToCount}>-</button>
            <button onClick={addToCount}>+</button>
        </>
    )
}

// export default App;