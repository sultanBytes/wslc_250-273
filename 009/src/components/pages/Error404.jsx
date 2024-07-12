import React from 'react';
import Img from './../../assets/CodePen-404-Page.gif';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
        <Link to='/'>
        <img src={Img}></img>
        </Link>
    </>
  )
}

export default Error404