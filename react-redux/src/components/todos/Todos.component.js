import { React } from "react"
import { useEffect } from "react"
import { loadTodos } from "../../action-creators/todos"

export const Todos = ({todos, loadTodos}) => {
    useEffect(() => {
        loadTodos()
    }, [])

    return (
        <>
            <ul>
                {todos.map((todo) => { return (<li >{todo.title}</li>) })}
            </ul>
        </>
    )
}