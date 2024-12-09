import { createContext, useState } from "react";

// Criação de Contexto
export const TaskContext = createContext();

//Provedor de Contexto
export const TaskProvider = ({ children })=>{
  const [tasks, setTasks] = useState([]);

  const addTask = (task)=>{
    setTasks((prevTasks)=>[ ...prevTasks, task]);
  }
  const removeTask = (id) =>{
  setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== id));
  }
  return(
    <TaskContext.Provider value={{tasks, addTask, removeTask}}>
      {children}
    </TaskContext.Provider>
  )
}