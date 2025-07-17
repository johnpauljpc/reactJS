
import { useState } from 'react';
import './css/todoitems.css'


function Todoitems({no, task,  setTodos, task_done}) {

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const deleteTask = ()=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((task)=>(
      task.num !== no
    ))
    
    setTodos(data)
  }
  

  // Task completed
 const  taskDone = (e)=>{
  let data = JSON.parse(localStorage.getItem("todos"))

    // console.log("..>>: ", data.done)
    data.map(task => {
     if(task.num == no){
      task.done = e.target.checked
     }
     setTodos(data)
      
    });
    
  }

  // To update task
  // const updateTask =()=>{
  //   let data = JSON.parse(localStorage.getItem("todos"))
  //  let task = data.find(item => item.num = no)
  // //  let inputRef = 

  // }

   const updateTask = () => setIsEditing(true);

  const saveUpdatedTask = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.map(item => {
      if (item.num === no) item.task = editValue;
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(data));
    setTodos(data);
    setIsEditing(false);
  };

  return (
    <div className='todo-items-wrapper'>
      <div className="todo-item">
        <input type="checkbox"  name="" id="" className='checkbox' onChange={taskDone} checked={task_done} />
       {/* Updating task */}
          {isEditing ? (
          <input className='update-field'
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={saveUpdatedTask}
            autoFocus
          />
        ) : (
          <div className="todo-item-task" onClick={updateTask}>
            {task}
          </div>
        )}
        
        
      </div>
      <span className="delete-task" onClick={deleteTask}>&times;</span>
    </div>
  )
}

export default Todoitems