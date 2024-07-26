import React, { useContext, useState } from 'react'
import { myContext } from '../context/Context';


const AboutUs = () => {
  const [data, setData] = useState('hello');

const x = useContext(myContext);

console.log(x);
  return (
    <>
    <div className='page'>AboutUs</div>
    <h1>{x.name}</h1>
    </>
  )
}

export default AboutUs