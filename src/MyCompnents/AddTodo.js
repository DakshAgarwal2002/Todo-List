import React, { useState } from 'react'

export default function AddTodo(props) {
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!Title || !Desc)
        {
            alert("Title or Description cannot be Empty")
        }
        else
        props.addTodo(Title,Desc);
        setTitle("");
        setDesc("");
    }
  return (
    <>
    <form className='container' onSubmit={submit}>
        <h3 className='text-center'>Add Task</h3>
  <div className="mb-3">
    <label className="form-label">Add Title</label>
    <input type="text" className="form-control" value={Title} onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Add Description</label>
    <input type="text" className="form-control" value={Desc} onChange={(e)=>{setDesc(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-primary">Add Task</button>
</form>
    </>
  )
}
