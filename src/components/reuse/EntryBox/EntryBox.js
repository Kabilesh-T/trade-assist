import React from 'react';
import './EntryBox.scss';
import Col from 'react-bootstrap/Col'

const EntryBox = ({ entryName }) => {
  return (
    <Col className="entryCol">
      <p>{entryName}</p>
    </Col>
  );
};
export default EntryBox;
