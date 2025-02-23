
import { useState } from 'react'
import Table from './components/Table/Table';
import TaskBox from './components/TaskBox';
// import MainBox from './components/MainBox';

import './App.css'

function App() {
  
 const[task,setTask] =useState([]);
 const[input,setInput] =useState("");
 
 

 const addTask =() =>{ 
  if(input){
    setTask((prevTasks)=>[...prevTasks, { text: input, completed: false }])
    setInput("")

  }
  
 }
const removeTask = () =>{
  if(task.length>0){
   setTask((prevTasks)=>prevTasks.slice(0,prevTasks.length-1))
  }
}

const handleChange = (e) =>{
  setInput(e.target.value)
}

const markCompleted = (index)=> {
const updatedTasks = [...task];
updatedTasks[index].completed = !updatedTasks[index].completed;
    setTask(updatedTasks);
}

  return (
    <div className='border border-violet-100'>
     <div className="text-center text-4xl font-bold shadow-lg bg-slate-400 w-full text-blue-50 p-3">Todo-App</div>
     <div className='bg-red-50 h-screen text-gray-600 '>
      <div className='button p-4 flex flex-row  justify-center gap-4'>
      <button onClick={addTask}
      className='text-4xl p-4 text-justify bg-pink-500 text-white rounded-md shadow-md hover:bg-violet-600'>
        Add
      </button>
      <button 
      onClick={removeTask}
      className='text-4xl p-4 text-justify bg-pink-500 text-white rounded-md shadow-md hover:bg-violet-600'>
      Delete
      </button>
      </div>
      <div className='render-list bg-slate-700 h-1/2 overflow-scroll mx-14  '>
       <TaskBox 
        input={input}
        handleChange={handleChange}
        task={task}
        markCompleted={markCompleted} 
       />
  
      </div>
      <Table task={task} markCompleted={markCompleted}/>
     </div>
     
     
      </div>

  )
}

export default App
