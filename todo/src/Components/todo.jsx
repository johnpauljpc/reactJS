import './css/todo.css'
import Todoitems from './todoitems'

function Todo() {
  return (
    <div className='todo'>
      <div className="todo-header">To-do List</div>
      <div className="todo-add">
        <input type="text" className="todo-input" placeholder='Add Your Task' />
        <div className="todo-add-btn">Add</div>
      </div>

      <div className="todo-list">
        
      </div>
    </div>
  )
}

export default Todo