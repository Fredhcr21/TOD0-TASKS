import { useState } from "react"
import './TaskList.css'


interface Task {
    title: string;
    description: string;
    date: string;
    nameCreator: string;
    state: string
}

export function TaskList({ title, description, date, nameCreator, state }: Task) {
    const [likes, setLikes] = useState<number>(0)
    const [isLiked, setIsLiked] = useState<boolean>(false)

    const handleLikeClick = () => {
        if(!isLiked) {
            setLikes(likes + 1)
            setIsLiked(true)
        }
    }
    
    
    return (
        <>
            <div className="container">
                <div className="card">
                    <h2 className="title">{title}</h2>
                    <div>
                        <span className="description">{description}.</span>
                    </div>
                    <div>
                        <span className="date">Fecha de Creación: {date}</span>
                    </div>
                    <div>
                        <span className="state">Estado: {state}</span>
                    </div>
                    <div className="buttons">
                        <button className="like-button" onClick={handleLikeClick} disabled={isLiked} >Like {likes}</button>
                        <button className="delete-button">Eliminar</button>
                    </div>
                    <span className="creator">Creado por: {nameCreator}</span>
                </div>
            </div>
        </>
    )
}