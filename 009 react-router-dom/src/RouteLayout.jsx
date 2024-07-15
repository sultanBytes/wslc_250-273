import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/common-componenets/Header';
import Footer from './components/common-componenets/Footer';

const RouteLayout = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default RouteLayout