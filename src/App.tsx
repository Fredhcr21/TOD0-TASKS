import './App.css'
import { TaskList } from './controllers/TaskList'

function App() {

  return (
    <>
      <input type="text" placeholder="Nombre de la tarea" />
      <button>Crear</button>
      <main>
        <TaskList title='Funciones Matematicas' description='Tendra que realizar tres funciones graficas' date='28/Septiembre/2023' nameCreator='Jhon Washington' state='Quintana Roo' />
        <TaskList title='Funciones Matematicas' description='Tendra que realizar tres funciones graficas' date='28/Septiembre/2023' nameCreator='Jhon Washington' state='Quintana Roo' />
      </main>
    </>
  )
}

export default App
