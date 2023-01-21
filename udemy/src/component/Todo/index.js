import { useReducer, useState, useRef} from "react"
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodoItem from "../TodoItem"

const Todo = () => {

    const [todoList,setTodoList] = useState([])

    const inputRef = useRef()

    const onDelTodo = (id) => {
        const updatedList = todoList.filter(eachItem => eachItem.id!==id)
        setTodoList(updatedList)
    }

    const onCompletedTodo = (id) =>{
        const updatedList = todoList.map((eachItem)=>{
            if(eachItem.id === id){
                return {id : eachItem.id,task : eachItem.task,completed : !eachItem.completed}
            }
            return {id : eachItem.id,task : eachItem.task,completed : eachItem.completed}
        })

        setTodoList(updatedList)
    }

    const addToList = () => {
        const todoItem = inputRef.current.value
        const item = {
            id : uuidv4(),
            task : todoItem,
            completed : false
        }
        setTodoList((prevState)=>{
            return [...prevState,item]
        })
        inputRef.current.value = ''
    }

    return (
        <div className="bg-container">
            <input placeholder="enter a task" type="text" ref={inputRef}/>
            <button onClick={addToList}>Add</button>
            {todoList.length!==0 && <ul className="todo-container">
                {todoList.map(eachItem => <TodoItem details={eachItem} onDelTodo={onDelTodo} onCompletedTodo={onCompletedTodo} key={eachItem.id}/>)}
                </ul>}
        </div>
    )
}

export default Todo