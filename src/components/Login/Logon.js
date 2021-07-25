import React, { useState, useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../Auth/Auth';
import firebase from '../../config/Firebase'
import Login from './Login';
import SignUp from './SignUp';
import MobileLogin from './MobileLogin'

import './Logon.scss';
import './Login.scss'

const Logon = ({history}) => {

  const [signUpClicked, setSignUpClicked] = useState('false');

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const handleLoginIn = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />
  }
  return (
    <div>
    <Container className='Logon' fluid>
      <Row>
        <Col xs={5} className='Logon__columnone'>
          <div className='Logon__columnone--right'>
            { signUpClicked ? (
              <>
                <h3 className="textColor1 pb4">Yet to sign up ?</h3>
                <p className="textColor1 pb4">Create an account instantly</p>
                <Button className='px4' onClick={() => setSignUpClicked(!signUpClicked)}>Sign Up</Button>
              </>
            ): (
              <>
                <h3 className="textColor1 pb4">Already a user ?</h3>
                <p className="textColor1 pb4">Sign in to continue</p>
                <Button className='px4' onClick={() => setSignUpClicked(!signUpClicked)}>Sign In</Button>
              </>
            )}
            
          </div>
        </Col>
        <Col xs={7} className='Logon__columntwo'>
          { signUpClicked ? (
            <Login handleLoginIn={handleLoginIn}/>
          ): (
            <SignUp handleSignUp={handleSignUp}/>
          )}
        </Col>
      </Row>
    </Container>
    
    <MobileLogin  onLogin={handleLoginIn}/>
    </div>
  )
}

export default withRouter(Logon);
