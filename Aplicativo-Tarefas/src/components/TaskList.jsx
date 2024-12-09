import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = ()=>{
  const { tasks } = useContext(TaskContext);

  useEffect(()=>{
    console.log("Lista de tarefas atualizada:",tasks);
  },[tasks]);

return (
 <div className="tasks">
  { tasks.length === 0 ? ( 
  <p>Nenhuma Tarefa adicionada</p> ) : (
  tasks.map((task)=> <TaskItem key={task.id} task={task} />)
  )
}
</div>
)

}

export default TaskList;