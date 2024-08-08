import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Quizz = () => {
    const [qNumber, setQnumber] = useState(1);
    const [userOptions, setUserOptions] = useState([]);

    const user = useSelector((state)=> state.user.value);
    const data = useSelector((state)=> state.mcqs.value);

    useEffect(()=>{
        const newArr = [];
        data.forEach((mcq, index)=>{
            const newObj = {
                qNo : index + 1,
                idCorrect: false
            }

            newArr.push(newObj);
        })

        setUserOptions(newArr);
    },[data]);

   
  return (
    <div>
        <div style={{
            textAlign:'center'
        }}>
            <h1>Welcome to Quizz : {user.name}</h1>
        </div>
        <div className='quizz-container'>
            <div>
                <ul className='buttons'>
                    {
                        data.map((item, index)=>(
                            <li key={item.id}>Question no. {index + 1}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3>Q. no. {qNumber} : {data[qNumber - 1].question}</h3>
                <ul>
                    <li>
                        Option A : <input type="radio" name='option' value={data[qNumber - 1].o1} />
                        <label htmlFor="">{data[qNumber - 1].o1}</label>
                    </li>
                    <li>
                        Option B : <input type="radio" name='option' value={data[qNumber - 1].o2} />
                        <label htmlFor="">{data[qNumber - 1].o2}</label>
                    </li>
                    <li>
                        Option C : <input type="radio" name='option' value={data[qNumber - 1].o3} />
                        <label htmlFor="">{data[qNumber - 1].o3}</label>
                    </li>
                    <li>
                        Option D : <input type="radio" name='option' value={data[qNumber - 1].o4} />
                        <label htmlFor="">{data[qNumber - 1].o4}</label>
                    </li>
                </ul>

                <div style={{
                    display:'flex',
                    justifyContent:'space-between'
                }}>
                    <button style={{padding:'10px', cursor:'pointer'}}
                    disabled={(qNumber <= 1) ? true : false}
                    onClick={()=>{setQnumber(qNumber - 1)}}
                    >Prev</button>
                    <button style={{padding:'10px', cursor:'pointer',}}
                    disabled={(qNumber > data.length - 1)}
                    onClick={()=>{setQnumber(qNumber + 1)}}
                    >Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quizz