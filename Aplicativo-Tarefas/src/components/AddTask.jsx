import { useState,useContext } from "react";
import { TaskContext } from "../context/TaskContext";
const AddTask= ()=> {
  const { addTask } = useContext(TaskContext);
  const [taskName,setTaskName] = useState("");

  const handleAddTask = ()=>{
     if(taskName.trim()){
      addTask({id: Date.now(), name: taskName});
      setTaskName("");

  }
  };

return (
  <div className="addTask">
    <input 
      type="text" 
      value={taskName}
      onChange={(e)=> setTaskName(e.target.value)}
      placeholder="Digite a tarefa"
    />
    <button onClick={handleAddTask}>Adicionar</button>
  </div>
)

}

export default AddTask;