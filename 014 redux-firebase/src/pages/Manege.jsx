import { child, get, getDatabase, ref, remove, set, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { firebaseApp } from '../assests/firebase-config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setDetails } from '../assests/redux-slices/mcqSlice';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Manege = () => {
    const [open, setOpen] = useState(false);
    const [currntUpdataData, setUpdateData] = useState({});

    const data = useSelector((state)=> state.mcqs.value);

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

    const handleAddQuest = (e) => {
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

        try {
            const db = getDatabase(firebaseApp);
            const newMCQRef = ref(db, 'mcqs/' + Math.floor(Math.random() * 99999 * 100000));
            set(newMCQRef, data);

            alert('Data added successfully');

            e.target.reset();
        }
        catch (error) {
            console.log(error);
            alert('Something went wrong');
        }

    };

    const handleDelete = (e) => {
        if (!window.confirm('Are you sure to delete')) return

        deleteMcq(e.target.value);

    };


    const deleteMcq = (idd) => {
        const db = getDatabase(firebaseApp);
        const mcqRef = ref(db, `mcqs/${idd}`)
        remove(mcqRef);
        getDataHere();
    }

    const handleUpdate = (indexOfData)=>{
        
        setUpdateData(data[indexOfData])
        setOpen(true)
    }

    const handleUpdateData = (e)=>{
        e.preventDefault();

        // console.log(currntUpdataData.id, currntUpdataData);
        const {id, ...dataToUpdate} = currntUpdataData

        const db = getDatabase(firebaseApp);
        try{
            const dataRef = ref(db, `mcqs/${currntUpdataData.id}`);

        update(dataRef, dataToUpdate);
        getDataHere();
        setOpen(false)
    }
        catch(error){
            console.log(error);
            alert('something went wrong')
        }
    };

    return (
        <>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 3fr',
            }}>
                <div className='add-form'>
                    <h1 style={{ textAlign: 'center' }}>Add MCQ</h1>
                    <form onSubmit={handleAddQuest}>
                        <label>Question:</label>
                        <input type="text" name="question" />
                        <label>Option 1:</label>
                        <input type='text' name='o1' />
                        <label>Option 2:</label>
                        <input type='text' name='o2' />
                        <label>Option 3:</label>
                        <input type='text' name='o3' />
                        <label>Option 4:</label>
                        <input type='text' name='o4' />
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
                <div className='data-table'>
                    <table>
                        <tr>
                            <th>Sr. no.</th>
                            <th>Question</th>
                            <th>Option 1</th>
                            <th>Option 2</th>
                            <th>Option 3</th>
                            <th>Option 4</th>
                            <th>Correct Option</th>
                            <th>
                                Edit / Delete
                            </th>
                        </tr>
                        {
                            data.map((mcq, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{mcq.question}</td>
                                    <td>{mcq.o1}</td>
                                    <td>{mcq.o2}</td>
                                    <td>{mcq.o3}</td>
                                    <td>{mcq.o4}</td>
                                    <td>{mcq.correct}</td>
                                    <td>
                                        <button
                                        value={mcq.id}
                                        onClick={()=>{handleUpdate(index)}}
                                        >Edit</button>
                                        <button
                                            style={{
                                                cursor:'pointer'
                                            }}
                                            value={mcq.id}
                                            onClick={handleDelete}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
            <Modal classNames='update-model' open={open} onClose={()=>{setOpen(false)}} center>
                <h2>Update MCQ</h2>
                <form onSubmit={handleUpdateData}>
                        <label>Question:</label>
                        <input type="text" name="question" 
                        value={currntUpdataData.question}
                        onChange={(e)=>{setUpdateData({...currntUpdataData, question:e.target.value})}}
                         />
                        <label>Option 1:</label>
                        <input type='text' name='o1' value={currntUpdataData.o1}
                        onChange={(e)=>{setUpdateData({...currntUpdataData, o1:e.target.value})}}
                         />
                        <label>Option 2:</label>
                        <input type='text' name='o2'  value={currntUpdataData.o2}
                        onChange={(e)=>{setUpdateData({...currntUpdataData, o2:e.target.value})}}
                         />
                        <label>Option 3:</label>
                        <input type='text' name='o3'  value={currntUpdataData.o3} 
                        onChange={(e)=>{setUpdateData({...currntUpdataData, o3:e.target.value})}}
                        />
                        <label>Option 4:</label>
                        <input type='text' name='o4'  value={currntUpdataData.o4} 
                        onChange={(e)=>{setUpdateData({...currntUpdataData, o4:e.target.value})}}
                        />
                        <label>Correct option:</label>
                        <select name='correct' 
                         value={currntUpdataData.correct}
                         onChange={(e)=>{setUpdateData({...currntUpdataData, correct:e.target.value})}}
                         >
                            <option value='1'> Option: 1</option>
                            <option value='2'> Option: 2</option>
                            <option value='3'> Option: 3</option>
                            <option value='4'> Option: 4</option>
                        </select>

                        <button>Update Data</button>
                    </form>
            </Modal>
        </>
    )
}

export default Manege