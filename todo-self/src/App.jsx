import { useState } from 'react'

import './App.css'

function App() {
  
 const[task,setTask] =useState([]);
//  const[input,setInput] =useState("");
 

 const addTask =() =>{ 
  // const newTask = prompt("enter a task ");
  const newTask = task[task.length - 1]
  console.log(newTask , "list of tasks")
  if(newTask){
    setTask([...task.slice(0, task.length - 1), newTask,""])
  }
 }
const removeTask = () =>{
  if (task.length === 0) return ;
  // const removedTask = task.pop();
  // const removedTask = task.length - 1; // Get the last task (before removal)
  // console.log(task[task.length-1]);
  // setTask(task.slice(0, removedTask),""); // Create a new array without the last task
  setTask((prevTask)=>prevTask.slice(0,prevTask.length-2).concat(""))
// setTask([...task ,""])

}

const handleChange = (e) =>{
  const newInput = e.target.value;
  
  setTask((prevTask) => {
    const updatedTasks = [...prevTask]; // Create a copy of the array
    updatedTasks[updatedTasks.length - 1] = newInput; // Update the last task
    return updatedTasks; // Return the new array
  });
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
            value={task[task.length - 1] || ""} // Display the current input value
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
