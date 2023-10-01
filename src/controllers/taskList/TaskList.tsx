import { useState } from "react"
import './TaskList.css'


export interface Task {
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
        if (!isLiked) {
            setLikes(likes + 1)
            setIsLiked(true)
        }
    }


    return (
        <>
            <div className="container">
                <div className="card">
                    <header>
                        <h2 className="title">{title}</h2>
                    </header>
                    <section>
                        <span className="description">{description}.</span>
                    </section>
                    <section>
                        <span className="date">Fecha de Creación: {date}</span>
                    </section>
                    <section>
                        <span className="state">Estado: {state}</span>
                    </section>
                    <section className="buttons">
                        <button className="like-button" onClick={handleLikeClick} disabled={isLiked} >Like {likes}</button>
                        <button className="delete-button">Eliminar</button>
                    </section>
                    <section>
                        <span className="creator">Creado por: {nameCreator}</span>
                    </section>
                </div>
            </div>
        </>
    )
}