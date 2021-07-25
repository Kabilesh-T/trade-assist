import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialIcon } from 'react-social-icons';
import './Logon.scss'

const Login = ({ handleLoginIn }) => {

  return (
    <div className='Logon__columntwo--left'>
      <h3 className="textColor4 pb4">Welcome Back</h3>
      <Row className="pb4">
        <Col><SocialIcon style={{ width: '30px', height: '30px'}} bgColor='#012998' network="google" onClick={() => console.log("Clicked google")} /></Col>
        <Col><SocialIcon style={{ width: '30px', height: '30px'}} bgColor='#012998' network="facebook" onClick={() => console.log("Clicked facebook")} /></Col>
        <Col><SocialIcon style={{ width: '30px', height: '30px'}} bgColor='#012998' network="twitter" onClick={() => console.log("Clicked twitter")} /></Col>
      </Row>
      <p className='textColor4'> or </p>
      <Form onSubmit={handleLoginIn}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control type='password' placeholder="Password" />
        </Form.Group>
        <div className="Logon__columntwo--link">
          <p><a>Forgot password ?</a></p>
        </div>
        <Button className='px4' type='submit'>Sign in</Button>
      </Form>
    </div>
  )
};

export default Login;
