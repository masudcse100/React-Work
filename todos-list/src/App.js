import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import React, { useState } from 'react';
// import {  } from "module";


function App() {
  const onDelete=(todo)=>{
    // console.log("I'm onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go the market to get this job done!"
    },
    {
      sno:2,
      title:"Go to the Shopping Mall 2",
      desc:"You need to go the market to get this job done! 2"
    },
    {
      sno:3,
      title:"Go to the Rail-Station 3",
      desc:"You need to go the market to get this job done! 3"
    }
  ]);
  return (
    <>
      <Header title="My-Todos-List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;



