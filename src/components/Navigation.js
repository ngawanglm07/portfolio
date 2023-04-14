import React from 'react'
import {Nav,Navbar,Container , NavDropdown , Button , Form} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from "../assests/logo.png"
import "../components/navigation.css"


function Navigation() {
  return ( 
    <nav >     
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
      <LinkContainer to="/">
         <Navbar.Brand >
         <img  src={logo} alt="idk" style={{width:120,height:50}}/>
        </Navbar.Brand>
      </LinkContainer>
      <LinkContainer to="/">
          <Nav.Link><h2 style={{fontFamily:'bold' , color:'white'}}>Ngawang</h2></Nav.Link>
          </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/chat">
          <Nav.Link>Chat</Nav.Link>
          </LinkContainer>
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </nav> 
  )
}

export default Navigation
