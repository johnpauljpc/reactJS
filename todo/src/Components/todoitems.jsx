import React from 'react'
import './css/todoitems.css'

function Todoitems({no, task}) {
  return (
    <div className='todo-items-wrapper'>
      <div className="todo-item">
        <input type="checkbox" name="" id="" className='checkbox' />
        <span className="todo-item-task">{task}</span>
      </div>
      <span className="delete-task">&times;</span>
    </div>
  )
}

export default Todoitems