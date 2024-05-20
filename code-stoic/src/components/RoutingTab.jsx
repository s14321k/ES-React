import { useNavigate } from "react-router-dom";

export const RoutingTab = () => {
  const navigator = useNavigate();

  const helloDemo = () => navigator("/helloDemo");
  const getHello1 = () => navigator("/hello1");
  const getHello2 = () => navigator("/hello2");
  const fruitsArray = () => navigator("/fruitsArray");
  const fruitsObject = () => navigator("/fruitsObject");
  const useStateCount = () => navigator("/useStateCount");
  const useStateObject = () => navigator("/useStateObject");
  const useStateArray = () => navigator("/useStateArray");
  const toDo = () => navigator("/toDo");

  return (
    <div>
      <button onClick={helloDemo}>HelloDemo</button>
      <button onClick={getHello1}>Hello1</button>
      <button onClick={getHello2}>Hello2</button>
      <button onClick={fruitsArray}>fruitsArray</button>
      <button onClick={fruitsObject}>fruitsObject</button>
      <button onClick={useStateCount}>useStateCount</button>
      <button onClick={useStateObject}>useStateObject</button>
      <button onClick={useStateArray}>useStateArray</button>
      <button onClick={toDo}>ToDo</button>
    </div>
  );
};
