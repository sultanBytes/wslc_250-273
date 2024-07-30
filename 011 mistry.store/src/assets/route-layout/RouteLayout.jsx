import React from 'react'
import Header from '../../components/common-components/Header';
import { Outlet } from 'react-router-dom';

const RouteLayout = () => {
  return (
    <>
        <Header />
        <Outlet/>
    </>
  )
}

export default RouteLayout;