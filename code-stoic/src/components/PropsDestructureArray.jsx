import "../css/Style.css";

const header = { color: "red", fontSize: "90px" };

export default function PropsDestructureArray(props) {
  // destructuring the object
  const { name, message, emoji } = props.props;

  console.log("inside props");
  console.log(props);
  return (
    <>
      <h1 style={header}>
        {" "}
        Props, destructuring and arrays. Inline Style included{" "}
      </h1>
      <h2 style={{ color: "blue", fontSize: "70px" }}>
        Keys are inserted in fruits list component and iterated to print
        different fruits
      </h2>
      <h2 className="fonts">
        {" "}
        Welcome {props.props.name} {emoji}, {props.props.message}. Using props
      </h2>
      <h2>
        {" "}
        Welcome {name}, {message}. Destructuring props
      </h2>
      <h2> Take your seat, {props.props.seatNo} </h2>
      <div>----------------------------------------------</div>
    </>
  );
}
