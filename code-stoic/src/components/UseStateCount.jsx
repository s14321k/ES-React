import { useState } from "react";

export default function UseStateCount() {
  // useState are immutabe.
  // Implimented on top of all the functions.
  // We can pass any type of variables like, string, array, object.

  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(1);

  function handleClick() {
    console.log("button clicked");
  }

  // function increment() {
  //     setCount(count + 1);
  // }
  // function decrement() {
  //     setCount(count - 1);
  // }
  const increment = () => {
    setCount(count + counts);
  };
  const decrement = () => {
    setCount(count - counts);
  };

  const incrementByFive = () => {
    for (var i = 0; i < 5; i++) {
      // Second form of setCount function. Accessing the old value and increamenting that.
      setCount((previousCount) => previousCount + 1);
    }
  };

  const incrementBy = () => {
    setCounts(counts + 1);
  };
  const decrementBy = () => {
    setCounts(counts - 1);
  };

  return (
    <>
      <h1>
        Event Handler onClick in react(jsx attribute) where is onclick in js
      </h1>
      <button onClick={handleClick}> Click here to get the message! </button>
      <br />
      <br />
      <br />
      <br />

      <h3> Count value is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Type 1</button>
      <button onClick={() => setCount(count - 1)}>Decrement Type 1</button>
      <br />

      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment Type 2
      </button>
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>
        Decrement Type 2
      </button>
      <br />

      <button onClick={increment}>Increment Type 3</button>
      <button onClick={decrement}>Decrement Type 3</button>
      <h3>Second form of setCount function is used in IncrementByFive</h3>
      <button onClick={incrementByFive}>IncrementByFive</button>
      <br />

      <h3> Counts 2nd value is: {counts}</h3>
      <button onClick={incrementBy}>Increment with 2nd state</button>
      <button onClick={decrementBy}>Decrement with 2nd state</button>
      <div>-------------------------------------------------</div>
      <br />
      <br />
    </>
  );
}
