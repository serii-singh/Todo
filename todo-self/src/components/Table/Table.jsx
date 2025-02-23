/* eslint-disable react/prop-types */

// // import React from "react";


// const data = [
//     {id :1 ,
//     name : "random name",
//     task:"completed"
//     },
//     {id :2 ,
//     name : "anyone",
//     task:"completed"
//         },
//     {id :3 ,
//     name : "someone",
//     task:"unmark"
//             }
// ];

const Table = ({task,markCompleted}) =>{
return(
<div className="table-render h-1/3 bg-slate-600 my-4 mx-14 overflow-y-scroll">
<h2 className="text-green-50 text-center text-2xl font-sans font-medium"> Stats </h2>
<table border={1} cellPadding={10} cellSpacing={2}>
    <thead className="text-2xl text-slate-50 ">
        <tr>
        <th>Id</th>
        <th>Task</th>
        <th>Status</th>
        <th>Action</th>
        </tr>
    </thead>

    <tbody className="text-white">
        {task.map((taskItem, index)=>(
    <tr key={index}>
 <td>{index + 1}</td>
              <td>{taskItem.text}</td>
              <td>{taskItem.completed ? 'Completed' : 'Pending'}</td>
              <td>
                <button
                  onClick={() => markCompleted(index)}
                  className={`p-2 ${taskItem.completed ? 'bg-red-500' : 'bg-green-500'} text-white rounded-md`}
                >
                  {taskItem.completed ? 'Undo' : 'Complete'}
                </button>
              </td>
            </tr>
          ))}
    </tbody>
</table>

</div>
    );
}


export default Table;