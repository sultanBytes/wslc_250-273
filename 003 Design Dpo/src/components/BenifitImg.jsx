import React from 'react'

const BenifitImg = ({imgUrl}) => {

    // console.log(imgUrl);
  return (
    <div className='benifits-img'>
        <img src={imgUrl}></img>
    </div>
  )
}

export default BenifitImg