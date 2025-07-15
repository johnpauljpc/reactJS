import { useEffect, useRef, useState } from 'react'
import './css/todo.css'
import Todoitems from './todoitems'


let counter = 0
function Todo() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)


  const add = ()=>{
    setTodos([...todos, {num:++counter, task:inputRef.current.value}])
     localStorage.setItem("todo_count", counter)
    
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
   
  }, [])

    useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
      // counter =
    }, 100);
  },[todos])



  return (
    <div className='todo'>
      <div className="todo-header">To-do List</div>
      <div className="todo-add">
        <input type="text" className="todo-input" ref={inputRef} placeholder='Add Your Task'  />
        <div className="todo-add-btn" onClick={add}>Add</div>
      </div>

      <div className="todo-list">
        {
          todos.map((task, key)=>(
            <Todoitems 
            key = {key}
            task = {task.task}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Todo