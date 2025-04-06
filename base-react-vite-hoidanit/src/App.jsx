import './components/todo/todo.scss'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from "./assets/react.svg"
import { useState } from 'react'
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1, name: "Learning React"
    },
    {
      id: 2, name: "Watching Youtube"
    },
  ])

  const hoidanit = "Quoc Toan";
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "VietNam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        todos={todos}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
