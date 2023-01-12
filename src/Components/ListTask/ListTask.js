import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'


const ListTask = () =>{
    const list = useSelector(state=> state.ListReducer.listTasks)
    const [status, setStatus] = useState("ALL")
  return (
    <div>
      <button onClick={() => setStatus("All")}>ALL</button>
      <button onClick={() => setStatus("DONE")} >DONE</button>
      <button onClick={() => setStatus("UNDONE")}>UNDONE</button>
      <h2>LIST TASK</h2>
      {     status ==="DONE"
          ? list
                .filtre((el)=> el.isDone===true)
                .map ((el) => <Task task={el} key= {el.id}/>)
          :status ==="UNDONE"
          ? list
                .filtre((el)=> el.isDone===false)
                .map((el) => <Task task={el} key= {el.id}/>)
        :list.map(el =>(
        <Task task={el} key= {el.id}/>))}
    </div>
  )
}

export default ListTask
