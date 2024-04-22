import Fruit from "./Fruit";

function FruitsObject() {
    const fruitsObj = [
        {name : "Apple", price : 10, emoji : ":-)"},
        {name : "Mango", price : 9, emoji : ":-)"},
        {name : "Orange", price : 8, emoji : ":-)"}
    ];
    return (
        <div>
            <div>Fruits Objects are iterated and listed</div>
            <ul>
                <div>iterating inside the object</div>
                {fruitsObj.map((fruit) => (
                    <li key={fruit.name}>
                        {" "}
                        {fruit.name} {fruit.emoji} ${fruit.price} 
                    </li> 
                ))}
                <div>Iterating inside the fruit component</div>
                {fruitsObj.map((fruit) => (
                    <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
                ))}
            </ul>
            <div>---------------------------------------------------------</div>
        </div>
    )
}

export default FruitsObject