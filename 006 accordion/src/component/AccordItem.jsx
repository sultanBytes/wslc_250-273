import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

// const AccordItem = ({ details, check }) => {
    // console.log(props);
    // const details = props.details;
    // const check = props.check;

    // console.log(details, check);

    // const {details, check} = props;
    // console.log(details, check);


    //accord 1
    // const [ifActive, setIfactive] = useState(false);

    // const handleStatus = (i)=>{
    //     console.log(i);
    //     setIfactive(!ifActive);
    // }

    // return (
    //     <div className='border border-bottom'>
    //         <div className='p-[10px] bg-sky-600 cursor-pointer' onClick={()=>{handleStatus('hello')}}>
    //             {
    //                 details.quest
    //             }
    //         </div>
    //         <div className={`px-[10px] bg-sky-200 ${ifActive ? 'block' : 'hidden'}`}>
    //             {
    //                 details.answer
    //             }
    //         </div>
    //     </div>
    // )

    const AccordItem = ({ details, ifOpen, handleFunction }) => {


    return (
        <div className='border border-bottom'>
            <div className='p-[10px] bg-sky-600 cursor-pointer flex justify-between' onClick={handleFunction}>
                <span>
                {
                    details.quest
                }
                </span>

                {
                    ifOpen ? <FaMinus /> : <FaPlus />
                }
            </div>
            <div className={`px-[10px] bg-sky-200 ${ifOpen ? 'block' : 'hidden'}`}>
                {
                    details.answer
                }
            </div>
        </div>
    )
}

export default AccordItem