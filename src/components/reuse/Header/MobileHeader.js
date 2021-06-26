import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { Navbar, Nav } from 'react-bootstrap'
import { NAV_LIST } from './headerConstants';
import firebase from '../../../config/Firebase';
import { AuthContext } from '../../Auth/Auth';
import './Header.scss';

const MobileHeader = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect className='NavBarMobile ' expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <div className='NavBarMobile--brand'>
          Trade Assist
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <div className='NavBarMobile--hamburger'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse className="NavBarMobile--menu" id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {NAV_LIST.map(item =>
            <Nav.Link href={item.link}>
              <div className="NavBarMobile--menu_item">{item.name}</div>
            </Nav.Link>
          )}
          {currentUser && (
            <Nav.Link>
              <Button variant='outline-light' onClick={() => firebase.auth().signOut()}>Log out</Button>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MobileHeader;
