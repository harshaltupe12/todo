import { useState } from "react"
import React  from 'react'

export const AddTodo = (props) => {
    let FormStyle = {
        marginTop : "40px",
        marginLeft : "38px",
        marginRight: "30px"
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    let submit = (e) => {
        e.preventDefault(); // this is use to stop page reloading
        if(!title || !desc){
            alert("Title And Description cannot be blank");
        }
        else{props.addTodo(title, desc);}
        
    }
  return (
    <div>
        <form onSubmit={submit} style={FormStyle}>
            <div className="FstBlock my-2">
                <h3>Add Todo</h3>
                <label htmlFor="Title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Title" aria-describedby="emailHelp"/>
            </div>
            <div className="SndBlock my-2">
                <label htmlFor="Desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="Desc"/>
            </div>
            <button type="submit" className=" Main_Btn btn btn-primary m-3">Submit</button>
        </form>

    </div>
  )
}
