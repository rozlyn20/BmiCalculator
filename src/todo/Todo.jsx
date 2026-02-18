import { useActionState, useState } from "react"
import "./todo.css";
function Todo(){

    const [tasks,setTasks]=useState(["Eat Breakfast","Take a shower","Walk the dog"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){

        if(newTask.trim()!=""){
            setTasks(t=>[...t,newTask])
        setNewTask("");
        }
        
        }
    function removeTask(index){
        const updatedTask= tasks.filter((_,i)=>i!==index);
        setTasks(updatedTask);

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index-1]]=
            [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }

    }
    return(
        <>
        <div className="to-do-list">
            <h1>TO-Do List</h1>
            <div>
                <input type="text"
                    placeholder="Enter task"
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className="add-button"
                        onClick={addTask}>Add Task</button>
                <ol>
                    {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn" 
                        onClick={()=>removeTask(index)}>
                            Remove
                        </button>
                        <button className="move-btn" 
                        onClick={()=>moveTaskUp(index)}>
                            Move up
                        </button>
                        <button className="move-btn" 
                        onClick={()=>moveTaskDown(index)}>
                            Move down
                        </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
        </>
    )
    
}
export default Todo