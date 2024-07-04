import React from 'react';
import logo from './../../assests/images/main-logo.svg';
import search from './../../assests/images/search.svg';
import heart from './../../assests/images/heart.svg';
import cartIcon from './../../assests/images/shopping-bag.svg';
import crownIcon from './../../assests/images/header-crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='container-header'>
          <div className='menu'>
            <div className='logo'>
              <img src={logo} />
            </div>
            <div className='nav'>
              <ul>
                <li className='active-nav'>Home</li>
                <li>About Us</li>
                <li>Explore</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='user'>
            <ul>
              <li>
                <img src={search}></img>
              </li>
              <li>
                <img src={heart}></img>
              </li>
              <li>
                <img src={cartIcon}></img>
              </li>
              <li>
                <button className='upgrade-btn'>
                  <img src={crownIcon}></img>
                  <span>Upgrade Pro</span>
                </button>
              </li>
              <li>
                <button className='signin-btn'>Sign In</button>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Header