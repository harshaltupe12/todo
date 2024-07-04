import React from 'react'
import TodoItem  from "./TodoItem";
const Todos = (props) => {
  return (
    <div>
      <h1 className='m-4'>Todo List </h1>
      { props.todos.length===0 ? "No Todo To Display Chala Jaa BSDK":
        props.todos.map((todo) =>{
        return( 
        <>
        <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
        <hr/>
        </>
        )
        })
      }
    </div>
  )
}
export default Todos
