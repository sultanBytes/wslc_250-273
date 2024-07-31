import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state)=> state.user.value);

  

  return (
    <div>
      <h1>{user}</h1>
      <Link to='/change'> change</Link>
      <Link to='/cart'> cart</Link>
    </div>
  )
}

export default Home