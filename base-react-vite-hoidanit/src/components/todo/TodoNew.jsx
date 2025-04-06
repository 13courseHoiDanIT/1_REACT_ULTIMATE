import { useState } from "react";

const TodoNew = (props) => {
    //useState hook

    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;

    // addNewTodo() //fire
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
                placeholder="Enter your task" />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>My text input is = {valueInput}</div>
        </div>
    )
}
export default TodoNew