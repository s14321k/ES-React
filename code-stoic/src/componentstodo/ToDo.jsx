import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <>
      {console.log("ToDo.jsx")}
      {console.log(todos)}
      <Form todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />

      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}
