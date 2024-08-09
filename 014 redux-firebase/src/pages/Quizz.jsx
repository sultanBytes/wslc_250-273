import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Quizz = () => {
    const [qNumber, setQnumber] = useState(1);
    const [userOptions, setUserOptions] = useState([]);

    const user = useSelector((state)=> state.user.value);
    const data = useSelector((state)=> state.mcqs.value);

    useEffect(()=>{
        const newArr = data.map((item, index)=>(
            {
                qNo: index + 1,
                selectedOption:''
            }
        ));

        setUserOptions(newArr);
    },[data])

    const selectedOptionUser = userOptions.find(option => option.qNo === qNumber)?.selectedOption;

    const handleOptionChange = (QuestNo, slectedValue)=>{
        const updatedOptions = userOptions.map(option => 
            option.qNo === QuestNo ? {...option, selectedOption: slectedValue} : option
        )

        setUserOptions(updatedOptions);
    }

    // useEffect(()=>{
    //     const newArr = [];
    //     data.forEach((mcq, index)=>{
    //         const newObj = {
    //             qNo : index + 1,
    //             idCorrect: false
    //         }

    //         newArr.push(newObj);
    //     })

    //     setUserOptions(newArr);
    // },[data]);

   
  return (
    <div>
        <div style={{
            textAlign:'center'
        }}>
            <h1>Welcome to Quizz : {user.name}</h1>
        </div>
        <div className='quizz-container'>
            <div>
                
            </div>
            <div>
                <h3>Q. no. {qNumber} : {data[qNumber - 1].question}</h3>
                <ul>
                    {
                        ['o1', 'o2', 'o3', 'o4'].map((opt, i)=>(
                            <li>
                            Option {String.fromCharCode(65 + i)}
                            <input 
                            type="radio" 
                            name={`option-${qNumber}`} 
                            value={data[qNumber - 1][opt]} 
                            checked={selectedOptionUser === data[qNumber - 1][opt]}
                            onChange={()=> {handleOptionChange(qNumber, data[qNumber - 1][opt])}}
                            />
                            <label htmlFor="">{data[qNumber - 1][opt]}</label>
                        </li>
                        ))
                    }
                   
                </ul>

                <div style={{
                    display:'flex',
                    justifyContent:'space-between'
                }}>
                    <button style={{padding:'10px', cursor:'pointer'}}
                    disabled={(qNumber <= 1) ? true : false}
                    onClick={()=>{setQnumber(qNumber - 1)}}
                    >Prev</button>
                    <button onClick={()=>{console.log(userOptions);}}>Submit</button>
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