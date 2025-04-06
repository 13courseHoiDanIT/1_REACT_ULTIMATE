const TodoNew = (props) => {
    // console.log("check props", props)
    const { addNewTodo } = props;

    // addNewTodo() //fire
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log("handle on change", name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                placeholder="Enter your task" />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}
export default TodoNew