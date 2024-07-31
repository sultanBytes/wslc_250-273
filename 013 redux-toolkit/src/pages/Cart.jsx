import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../assests/redux-slices/cartSlice';

const Cart = () => {
    const cart = useSelector((state)=> state.cart.value);
    const dispatch = useDispatch();
    console.log(cart);

    const newObj = {
        name:'product',
        price:'1234'
      }
  return (
    <div>Cart
        <button
        onClick={()=>{dispatch(addProduct(newObj))}}
        >add data</button>
    </div>
  )
}

export default Cart