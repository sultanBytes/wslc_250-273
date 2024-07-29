import React, { useContext, useEffect, useState } from 'react'
import { FaCross, FaShoppingCart } from 'react-icons/fa'
import { myContext } from '../assests/ContextData';
import { FaX } from 'react-icons/fa6';

const Header = () => {
  const [totalProduct, setTotalProduct] = useState(null);
  const { cart } = useContext(myContext);
  const [cartPosition, setCartPosition] = useState('-100%');

  const manageCart = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    })

    setTotalProduct(total);

  }

  useEffect(()=>{manageCart()},[cart]);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 40px',
      alignItems: 'center'
    }}>
      <h1>Header</h1>
      <div style={{
        position:'relative'
      }}>
        <FaShoppingCart
        onClick={()=>{setCartPosition('0px')}}
          style={{
            fontSize: '28px',
            cursor: 'pointer',

          }} />
        <div style={{
          position:'absolute',
          top:'-16px',
          right:'-12px'
        }}>{totalProduct}</div>
      </div>

      <div style={{
        width:'800px',
        height:'100vh',
        overflow:'scroll',
        position:'fixed',
        top:'0',
        right:cartPosition,
        backgroundColor:'whitesmoke',
        boxShadow:'inset 0 0 6px 2px lightgrey',
        transition:'0.4s'
      }}>
        <span>
          <FaX
          onClick={()=>{setCartPosition('-100%')}}
          style={{
            cursor:'pointer',
            position:'absolute',
            right:'10px',
            top:'10px'
          }}
          />
        </span>
      </div>
    </div>
  )
}

export default Header