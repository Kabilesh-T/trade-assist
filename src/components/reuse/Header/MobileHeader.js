import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import { NAV_LIST } from './headerConstants';
import firebase from '../../../config/Firebase';
import { AuthContext } from '../../Auth/Auth';
import './Header.scss';

const MobileHeader = () => {
  const { currentUser } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} collapseOnSelect className='NavBarMobile ' expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <div className='NavBarMobile--brand'>
          Trade Assist
        </div>
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav">
        <div className='NavBarMobile--hamburger'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse className="NavBarMobile--menu" id="responsive-navbar-nav">
        <Nav style={{ textAlign: 'center' }} className="mr-auto">
          {NAV_LIST.map((item, key) =>
            <Link key={key} to={item.link} onClick={() => setExpanded(!expanded)}>
              <div className="NavBarMobile--menu_item">{item.name}</div>
            </Link>
          )}
          {currentUser && (
            <Link style={{ justifyContent: 'center' }} onClick={() => setExpanded(!expanded)}>
              <Button variant='outline-light' onClick={() => firebase.auth().signOut()}>Log out</Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MobileHeader;
