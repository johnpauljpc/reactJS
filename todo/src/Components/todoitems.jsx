import React from 'react'
import './css/todoitems.css'

function Todoitems({no, task, setTodos}) {
  const deleteTask = ()=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((task)=>(
      task.num !== no
    ))
    
    setTodos(data)
  }
  return (
    <div className='todo-items-wrapper'>
      <div className="todo-item">
        <input type="checkbox" name="" id="" className='checkbox' />
        <span className="todo-item-task">{task}</span>
      </div>
      <span className="delete-task" onClick={deleteTask}>&times;</span>
    </div>
  )
}

export default Todoitems