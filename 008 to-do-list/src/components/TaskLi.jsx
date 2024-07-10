import React from 'react'

const TaskLi = ({ data, statusFunction, deleteFunction }) => {

  return (
    <li className='grid grid-cols-[1fr_8fr_3fr_3fr] my-[10px] items-center p-[10px] border-b-2 rounded-2xl'>
        <span className='text-center'>
        <input onClick={statusFunction} value={data.id} checked={data.status} type="checkbox" />
        </span>
        <span className={`capitalize text-[18px] font-[500] ${ data.status ? 'text-[grey] line-through' : 'text-black'}`}>{data.task}</span>
        <span>{data.created_at}</span>
        <button disabled={!data.status} className='bg-red-400 p-[8px_20px] rounded-md text-white' onClick={deleteFunction}>Delete</button>
    </li>
  )
}

export default TaskLi