import React from 'react'
const TodoItem = ({todo, onDelete}) => {
  return (
    <div className="m-5 mb-1 mt-2">
      <h4>{todo.title}</h4>
      <h5>{todo.desc}</h5>
      <button className="btn btn-danger" onClick={() => {onDelete(todo)}} >Delete</button>
    </div>
    
  )
}
export default TodoItem
