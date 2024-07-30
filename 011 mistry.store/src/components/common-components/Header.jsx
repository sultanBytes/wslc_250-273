import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/logo.svg';
import { LiaLanguageSolid } from 'react-icons/lia';
import { BiPhoneCall } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {

  const [scrollVal, setScrollVal] = useState(null);
  const [transition, setTransition] = useState('0s');

  useEffect(()=>{

    const handleSroll = ()=>{

      if(window.scrollY > 500){
        setTransition('0.4s');
        setScrollVal('0px')
      }
      else{
        setScrollVal(`${-window.scrollY}px`);
        setTransition('0s');
      }
      console.log(window.scrollY);
    }

    window.addEventListener('scroll', handleSroll)

  },[]);
  return (
    <Navbar expand="lg" className="bg-white "
    style={{
      position:'sticky',
      zIndex:'9999',
      transition:transition,
      top:scrollVal
    }}
    >
    <Container fluid className='px-2'>
      <Navbar.Brand href="/">
      <img src={logo} style={{width:'215px'}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/">Home</Link>
          <Link to="/pdf-cat">PDF Catalog</Link>
          <Link to="/collection" className='collection-nav'>Collections By Mistry.Store</Link>
          <Link href="#action2">About Us</Link>
          <Link href="#action2">Contact Us</Link>
        </Nav>
        <Form className="d-flex align-items-center header-form">
        <Link href="#action2">
            <LiaLanguageSolid/>
        </Link>
        <Link href="#action2">
            <BiPhoneCall/>
        </Link>
          <Button className='themeBtn' type='button'>Login</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header



