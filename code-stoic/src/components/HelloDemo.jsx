const name = "variable insert";

function HelloDemo() {
    return (<>
        <h1>Hello from hello component! {name}</h1>
        <h2>We can write java script expressions as well {20 + 30} </h2>.
        <h2>We can return function as well {displayMessage()}</h2>
        <h2>To display multiple elements, </h2>
        <h2>we should wrap the elements inside a parent tag like div or fragment component like empty tag</h2>
        <div>-----------------------------------------------------------------------</div>
    </>)
}

function displayMessage() {
    return "method displayMessage !";
}



export default HelloDemo