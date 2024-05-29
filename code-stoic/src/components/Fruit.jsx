export default function Fruit({ name, price, emoji, sold }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}
      {price > 8 ? (
        <li>
          {emoji} {name} ${price} {sold ? "SoldOut" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
