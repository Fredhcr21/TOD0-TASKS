import './App.css'
import { Task, TaskList } from './controllers/taskList/TaskList'
import { CreateTask } from './controllers/createTask/createTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleSaveTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const handleDelete = (id: string) => {
    const deleteTask = tasks.filter((task) => task.id !== id)
    setTasks(deleteTask)
  }

  return (
    <>
    <div className='container'>
    <div>
      <CreateTask onGuardarTarea={handleSaveTask} />
    </div>
      <main>
        {
          tasks.map((task) => (
            <TaskList id={task.id} handleDelete={handleDelete} key={task.id} title={task.title} description={task.description} date={task.date} nameCreator={task.nameCreator} state={task.state} />
          ))
        }
      </main>
    </div>
    </>
  )
}

export default App
