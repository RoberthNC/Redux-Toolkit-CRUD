import { useSelector } from "react-redux"

const TasksList = () => {

    const stateTasks = useSelector(state => state.tasks)
    console.log(stateTasks)

    return (
        <div>
            {stateTasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TasksList