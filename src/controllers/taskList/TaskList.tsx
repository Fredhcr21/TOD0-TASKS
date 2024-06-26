// import { useState } from "react"
import { useState } from 'react';
import './TaskList.css'


export interface Task {
    id?: number
    title: string;
    description: string;
    date: string;
    nameCreator: string;
    state: string
    handleDelete?: (id: number) => void
    likes?: number
}

export function TaskList({ title, description, date, nameCreator, state, handleDelete, id }: Task) {
    const [likes, setLikes] = useState<number>(0)
    const [isLiked, setIsLiked] = useState<boolean>(false)

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikes(likes + 1)
            setIsLiked(true)
        }
    }
    const handleDisLikeClick = () => {
        if (likes > 0) {
            setLikes(likes - 1)
            setIsLiked(false)
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
                        <button className="like-button" onClick={handleLikeClick} disabled={isLiked}>Like ({likes})</button>
                        <button className="dislike-button" onClick={handleDisLikeClick}>disLike</button>
                        <button className="delete-button" onClick={() => handleDelete!(id!)} disabled={likes > 0}>Eliminar</button>
                    </section>
                    <section>
                        <span className="creator">Creado por: {nameCreator}</span>
                    </section>
                </div>
            </div>
        </>
    )
}