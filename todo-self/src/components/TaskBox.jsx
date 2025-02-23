/* eslint-disable react/prop-types */



export default function TaskBox({input,handleChange,task,markCompleted}){
    return(

        <div>
   
        <div className='flex justify-center'>
           <input
                 className="p-4 mt-2 text-2xl border-2 rounded-md  "
                 type="text"
                 value={input} 
                 onChange={handleChange} 
                 placeholder="Type here"
               />
     </div>
             <ul>
               {task.length===0 ? (
                 <li className='text-2xl text-white text-center p-4'>No Tasks Available</li>) : (
                 task.map((task,index)=>(
                 // <li key={index} className='mx-2 px-2 text-2xl text-white py-2'>{task}
                 <li key={index} className={`mx-2 px-2 text-2xl text-white py-2 ${task.completed ? 'line-through text-red-400' : ''}`}>
                       {task.text}
                 <button 
                 className={`ml-4 text-white px-4 py-2 rounded-md ${task.completed ? 'bg-red-500' : 'bg-green-500'} `}
                 // onClick={markCompleted}
                  onClick={() => markCompleted(index)}
     
                 >
                   {/* Completed */}
                   {task.completed ? "Unmark" : "Completed"}
                 </button></li>
                 ))
                 
                 )
               }
             </ul>
           </div>
    )
}