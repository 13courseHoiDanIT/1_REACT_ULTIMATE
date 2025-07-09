import TodoNew from './TodoNew'
import TodoData from './TodoData'
import reactLogo from "../../assets/react.svg"
import { useState } from 'react'


const TodoApp = () => {
    const [todoList, setTodoList] = useState([])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />

            {todoList.length > 0 ?
                <TodoData
                    deleteTodo={deleteTodo}
                    todoList={todoList}
                />
                :
                <div className='todo-image'>
                    <img className='logo' src={reactLogo} />
                </div>
            }

        </div>
    )
}

export default TodoApp