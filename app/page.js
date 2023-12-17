
"use client";
import { useSelectedLayoutSegments } from 'next/navigation';
import React, { useState } from 'react';
const page=()=>{
  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")
  const[mainTask,setmainTask]=useState([])
  const Submithandeler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    console.log(mainTask)
    setTitle("")
    setDesc("")
  }

  const deleteHandeler=(id)=>{
    var temptasks=[...mainTask]
    temptasks.splice(id,1)
    setmainTask(temptasks)
  }

   let nowTasks="no task yet"
   if (mainTask.length>0) {
  nowTasks=  mainTask.map((elem,i)=>{
        return(<div key={i} onClick={()=>{
          deleteHandeler(i)
        }} className='p-6 flex justify-between  relative '><h2>{elem.title}</h2>
        <h4 >{elem.desc}</h4>
        <button className='bg-red-400 px-4 py-2 rounded-lg'>Delete</button></div>)
    })
   }

return(
  <>
  <div className='bg-slate-700 text-white font-extrabold text-5xl text-center p-8' >
    My todo List</div>
    <form onSubmit={Submithandeler}>
      <input className='text-1xl m-12 py-2 px-4 text-black border-2 rounded-lg' type='text' placeholder='Enter Task' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
      <input className='text-1xl m-12 py-2 px-4 text-black border-2 rounded-lg' type='text' placeholder='Enter Description here' value={desc} onChange={(e)=>{setDesc(e.target.value)}}></input>
      <button className='bg-white text-black font-bold px-4 py-2 rounded-lg'>Create Task</button>
    </form>
   <div className='p-8 text-black text-2xl font-bold bg-slate-200'><ul>{nowTasks}</ul></div>
    </>
)
}

export default page;