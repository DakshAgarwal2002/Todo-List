import React from 'react'

export default function Todo(props) {
  return (
    <>
    <h4>{props.todo.title}</h4>
    <h4>{props.todo.description}</h4>
    <button className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    <hr />
    </>
  )
}
