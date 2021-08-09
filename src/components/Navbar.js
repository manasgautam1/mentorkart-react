import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <>
      <Navbar className='my-navbar' variant='dark' expand='md'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src='/images/main-icon-2.png'
              alt=''
              width='90px'
              height='70px'
              className=''
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ms-auto'>
              <Nav.Link href='#programs' className='navbar-link pe-lg-5'>
                Programs
              </Nav.Link>
              <Nav.Link href='#be-a-mentor' className='navbar-link pe-lg-5'>
                Be a Mentor
              </Nav.Link>
              <Nav.Link href='#login' className='navbar-link'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
