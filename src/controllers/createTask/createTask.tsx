import React, { useState } from "react"
import { Task } from "../taskList/TaskList"
import './createTask.css'

interface saveTask {
    onGuardarTarea: (tarea: Task) => void
}

export function CreateTask({ onGuardarTarea }: saveTask) {
    const [task, setTask] = useState<Task>({
        title: "",
        description: "",
        date: "",
        nameCreator: "",
        state: "",
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setTask({
            ...task,
            [name]: value
        })
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        onGuardarTarea(task)
        // Despues de guardar la tarea Reiniciar el formulario
        setTask({
            title: "",
            description: "",
            date: "",
            nameCreator: "",
            state: "",
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Titulo">Titulo de la Tarea:</label>
                    <input type="text" id="title" name="title" value={task.title} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="Descripcion">Descripcion:</label>
                    <textarea id="description" name="description" value={task.description} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="FechaDeCreacion">Fecha de creacion:</label>
                    <input type="date" id="date" name="date" value={task.date} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="estado">Estado de la Republica:</label>
                    <input type="text" id="state" name="state" value={task.state} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="creador">Creador de la Tarea:</label>
                    <input type="text" id="nameCreator" name="nameCreator" value={task.nameCreator} onChange={handleInputChange} required />
                </div>
                <button type="submit">Save Task</button>
            </form>
        </>
    )

}