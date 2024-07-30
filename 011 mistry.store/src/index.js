import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RouteLayout from './assets/route-layout/RouteLayout';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import CollectionBy from './components/pages/CollectionBy';
import PdfCatelogue from './components/pages/PdfCatelogue';
import Login from './components/pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RouteLayout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='contact' element={<ContactUs/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='collection' element={<CollectionBy/>}/>
        <Route path='pdf-cat' element={<PdfCatelogue/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>     
    </>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
