import { useEffect, useState } from "react";
import style from "./css/search.module.css";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");

  //// Passing two things.
  //// One is the call back function "() => {}",
  //// next one is the dependency array "[]""
  // useEffect(() => {}, [])

  //// useEffect to check the changes of the state which ever is passed inside the dependency array and function call happens.
  //// Syntax of useEffect. This is just for demo
  // useEffect(() => {
  //     function demo() {
  //         console.log("Demo useEffect")
  //     }
  //     demo()      // Calling the demo function to show in console. This gets executed the very first time when the app loads.
  // }, [query])     // To check any change in the input place, we are pasing the state inside this dependency array [],
  // so when changes we do the above console will be triggered.

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "d40e99ae412f4ea2b412f6b5e1144ce7";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); //$ this is a string litteral. Using this we can create dynamic strings in javaScript
      const data =
        await response.json(); /* This function will be called asynchronasly before the fetch happens. So we will face the error stating that "response.json is not a function". For that we should use "async" before the function and "await" before the fetch as used above. "await" is better way than the "promise" and ".then" */
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={style.searchContainer}>
      <input
        className={style.form__field}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
