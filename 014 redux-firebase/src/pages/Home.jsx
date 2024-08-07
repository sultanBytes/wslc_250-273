import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../assests/redux-slices/userSlice';

const Home = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleStartQuizz = (e)=>{
    e.preventDefault();
    const userDetails = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value
    }

    dispatch(setUserDetails(userDetails))
    
  }
  return (
    <>
      <div>
        <Link to='/manage'>Manage</Link>
        <div className='quizz-container'>
          <button onClick={() => { setOpen(true) }}>Start Quizz</button>
        </div>
        <Modal open={open} onClose={() => { setOpen(false) }} center>
          <form action="" onSubmit={handleStartQuizz}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' name='name' />
            <label htmlFor="">Age</label>
            <input type="text" placeholder='age' name='age' />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='email' name='email' />
            <button>Submit</button>
          </form>
        </Modal>
      </div>
    </>
  )
}

export default Home