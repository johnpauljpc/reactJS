
import './css/todoitems.css'



function Todoitems({no, task,  setTodos, task_done}) {


  const deleteTask = ()=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((task)=>(
      task.num !== no
    ))
    
    setTodos(data)
  }
  
 const  taskDone = (e)=>{
  let data = JSON.parse(localStorage.getItem("todos"))

    // console.log("..>>: ", data.done)
    data.map(task => {
     if(task.num == no){
      task.done = e.target.checked
      console.log(task)
     }
     setTodos(data)
      
    });
    
  }
  return (
    <div className='todo-items-wrapper'>
      <div className="todo-item">
        <input type="checkbox"  name="" id="" className='checkbox' onChange={taskDone} checked={task_done} />
        <span className="todo-item-task">{task}</span>
      </div>
      <span className="delete-task" onClick={deleteTask}>&times;</span>
    </div>
  )
}

export default Todoitems