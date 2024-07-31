import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { updateName } from '../assests/redux-slices/userSlice';

const ChangeVal = () => {
    const user = useSelector((state)=> state.user.value);
    const dispatch = useDispatch();

  return (
    <div>
        <input type="text" onChange={(e)=>{dispatch(updateName(e.target.value))}} value={user} />
        <Link to='/'>Home</Link>
    </div>
  )
}

export default ChangeVal