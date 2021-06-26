import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import { AuthContext } from '../Auth/Auth';
import firebase from '../../config/Firebase'
import './Login.scss'

const Login = ({ history }) => {

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
    <>
      <Container className="Login">
        <h1>Login</h1>
        <Form onSubmit={handleLoginIn}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button variant='primary'>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default withRouter(Login);
