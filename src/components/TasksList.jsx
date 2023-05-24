import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"
import { Link } from "react-router-dom"

const TasksList = () => {

    const stateTasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <header>
                <h1>Tasks {stateTasks.length}</h1>
                <Link to="create">Create Task</Link>
            </header>
            {stateTasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={()=>handleDelete(task.id)}>Delete</button>
                    <Link to={`/edit/${task.id}`}>Edit</Link>
                </div>
            ))}
        </div>
    )
}

export default TasksList