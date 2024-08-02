import { getDatabase, ref, set } from 'firebase/database';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { firebaseApp } from '../assests/firebase-config/firebaseConfig';
import { useDispatch } from 'react-redux';
import { getData } from '../assests/redux-slices/mcqSlice';

const Manege = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
    },[])

    const handleAddQuest = (e)=>{
        e.preventDefault();

        const data = {
            question: e.target.question.value,
            o1: e.target.o1.value,
            o2: e.target.o2.value,
            o3: e.target.o3.value,
            o4: e.target.o4.value,
            correct: e.target.correct.value
        }

        console.log(data);

        try{
            const db = getDatabase(firebaseApp);
            const newMCQRef = ref(db, 'mcqs/' + Math.floor(Math.random() * 99999 * 100000));
            set(newMCQRef, data);

            alert('Data added successfully');

            e.target.reset();
        }
        catch(error){
            console.log(error);
            alert('Something went wrong');
        }

    };
  return (
    <>
        <div>
            <Link to='/'>Home</Link>
        </div>
        <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 3fr',
        }}>
            <div className='add-form'>
                <h1 style={{textAlign:'center'}}>Add MCQ</h1>
                <form onSubmit={handleAddQuest}>
                    <label>Question:</label>
                    <input type="text" name="question" />
                    <label>Option 1:</label>
                    <input type='text' name='o1'/>
                    <label>Option 2:</label>
                    <input type='text' name='o2'/>
                    <label>Option 3:</label>
                    <input type='text' name='o3'/>
                    <label>Option 4:</label>
                    <input type='text' name='o4'/>
                    <label>Correct option:</label>
                    <select name='correct'>
                        <option value='1'> Option: 1</option>
                        <option value='2'> Option: 2</option>
                        <option value='3'> Option: 3</option>
                        <option value='4'> Option: 4</option>
                    </select>

                    <button>Add Data</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Manege