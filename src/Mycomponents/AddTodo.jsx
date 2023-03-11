import React from 'react'

export const AddTodo = () => {
    let FormStyle = {
        marginTop : "40px",
        marginLeft : "38px",
        marginRight: "30px"
    }
  return (
    <div>

        <form style={FormStyle}>
        <div className="FstBlock my-2">
            <h3>Add Todo</h3>
            <label htmlFor="Title" className="form-label">Todo Title</label>
            <input type="text" className="form-control" id="Title" aria-describedby="emailHelp"/>
        </div>
        <div className="SndBlock my-2">
            <label htmlFor="Desc" className="form-label">Todo Description</label>
            <input type="text" className="form-control" id="Desc"/>
        </div>
        
        <button type="submit" className=" Main_Btn btn btn-primary m-3">Submit</button>
        </form>

    </div>
  )
}
