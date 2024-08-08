import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../assests/redux-slices/userSlice';
import { child, get, getDatabase, ref } from 'firebase/database';
import { firebaseApp } from '../assests/firebase-config/firebaseConfig';
import { setDetails } from '../assests/redux-slices/mcqSlice';

const Home = () => {
  const nav = useNavigate();

  const dispatch = useDispatch();




    const getDataHere = async () => {
        const db = getDatabase(firebaseApp);
        const dbRef = ref(db);

        const snapshot = await get(child(dbRef, 'mcqs'));
        if (snapshot.exists()) {

            const responseData = await Object.entries(snapshot.val()).map(([id, user]) => ({ id, ...user }));
            // setData(responseData);
            dispatch(setDetails(responseData))

            // console.log(responseData);
        }
    }


    useEffect(() => {
        getDataHere();

    }, [])

  const [open, setOpen] = useState(false);

  const handleStartQuizz = (e)=>{
    e.preventDefault();
    const userDetails = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value
    }

    dispatch(setUserDetails(userDetails))
    nav('/quizz')
    
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