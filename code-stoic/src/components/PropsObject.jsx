export default function PropsObject({ person }) {
  console.log("inside peroson");
  console.log(person);
  return (
    <div>
      <h1> Ha, this is a {person.typess}</h1>
      <h2>
        {" "}
        Welcome {person.name} {person.emoji}, {person.message}{" "}
        {person.seatNo.map((no) => (no * 6) / 2)}{" "}
      </h2>
      <div>----------------------------------------------</div>
    </div>
  );
}
