import { useEffect, useRef, useState } from 'react'
import './css/todo.css'
import Todoitems from './todoitems'


let counter = 0

function Todo() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)


  const add = ()=>{
    const inputValue = inputRef.current.value.trim();
    if (inputValue === "") return;
    setTodos([...todos, {num:++counter,done:false, task:inputValue}])
     localStorage.setItem("todo_count", counter)
     inputRef.current.value = ""
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
   
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
      counter = localStorage.getItem("todo_count")
    }, 100);
  },[todos])



  return (
    <div className='todo'>
      <div className="todo-header">To-do List &#128221;</div>
      <div className="todo-add">
        <input type="text" className="todo-input" ref={inputRef} placeholder='Add Your Task'  />
        <div className="todo-add-btn" onClick={add}>Add</div>
      </div>

      <div className="todo-list">
        {
          todos.map((task, key)=>(
            <Todoitems 
            key = {key}
            no = {task.num}
            task = {task.task}
            task_done={task.done}
            setTodos = {setTodos}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Todo