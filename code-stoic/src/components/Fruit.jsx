export default function Fruit({ name, price, emoji, sold }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}
      {price > 8 ? (
        <li>
          <div>iterating list and used fragments, i.e empty tag</div>
          {emoji} {name} ${price} {sold ? "SoldOut" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
