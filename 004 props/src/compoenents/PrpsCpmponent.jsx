import React from 'react'

const PrpsCpmponent = (abc) => {
    console.log(abc);
  return (
    <div>
        <h1>{abc.name}</h1>
        {abc.children}
        <h2>{abc.age}</h2>
    </div>
  )
}

export default PrpsCpmponent