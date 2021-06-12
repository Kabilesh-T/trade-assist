import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/calculator">Trade Assist</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/calculator">Risk Calculator</Nav.Link>
        <Nav.Link href="/positions">Open Positions</Nav.Link>
      </Nav>
    </Navbar>
  )
}
export default Header;
