import React from 'react';
import logo from './../../assests/images/main-logo.svg';

const Header = () => {
  return (
    <div>
        <div className='menu'>
            <div className='menu__logo'>
                <img src={logo} />
            </div>
        </div>
    </div>
  )
}

export default Header