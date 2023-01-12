import React, { useState } from 'react';
import {Form , Button } from "react-bootstrap";
import {useDispatch}from "react-redux"
import { addTask } from '../../Redux/Action/listTasks';


const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
      e.preventDefault()
      if (text) {
        dispatch(addTask( {id: Math.rando() , text , isDone: false}))
        setText("")
      }else {
        alert ("can not add an empty task!");
      } 
      
    }
  return (
    <div>
      <Form onSubmit={handleChange}>
        
        <Form.Control type="text" placeholder="Enter task .." 
        onChange={(e)=>setText(e.target.value)}  
        value={text} />

      <Button variant="primary" type="submit" onClick={handleChange}>
        Add
      </Button>
    </Form>
    </div>
  )
}

export default AddTask
