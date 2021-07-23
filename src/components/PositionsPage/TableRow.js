import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import './PositionsPage.scss';

const TableRow = ({ no, symbol, average, quantity, entryDate, onDelete }) => {
  return (
    <tr>
      <td>{no}</td>
      <td>{symbol}</td>
      <td>{average}</td>
      <td>{quantity}</td>
      <td>{entryDate}</td>
      <td><Button variant='danger' onClick={() => onDelete()}>Exit</Button></td>
    </tr>
  )
}

TableRow.propTypes = {
  no: PropTypes.number,
  symbol: PropTypes.string,
  average: PropTypes.number,
  entryDate: PropTypes.string,
  onDelete: PropTypes.func
}

export default TableRow
