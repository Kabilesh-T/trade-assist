import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormContainer from './FormContainer';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container fluid className='container'>
      <Row>
        <Col>
          <h1 className="header"> Trade Assist </h1>
        </Col>
      </Row>
      <Row className="entryRow">
        <FormContainer/>
      </Row>
    </Container>
  );
};
export default HomePage;
