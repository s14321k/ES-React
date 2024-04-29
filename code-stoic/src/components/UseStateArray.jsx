import { useState } from "react";

export default function UseStateArray() {
  const [items, setItems] = useState([]); // Using array

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <h2>Use state using array</h2>
      <h3>We know setter function doesn't merge and update automatically</h3>
      <h3>
        In the case of the array, setter function doesn't append the item to the
        end of the list. We need to handle it using the spread operator
      </h3>
      <h4>
        Making a copy in spread operator and creating the new object. Referance
        in addItem method
      </h4>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
