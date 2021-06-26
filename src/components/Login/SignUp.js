import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import firebase from '../../config/Firebase'
import './Login.scss'

const SignUp = ({ history }) => {

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

  return (
    <Container className="Login">
      <h1>Sign-Up</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </Container>
  )
}

export default withRouter(SignUp);
