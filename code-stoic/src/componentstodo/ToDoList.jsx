import ToDoItem from "./ToDoItem";
import list from "./css/todoList.module.css";

export default function ToDoList({ todos, setTodos }) {
  const sortTodo = todos.slice().sort((a, b) => a.done - b.done);
  // slice method create a copy of todos and sorts the values
  // We are type casting the boolean to number to sort accending to decending sorting.
  // To sort decending to accending we need to change to b in place of a, and a in place of b

  return (
    <div className={list.list}>
      {/* To print the todos in html directly */}
      {/* {todos.map((e) => ( // <h4>{e}</h4> // This is pass value directly inside the html tag
            <ToDoItem key={e.name} item={e} todos={todos} setTodos={setTodos}/> // This is to pass value to the component
        ))} */}

      {/* Sorted the values and making the done jobs to go down. */}
      {sortTodo.map(
        (
          e // <h4>{e}</h4> // This is pass value directly inside the html tag
        ) => (
          <ToDoItem key={e.name} item={e} todos={todos} setTodos={setTodos} /> // This is to pass value to the component
        )
      )}
    </div>
  );
}
