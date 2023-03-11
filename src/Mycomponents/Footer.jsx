import React from 'react'

const Footer = () => {

  let myStyle = {
    position: "sticky",
    left: "0",
    bottom: "0",
    width:"100%",
    textAlign: "center",
    padding: "10px",
    marginTop: "30px"
  } 

  return (
    <div>
      <div className="bg-dark text-light" style={myStyle}>
      <p className="text-center p-3">
      Copy Right 2023 &copy; Reserved | MyTodo.com
      <p>
      Create With ❤️ by Harshal Tupe
      </p>
      </p>
      </div>
    </div>
  )
}

export default Footer
