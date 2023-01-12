import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask  , doneTask} from '../../Redux/Action/listTasks';
import Edit from '../Edit/Edit';

const Task = ({task}) => {
    const dispatch=useDispatch();
return (
    <div>
    <span>{task.text}</span>
    <Edit task={task}  />
    <button onclick={()=>dispatch(deleteTask(task.id))}>DELETE</button>
    <button onClick={()=> dispatch(doneTask(task.id))}
    >{task.isDone ? "Undone" : "Done"}
    </button>
    </div>
)
}

export default Task