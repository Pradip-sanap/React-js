import {useState} from "react";
import  "./Calculator.css"


export default function Calculator() {
    let [todolist, setToDoList] = useState([]);
    let [newTask, setNewTask] = useState("");
    const handleChange = (event)=>{
        // console.log(event.target.value)
        setNewTask(event.target.value);
    }

    const addNewTask = () => {
        const task = {
            id:  todolist.length===0 ? 1 :  todolist[todolist.length-1].id + 1,
            taskName: newTask,
            completed: false
        } 
        setToDoList( [...todolist, task])
    }

    const deleteTask= (id)=>{ 
        setToDoList(
            todolist.filter(task=>{
                return   task.id===id ? false : true;
            }) 
        )
    }

    const completeTask= (id)=>{ 
        setToDoList(
            todolist.map(task=>{
                if(task.id===id){
                    return { ...task, completed: !task.completed };
                } 
                return task;
            }) 
        )
    }
    
  return (
      <>
          <div>
              <div className="addTask">
                  <input type="text" onChange={handleChange}/>
                  <button onClick={addNewTask}>Add Task</button>
              </div>

              <div className="list">
                  {
                      todolist.map((task, event)=>{
                          return (
                              <div style={{backgroundColor: task.completed ? "green":"orange"}}>
                                  <h1 >{task.id} -- {task.taskName}</h1>
                                  <button onClick={()=>completeTask(task.id)}>
                                      {!task.completed  ? <span>Check</span> : <span>uncheck</span> }
                                  </button>
                                  <button onClick={() => deleteTask(task.id)}>X</button>
                                  
                              </div>
                              );
                    })
                  }
              </div>
          </div>
      </>
  );
}