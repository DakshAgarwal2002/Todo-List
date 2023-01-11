import './App.css';
import { Footer } from './MyCompnents/Footer';
import Header from './MyCompnents/Header';
import Todos from './MyCompnents/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyCompnents/AddTodo';
import About from './MyCompnents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initodo;
  if (localStorage.getItem("todos") === null) {
    initodo = [];
  }
  else {
    initodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am On Delete of todo ", todo)
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (Title, Desc) => {
    console.log("Adding Title ", Title);
    console.log("Adding Description ", Desc);
    let sno;
    todos.length === 0 ? sno = 1 : sno = todos[todos.length - 1].sno + 1;;
    const myTodo = {
      sno: sno,
      title: Title,
      description: Desc
    }
    settodos([...todos, myTodo]);
    console.log("Adding myTodo ", myTodo);



  }

  const [todos, settodos] = useState(initodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My-todo-list" searchBar={false} />
        <Routes>
          <Route exact path="/" element={
          <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          </>
        }/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
