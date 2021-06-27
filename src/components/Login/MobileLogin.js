import React from 'react'
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../asset/logo.png';
import './Login.scss'

const MobileLogin = ({ onLogin }) => {
  return (
    <div className="MobileLogin">
      <Image className='MobileLogin--logo' src={logo} />
      <h2>Log In</h2>
      <p className='MobileLogin--info'>Please log in to continue using the app</p>
      <Form onSubmit={onLogin}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control type='password' placeholder="Password" />
        </Form.Group>
        <div className="MobileLogin--link">
          <a>Forgot password ?</a>
        </div>
        <Button className='MobileLogin--Button' type='submit' variant="primary">Log In</Button>
      </Form>
      <span className='MobileLogin--info'>Dont have an account ? <Link to="signup" className="MobileLogin--link">Sign Up</Link> </span>
      <p className='MobileLogin--info'>or</p>
      <div>
        <Row>
          <Col><SocialIcon network="google" onClick={() => console.log("Clicked google")} /></Col>
          <Col><SocialIcon network="facebook" onClick={() => console.log("Clicked facebook")} /></Col>
          <Col><SocialIcon network="twitter" onClick={() => console.log("Clicked twitter")} /></Col>
        </Row>
      </div>
    </div>
  )
}


MobileLogin.propTypes = {
  onLogin: PropTypes.func
};

export default MobileLogin;
