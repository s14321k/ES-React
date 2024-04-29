import { useState } from "react";

// https://youtu.be/-3lL8oyev9w?si=ChcFAUcPtaxE1PE6
// https://youtu.be/2bCqpPDRq3s?si=KMIwBezfVkU8Yr2X

export default function UseStateObject() {
  const [name, setName] = useState({ firstname: "", lastName: "" });
  const [namee, setNamee] = useState({ firstname: "", lastName: "" });
  const [nameee, setNameee] = useState({ firstname: "", lastName: "" });

  function handleInput(e) {
    console.log("check the input -> target -> value ... " + e);
    console.log(
      "input wont reflect in view ... uncomment the bellow line ::::   " +
        e.target.value
    );
    // setNameee(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form>
        <h2>Writing function vs arrow function inside tag and change events</h2>
        <input
          // onChange={function inputCheck(e) {
          //     return handleInput(e);
          // }}
          onChange={(e) => handleInput(e)}
          // onChange={(e) => setNameee(e.target.value)}
          type="text"
          value={nameee}
        />
        <h2>Use State using object</h2>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ lastName: e.target.value })}
        />
        <h3>Your first name is - {name.firstname}</h3>
        <h3>Your last name is - {name.lastName}</h3>
        <h3>{JSON.stringify(name)}</h3>
        <br />

        <h3>This add button will refresh the page on submit</h3>
        <button>Add</button>
      </form>
      <form>
        <h3>
          States does not automatically merge the changes. We need to do it
          manually.
          <br /> Check the bellow
        </h3>
        <input
          type="text"
          value={namee.firstname}
          onChange={(e) => setNamee({ ...namee, firstname: e.target.value })}
          // Spread operator is used '...name'
          // Taking a copy of input
        />
        <input
          type="text"
          value={namee.lastName}
          onChange={(e) => setNamee({ ...namee, lastName: e.target.value })}
          // Spread operator is used '...name'
          // Taking a copy of input
        />
        <h3>Your first name is - {namee.firstname}</h3>
        <h3>Your last name is - {namee.lastName}</h3>
        <h3>{JSON.stringify(namee)}</h3>
        <br />

        <h3>
          This add button will not refresh the page on submit by using
          preventDefault() method
        </h3>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </>
  );
}
