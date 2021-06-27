import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import MobileHeader from './MobileHeader';
import { NAV_LIST } from './headerConstants';
import firebase from '../../../config/Firebase';
import { AuthContext } from '../../Auth/Auth';
import './Header.scss';



const renderNavItem = navItem => (
  <NavLink className='NavBar--nav' activeClassName='NavBar--nav_navActive' to={`${navItem.link}`}>{navItem.name}</NavLink>
);

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser && (<>
        <div className='NavBar'>
          <div className='NavBar--brand'>
            <Link to='/'>Trade Assist</Link>
          </div>
          <div>
            {NAV_LIST.map(item => renderNavItem(item))}
            {currentUser && (
              <Button variant='outline-light' onClick={() => firebase.auth().signOut()}>Log out</Button>
            )}
          </div>
        </div>
        <MobileHeader />
      </>)}
    </>
  )
}
export default Header;
