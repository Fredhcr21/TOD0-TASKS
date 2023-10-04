import './App.css'
import { Task, TaskList } from './controllers/taskList/TaskList'
import { CreateTask } from './controllers/createTask/createTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTitle, setFilteredTitle] = useState<string>("")
  const [filteredState, setFilteredState] = useState<string>("")

  const handleSaveTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const handleDelete = (id: string) => {
    const deleteTask = tasks.filter((task) => task.id !== id)
    setTasks(deleteTask)
  }

  const filterTask = () => {
    const filteredTasks = tasks.filter((task) =>
      task.title.includes(filteredTitle) && task.state.includes(filteredState)
    )
    return filteredTasks
  }

  return (
    <>
      <div className='container'>
        <input type="text" placeholder='Filtrar por titulo' value={filteredTitle} onChange={(e) => setFilteredTitle(e.target.value)} />
        <input type="text" placeholder='Filtrar por estado' value={filteredState} onChange={(e) => setFilteredState(e.target.value)} />
        <button onClick={filterTask}>Buscar</button>
        <div>
          <CreateTask onGuardarTarea={handleSaveTask} />
        </div>
        <main>
          {
            filterTask().map((task) => (
              <TaskList id={task.id} handleDelete={handleDelete} key={task.id} title={task.title} description={task.description} date={task.date} nameCreator={task.nameCreator} state={task.state} />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App
