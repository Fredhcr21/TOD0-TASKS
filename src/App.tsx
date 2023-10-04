import './App.css'
import { Task, TaskList } from './controllers/taskList/TaskList'
import { CreateTask } from './controllers/createTask/createTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTitle, setFilteredTitle] = useState<string>("")
  const [filteredState, setFilteredState] = useState<string>("")
  const [nextId, setNextId] = useState<number>(1)

  const handleSaveTask = (task: Task) => {
    const newTask = { ...task, id: nextId }
    setNextId(nextId + 1)
    setTasks([...tasks, newTask])
  }

  const handleDelete = (id: number) => {
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
        <section className='divFilter'>
          <input className='filterInputs' type="text" placeholder='Filtrar por titulo' value={filteredTitle} onChange={(e) => setFilteredTitle(e.target.value)} />
          <input className='filterInputs' type="text" placeholder='Filtrar por estado' value={filteredState} onChange={(e) => setFilteredState(e.target.value)} />
          <button className='buttonFilter' onClick={filterTask}>Buscar</button>
        </section>

        <section>
          <CreateTask onGuardarTarea={handleSaveTask} />
        </section>

        <section className='task-container'>
          {
            filterTask().map((task) => (
              <TaskList id={task.id} handleDelete={handleDelete} key={task.id} title={task.title} description={task.description} date={task.date} nameCreator={task.nameCreator} state={task.state} />
            ))
          }
        </section>
      </div>
    </>
  )
}

export default App
