import './App.css'
import { Task, TaskList } from './controllers/taskList/TaskList'
import { CreateTask } from './controllers/createTask/createTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleSaveTask = (task: Task) => {
    setTasks([...tasks, task])
  }
  return (
    <>
      <div className='container'>
        <div>
          <CreateTask onGuardarTarea={handleSaveTask} />
        </div>
        <main>
          {
            tasks.map((task, index) => (
              <TaskList key={index} title={task.title} description={task.description} date={task.date} nameCreator={task.nameCreator} state={task.state} />
            ))
          }
          <TaskList title='Funciones Matematicas' description='Tendra que realizar tres funciones graficas' date='28/Septiembre/2023' nameCreator='Jhon Washington' state='Quintana Roo' />
        </main>
      </div>
    </>
  )
}

export default App
