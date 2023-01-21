import './index.css'

const TodoItem = (props) => {

    const {details,onDelTodo,onCompletedTodo} = props

    const {id,task,completed} = details

    const onDelClickHandler = () => {
        onDelTodo(id)
    }

    const onCompletedTodoHandler = () =>{
        onCompletedTodo(id)
    }

    return (
        <li className={completed ? 'todo-item-container grey-out' : "todo-item-container"}>
            <h3>{task}</h3>
            <div>
                <button disabled={completed} onClick={onDelClickHandler}>Delete</button>
                <button disabled={completed} onClick={onCompletedTodoHandler}>Completed</button>
            </div>
        </li>
    )
    
}

export default TodoItem