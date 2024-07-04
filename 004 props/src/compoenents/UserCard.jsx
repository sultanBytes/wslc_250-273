import React from 'react'

const UserCard = ({data}) => {
  return (
    <div className='card'>
        <h1>{data.name}</h1>
        <p>{data.age}</p>
    </div>
  )
}

export default UserCard