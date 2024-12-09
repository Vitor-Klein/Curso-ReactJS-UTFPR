import AddTask from "./components/AddTask"
import { TaskProvider } from "./context/TaskContext"
import TaskList from "./components/TaskList"
function App() {
  return (
  <TaskProvider>    
    <div className="container">
        <h1>Gerenciador de Tarefas</h1>
        <AddTask />
        <TaskList />
    </div>
  </TaskProvider>
  )
}

export default App
