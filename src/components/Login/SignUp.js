import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button'
import firebase from '../../config/Firebase'
import './Logon.scss'

const SignUp = ({ handleSignUp }) => {

  return (
      <div className='Logon__columntwo--left'>
        <h3 className="textColor4 pb4">Create an account</h3>
        <Row className="pb4">
          <Col><SocialIcon style={{ width: '30px', height: '30px'}} bgColor='#012998' network="google" onClick={() => console.log("Clicked google")} /></Col>
          <Col><SocialIcon style={{ width: '30px', height: '30px'}} bgColor='#012998' network="facebook" onClick={() => console.log("Clicked facebook")} /></Col>
          <Col><SocialIcon style={{ width: '30px', height: '30px'}} bgColor='#012998' network="twitter" onClick={() => console.log("Clicked twitter")} /></Col>
        </Row>
        <p className='textColor4'> or </p>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control type='password' placeholder="Password" />
          </Form.Group>
          <Button className='px4' type='submit'>Sign Up</Button>
        </Form>
      </div>
  )
}

export default SignUp;
