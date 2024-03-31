//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from 'react'
import { Createtodo } from '../Componenets/Createtodo'
import { Todos } from '../Componenets/Todos'
import './App.css'

function App() {
  const [todos,setTodos]=useState([]);
  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })
  

  return (
    <div>
      <Createtodo></Createtodo>
      <Todos todos={todos}></Todos>
    </div>
   
  )
}

export default App
