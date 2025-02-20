import { useState } from 'react'

import './App.css'

function App() {
  
 const[task,setTask] =useState([]);
 const[input,setInput] =useState("");
 

 const addTask =() =>{ 
  if(input){
    setTask((prevTasks)=>[...prevTasks,input])
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
      className='text-4xl p-4 text-justify bg-pink-500 text-white rounded-md shadow-md hover:bg-violet-600'>Delete</button>

      </div>

      <div className='render-list bg-slate-700 h-1/2 overflow-scroll mx-14  '>
   
   <div className='flex justify-center'>
      <input
            className="p-4 mt-2 text-2xl border-2 rounded-md  "
            type="text"
            value={input} // Display the current input value
            onChange={handleChange} // Update input value in the task array
            placeholder="Type here"
          />
</div>
        <ul>
          {task.length===0 ? (<li className='text-2xl text-white text-center p-4'>No Tasks Available</li>) : (
            task.map((task,index)=>(<li key={index} className='mx-2 px-2 text-2xl text-white py-2'>{task}</li>))
            
            )
          }
        </ul>
      </div>
     </div>
     
      </div>

  )
}

export default App
