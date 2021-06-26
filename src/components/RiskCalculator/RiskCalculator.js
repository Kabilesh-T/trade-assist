import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormContainer from '../FormContainer';
import './RiskCalculator.scss';

const RiskCalculator = () => {
  return (
    <Container fluid className='container'>
      <Row>
        <Col>
          <h2 className="header"> Risk Calculator </h2>
        </Col>
      </Row>
      <Row className="entryRow">
        <FormContainer />
      </Row>
    </Container>
  );
};
export default RiskCalculator;
