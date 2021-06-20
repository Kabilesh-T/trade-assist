import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from "react-router-dom";
import './Header.css';

const navNames = {
  'calculator': 'Risk Calculator',
  'positions': 'Open Positions'
}

const renderNavItem = navItem => (
  <NavLink className='nav' activeClassName='navActive' to={`/${navItem}`}>{navNames[navItem]}</NavLink>
);

const Header = () => {
  return (
    <div className='navBar'>
      <div className='brand'>
        <Link to='/calculator'>Trade Assist</Link>
      </div>
      {renderNavItem('calculator')}
      {renderNavItem('positions')}
    </div>
  )
}
export default Header;
