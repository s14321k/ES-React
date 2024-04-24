import ToDoItem from "./ToDoItem";
import list from "./css/todoList.module.css"

export default function ToDoList({todos, setTodos}) {
    return <div className={list.list}>
        {/* To print the todos in html directly */}
        {todos.map((e) => ( // <h4>{e}</h4> // This is pass value directly inside the html tag
            <ToDoItem key={e} item={e} todos={todos} setTodos={setTodos}/> // This is to pass value to the component
        ))}
    </div>
}