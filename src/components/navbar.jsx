import React from 'react'
import { Navbar,Nav,NavDropdown, Container,} from 'react-bootstrap'
import "../App.css"

export default function Navbarr() {
  return (
    <div>
        <nav className='sticky'>

      
    <Navbar  expand="lg" sticky="top" className='navy' >
  <Container fluid>
   
       <Navbar.Brand href="/" className='logos'>En Route</Navbar.Brand>
       
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 justify-content-center navv"
        
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">About</Nav.Link>
        <NavDropdown title="Locations" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/hotels">Hotels</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Restaurants</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Cinema</NavDropdown.Item>
          <NavDropdown.Item href="/beaches">Beach</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Garden</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Adventure</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Saloon & Spa</NavDropdown.Item>
          
        </NavDropdown>
        <Nav.Link href="/">Contact</Nav.Link>

        
      </Nav>
      <div className='register'>
        <Nav.Link href="/">Signup</Nav.Link>
        <button><Nav.Link href="/">Login</Nav.Link></button> 
        </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
</nav>
    </div>
  )
}
