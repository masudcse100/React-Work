import React from 'react'
import {TodoItem} from "../Components/TodoItem";
const Todos = (props) => {
  return (
    <div className='container'>
     <h3 className='text-center p-3'>Todos List</h3>
        {/* <TodoItem todo={props.todos[2]} /> */}
        {props.todos.map((todo) =>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            // return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
        
    </div>
  )
}

export default Todos;
