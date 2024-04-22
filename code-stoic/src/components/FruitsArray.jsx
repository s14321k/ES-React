export default function Fruits() {
    const fruits = ["Apple", "Mango", "Guvava", "Orange"];
    fruits.map(fruit => console.log(fruit));
    return <div>
               <div>{fruits.map(fruit => <li key={fruit}> {fruit}</li>)}</div>
               <div>----------------------------------------------------</div>
            </div>;
}