import React from 'react'
import TodoItem  from "./TodoItem";

const Todos = (props) => {
  return (
    <div>
    <h2 className='text-center'>Todo List</h2>
  { props.todos.length===0 ? "No Todo To Display Chala Jaa BSDK":
    props.todos.map((todo) =>{
     return <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
    })
  }
    </div>
  )
}

export default Todos
