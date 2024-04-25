import { useState } from "react"
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import ToDoList from "./ToDoList";

export default function ToDo() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            {console.log("ToDo.jsx")}
            {console.log(todos)}
            <Form todos={todos} setTodos={setTodos}/>
            <ToDoList todos={todos} setTodos={setTodos} />
        </>
    )
}