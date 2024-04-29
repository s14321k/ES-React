import style from "./css/foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={style.itemContatiner}>
      <img className={style.itemImage} src={food.image} alt="" />
      <div className={style.itemContent}>
        <p className={style.itemName}>{food.title}</p>
      </div>
      <div className={style.buttonContatiner}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={style.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
