import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  // const handleName = (e)=>{setFormData({...formData, name:e.target.value})}

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(formData);
  }

  return (
    <>
      <form className='bg-red-600'>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(e)=>{setFormData({...formData, name:e.target.value})}} value={formData.name} />
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e)=>{setFormData({...formData, email:e.target.value})}} id="email" value={formData.email} />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e)=>{setFormData({...formData, password:e.target.value})}} value={formData.password} id="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" onChange={(e)=>{setFormData({...formData, confirmPassword:e.target.value})}} value={formData.confirmPassword} id="confirmPassword" />
        <button className='p-[8px_60px] rounded-lg bg-[#123321] text-[white] mt-[20px] block mx-auto' type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default App;
