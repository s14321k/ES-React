import Fruit from "./Fruit";

function FruitsObject() {
    const fruitsObj = [
        {name : "Apple", price : 10, emoji : ":-)", sold : true},
        {name : "Mango", price : 9, emoji : ":-)", sold : false},
        {name : "Orange", price : 8, emoji : ":-)", sold : true}
    ];
    return (
        <div>
            <h2>Fruits Objects are iterated and listed</h2>
            <ul>
                <div>iterating inside the object</div>
                {fruitsObj.map((fruit) => (
                    <li key={fruit.name}>
                        {" "}
                        {fruit.name} {fruit.emoji} ${fruit.price} 
                    </li> 
                ))}
                <h3>Iterating inside the fruit component</h3>
                {fruitsObj.map((fruit) => (
                    <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} sold={fruit.sold} />
                ))}
            </ul>
            <div>---------------------------------------------------------</div>
        </div>
    )
}

export default FruitsObject