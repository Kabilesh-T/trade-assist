import React from 'react';
import './EntryBox.css';
import Col from 'react-bootstrap/Col'

const EntryBox = ({ entryName }) => {
  return (
    <Col className="entryCol">
      <p>{entryName}</p>
    </Col>
  );
};
export default EntryBox;
