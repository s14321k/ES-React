import styles from "./css/todoItem.module.css"

export default function ToDoItem({item, todos, setTodos}) {

    const handleDelete = (item) => {
                                        console.log("delete button clicked", item);
                                        setTodos(todos.filter((todo) => todo!== item));
                                        // the todo will check the value is similar with item. 
                                        // If similar, then it wont be returned. So that the DOM will get deleted
                                    }

    return <div className={styles.item}>
        <div className={styles.itemName}>{item}</div>
        <span>
            <button onClick={() => handleDelete(item)} className={`${styles.noselect} ${styles.green} ${styles.bbutton}`}>X</button>
        </span>
        <hr className={styles.line}/>
    </div>
}