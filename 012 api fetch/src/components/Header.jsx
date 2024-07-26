import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding:'10px 40px',
        alignItems:'center'
    }}>
        <h1>Header</h1>
        <FaShoppingCart style={{
            fontSize: '28px',
            cursor:'pointer'
        }}/>
    </div>
  )
}

export default Header