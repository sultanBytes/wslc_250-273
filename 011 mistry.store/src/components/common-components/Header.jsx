import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/logo.svg';
import { LiaLanguageSolid } from 'react-icons/lia';
import { BiPhoneCall } from 'react-icons/bi';

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
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">PDF Catalog</Nav.Link>
          <Nav.Link href="#action2" className='collection-nav'>Collections By Mistry.Store</Nav.Link>
          <Nav.Link href="#action2">About Us</Nav.Link>
          <Nav.Link href="#action2">Contact Us</Nav.Link>
        </Nav>
        <Form className="d-flex align-items-center header-form">
        <Nav.Link href="#action2">
            <LiaLanguageSolid/>
        </Nav.Link>
        <Nav.Link href="#action2">
            <BiPhoneCall/>
        </Nav.Link>
          <Button className='themeBtn' type='button'>Login</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header



