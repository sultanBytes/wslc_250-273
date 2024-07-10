import { useEffect, useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import TaskLi from './components/TaskLi';

function App() {

  const [inpVal, setInpVal] = useState('');
  const [taskData, setTaskData] = useState([]);

  const showTasks = ()=>{
    let oldData = Cookies.get('to-do-list-with-react');

    if(oldData === undefined){
      oldData = [];
    }
    else{
      oldData = JSON.parse(oldData);
    }
    setTaskData(oldData);

  };

  useEffect(()=>{
    showTasks();
  },[]);

  const addtask = ()=>{

    if(inpVal === '') return alert('Please fill input');

    let oldData = Cookies.get('to-do-list-with-react');

    if(oldData === undefined){
      oldData = [];
    }
    else{
      oldData = JSON.parse(oldData);
    }

    const newId = Math.floor(Math.random() * 1000000000000000);

    const currentTime = new Date();

    const newTask = {
      id: newId,
      task: inpVal,
      created_at: currentTime.toDateString(),
      status: false
    }

    oldData.push(newTask);

    Cookies.set('to-do-list-with-react', JSON.stringify(oldData));

    setInpVal('');

    showTasks();
  }


  const handleStatus = (ind)=>{

    const newData = [...taskData];

    newData[ind].status = !taskData[ind].status;

    Cookies.set('to-do-list-with-react', JSON.stringify(newData));
    showTasks();
  };

  const handleDeleteData = (ind)=>{

    if(!window.confirm('Are you sure to delete this data')) return;

    const newData = [...taskData];
    newData.splice(ind, 1);
    Cookies.set('to-do-list-with-react', JSON.stringify(newData));
    showTasks();
  }

  return (
   <>
    <div className='w-[1000px] mx-auto bg-[whitesmoke] p-[30px]'>
      <h1 className='text-[24px] font-[600] text-center mb-[20px]'>To-Do List</h1>
        <div className='grid grid-cols-[7fr_2fr] gap-[10px]'>
          <input type='text' value={inpVal} onChange={(e)=>{setInpVal(e.target.value)}} className='p-[8px] rounded border border-black' placeholder='Enter your task'/>
          <button className='bg-[#1f1f1f] rounded text-white' onClick={addtask}>Add</button>
        </div>
        <div>
          <ul>

            {
              taskData.map((task, index)=>(
                <TaskLi key={index} statusFunction={()=>{handleStatus(index)}} deleteFunction={()=>{handleDeleteData(index)}} data={task}/>
              ))
            }
           
          </ul>
        </div>
    </div>
   </>
  );
}

export default App;
