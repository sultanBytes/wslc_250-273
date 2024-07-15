import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Gallery from './components/pages/Gallery';
import RouteLayout from './RouteLayout';
import Register from './components/pages/Register';
import Error404 from './components/pages/Error404';

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/about',
//     element: <AboutUs/>
//   },
//   {
//     path:'/contact-us',
//     element: <ContactUs/>
//   },
//   {
//     path:'/gallery',
//     element: <Gallery/>
//   }
// ]);

//multi level routing

const routes = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='/' element={<RouteLayout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      {/* <Route path='register' element={<Register/>}/> */}
    </Route>
    <Route path='/register' element={<Register/>}/>
    <Route path='*' element={<Error404/>}/>
   </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
