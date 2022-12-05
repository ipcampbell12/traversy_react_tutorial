import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    //state is immutable 
    //can only recreate it and send it down using setTasks


    //this is called a list when you output array using jsx
    //needs to have unique key prop
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks;