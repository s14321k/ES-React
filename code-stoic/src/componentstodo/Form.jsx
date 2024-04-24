import { useState } from "react";
import formStyle from "./css/form.module.css"

export default function Form({todos, setTodos}) {

    // UseState todos and setTodos are passed from parent component
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        //// We should convert the string todo to array to pass it inside the array todos
        //// setTodos([todo]);

        //// These todos will not get updated with values, because of asynchronous way, so commented
        //// console.log(todos);

        // To store the previous input values, we are using spread operator and passing it to array
        setTodos([...todos, todo])

        // To empty the input after clicking the add button
        setTodo("")

    }

    return (
        <>
            <form className={formStyle.todoForm} onSubmit={handleSubmit}> {/* <form onSubmit={[(e) => e.preventDefault(), handleSubmit]}> */}
                <div className={`${formStyle.form__group} ${formStyle.field}`}>
                    <input
                        className={formStyle.form__field}
                        placeholder="Name"
                        name = "name"
                        onChange={(e) => setTodo(e.target.value)}
                        value = {todo}
                        type = "text"
                    />
                    {/* <label for="name" className={formStyle.form__label}>Name</label> */}
                    <button className={`${formStyle.noselect} ${formStyle.green}`} type="submit"> Add </button>
                </div>
            </form>
            {/* We can show the values in console to skip the async. */}
            {console.log(todos)}
        </>
    );
}