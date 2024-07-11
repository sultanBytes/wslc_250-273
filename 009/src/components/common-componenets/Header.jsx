import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <ul>
                <li>
                    
                    <NavLink to='/' className={({isActive})=> isActive ? 'active-nav' : 'navs'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=> isActive ? 'active-nav' : 'navs'}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact-us' className={({isActive})=> isActive ? 'active-nav' : 'navs'}>Contact us</NavLink>
                </li>
                <li>
                    <NavLink to='/gallery' className={({isActive})=> isActive ? 'active-nav' : 'navs'}>Gallery</NavLink>
                </li>
            </ul>
            {/* <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact-us'>Contact us</Link>
            </li>
            <li>
                <Link to='/gallery'>Gallery</Link>
            </li>
        </ul> */}
        </>
    )
}

export default Header