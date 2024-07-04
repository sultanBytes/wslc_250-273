import React from 'react'
import BenifitImg from './BenifitImg';
import BenifitsConetnt from '../BenifitsConetnt';

const BenifitsSection = ({ details }) => {
  console.log(details);


  return (
    <div className='benifits-section'>
      <div className='container'>
        <h1>Benifits You Get When Using</h1>
        {
          details.map((item) => (
            <div className='benifits-inner'>
              <BenifitImg imgUrl={item.img}  />
              <BenifitsConetnt content={item.content} />
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default BenifitsSection;