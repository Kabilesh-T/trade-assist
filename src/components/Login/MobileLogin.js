import React from 'react'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import logo from '../../asset/logo.png';
import './Login.scss'

const MobileLogin = () => {
  return (
    <div className="MobileLogin">
      <Image className='MobileLogin--logo' src={logo} />
      <h2>Log In</h2>
      <p className='MobileLogin--info'>Please log in to continue using the app</p>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control type='password' placeholder="Password" />
        </Form.Group>
      </Form>
      <a className="MobileLogin--link">Forgot password ?</a>
      <Button className='MobileLogin--Button' variant="primary">Log In</Button>
      <span className='MobileLogin--info'>Dont have an account ? <a className="MobileLogin--link">Sign Up</a> </span>
      <p className='MobileLogin--info'>or</p>
    </div>
  )
}

export default MobileLogin
