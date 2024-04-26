import styles from "./css/todoItem.module.css"

export default function ToDoItem({item, todos, setTodos}) {

    const handleDelete = (item) => {
        console.log("delete button clicked", item);
        setTodos(todos.filter((todo) => todo!== item));
        // the todo will check the value is similar with item. 
        // If similar, then it wont be returned. So that the DOM will get deleted
    }

    const handleClick = (name) => {
        console.log(name);
        console.log(todos)
        const newArray = todos.map((todo) => todo.name === name ? {...todo, done:!todo.done} : todo)
        setTodos(newArray);
        console.log(todos)
    }

    const completeStyle = item.done? styles.completed : ""

    return <div className={styles.item}> 
            {console.log("todoitem item : ")}
            {console.log(item)} 
            {console.log("todoitem todos : ")} 
            {console.log(todos)}
                <div className={styles.itemName}>
                    <span className={completeStyle} onClick={() => handleClick(item.name)}> 
                        {item.name} 
                    </span>
                    <span>
                        <button onClick={() => handleDelete(item)} className={`${styles.noselect} ${styles.green} ${styles.bbutton}`}>X</button>
                    </span>
                    <hr className={styles.line}/>
                </div>
            </div>
}