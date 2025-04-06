const TodoData = (props) => {
    const { name } = props;
    // console.log("props", props)
    return (
        <div className='todo-data'>
            <div>My name is {props.name}</div>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData