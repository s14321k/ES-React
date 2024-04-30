import { useEffect, useState } from "react";
import style from "./css/foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "d40e99ae412f4ea2b412f6b5e1144ce7";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]); // When ever foodId changes, the use effect will call the fetchFood function

  return (
    <>
      <div className={style.recipeCard}>
        <h1 className={style.recipeName}>{food.title}</h1>
        <img className={style.recipeImage} src={food.image} alt="" />

        <div className={style.recipeDetails}>
          <span>
            {" "}
            <strong>{food.readyInMinutes} Minutes</strong>{" "}
          </span>
          <span>
            {" "}
            👨‍👩‍👧<strong>Serves {food.servings} </strong>
          </span>
          <span>
            {" "}
            <strong>
              {" "}
              {food.vegitarian ? "Vegitarian 🥕" : "Non-Vegitarian 🍗"}
            </strong>
          </span>
          <span>
            {" "}
            <strong> {food.vegan ? "🐄 Vegan" : "🤠 Non Vegan"} </strong>
          </span>
        </div>

        <div>
          💲 <span>{food.pricePerServing / 100} Per Serving</span>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={style.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </>
  );
}
