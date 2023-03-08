import React from 'react'
import TodoItem  from "./TodoItem";

const Todos = (props) => {
  return (
    <div>
    <h2 className='text-center'>Todo List</h2>
  {
    props.todos.map((todo) =>{
    return <TodoItem todo = {todo}/>
    })
  }
    </div>
  )
}

export default Todos
