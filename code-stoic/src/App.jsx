import HelloDemo from "./components/HelloDemo";
import Hello from "./components/Hello";
import FruitsArray from "./components/FruitsArray";
import FruitsObject from "./components/FruitsObject";
import UseStateCount from "./components/UseStateCount";
import UseStateObject from "./components/UseStateObject";
import UseStateArray from "./components/UseStateArray";
import ToDo from "./componentstodo/ToDo";
import Header from "./componentstodo/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RoutingTab } from "./components/RoutingTab";
import { ToDoContainer } from "./componentstodo/ToDoContainer";

function App() {
  const seatNumbers = [2, 3, 1];
  const person = {
    typess: "perosn object",
    name: "sarath kumar",
    message: "please have a seat",
    emoji: ":)",
    seatNo: seatNumbers,
  };
  return (
    <>
      <BrowserRouter>
        <RoutingTab />
        <Routes>
          <Route path="/helloDemo" element={<HelloDemo />}></Route>
          <Route
            path="/hello1"
            element={
              <Hello
                name="sarath"
                message="welcome to react"
                emoji=":P"
                seatNo={seatNumbers}
                propsCondition="true"
              />
            }
          ></Route>
          <Route path="/hello2" element={<Hello peroson={person} />}></Route>
          <Route path="/fruitsArray" element={<FruitsArray />}></Route>
          <Route path="/fruitsObject" element={<FruitsObject />}></Route>
          <Route path="/useStateCount" element={<UseStateCount />}></Route>
          <Route path="/useStateObject" element={<UseStateObject />}></Route>
          <Route path="/useStateArray" element={<UseStateArray />}></Route>
          <Route path="/useStateArray" element={<UseStateArray />}></Route>
          <Route path="/toDo" element={<ToDoContainer />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <HelloDemo />
      <Hello name = "sarath" message = "welcome to react" emoji=":P" seatNo={seatNumbers} propsCondition="true"/>
      <Hello peroson={person} />
      <FruitsArray />
      <FruitsObject />
      <UseStateCount />
      <UseStateObject />
      <UseStateArray /> */}
    </>
  );
}

export default App;
