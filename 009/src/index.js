import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Gallery from './components/pages/Gallery';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <AboutUs/>
  },
  {
    path:'/contact-us',
    element: <ContactUs/>
  },
  {
    path:'/gallery',
    element: <Gallery/>
  }
]);

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
