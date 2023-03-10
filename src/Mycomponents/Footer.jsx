import React from 'react'

const Footer = () => {
  let myStyle = {
    position: 'absolute',
    top: '100vh',
    width: '100%'
  } 
  return (
    <div>
      <div className="bg-dark text-light" style={myStyle}>
      <p className="text-center p-3">
      Copy Right 2023 &copy; Reserved | MyTodo.com
      </p>
      </div>
    </div>
  )
}

export default Footer
