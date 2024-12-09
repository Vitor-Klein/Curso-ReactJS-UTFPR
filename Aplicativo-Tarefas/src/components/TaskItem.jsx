import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
const TaskItem = ({ task })=>{

 const { removeTask } = useContext(TaskContext);

  return (
  <div className="taskItem">
    <span>{task.name}</span>
    <button onClick={()=> removeTask(task.id)}>Remover</button>
  </div>
)
};

export default TaskItem;