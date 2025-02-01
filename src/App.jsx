/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import { AddFormDetails  } from "./AddFormDetails"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //  const [todos,AddTodos]=useState([]);
   const [todos,AddTodos]=useState(()=>{
    let LocalValue = localStorage.getItem('ITEMS');
    if(LocalValue===undefined||LocalValue===null||LocalValue==='') return
    return JSON.parse(LocalValue);
   });
  useEffect(()=>{
     localStorage.setItem('ITEMS',JSON.stringify(todos));
  },[todos]);
   
   function AddNewTodos(title){
         AddTodos(currentTodos => {return [
          ...currentTodos,{id:crypto.randomUUID(),title:title,completed:false}
        ]
        });
   }

function updateTodo(id , completed){
  AddTodos(currentTodos=>{
    return currentTodos.map(todo=>{         
      if(todo.id===id){
        // todo.completed=completed;
        return {...todo,completed}
      }
      // if(todo.id===id){
      //   return {...todo,completed}
      // }
      return todo;
    })
  });
}

function deleteTodo(id){
  AddTodos(currentTodos=>{
    return currentTodos.filter(todo=>todo.id!==id);
  });
}
// console.log(todos);
  return (

    <>
        <div className="App">
            <h1>Todo App</h1>
            <AddFormDetails todos={todos} AddNewTodos={AddNewTodos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            {/* <addFormDetails todos={todos} AddNewTodos={AddNewTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} /> */}
        </div>
    </>
  )
}

export default App
