import './App.css';
import Navbar from './Mycomponents/Navbar';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import { AddTodo } from './Mycomponents/AddTodo';
import React, { useState } from 'react';
function App() {
  const onDelete = (todo)=>{
    console.log("Delete Button Works MF!! ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
    sno: 1,
    title: "Goto Market",
    desc: "from market you have to Purchase some Vegitables for tomarrows dinners."
    },
    {
      sno: 2,
      title: "Goto Mall",
      desc: "from Mall you have to Purchase some Vegitables for tomarrows dinners."
    },

    {
      sno: 3,
      title: "Goto Street",
      desc: "from street you have to Purchase some Vegitables for tomarrows dinners."
    },
]);

  return (
    <div>
      <Navbar title = "My-Todo"/>
      <AddTodo/>
      <Todos todos = {todos} key={todos.sno} onDelete = {onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
