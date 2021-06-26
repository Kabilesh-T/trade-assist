import React from 'react';
import PropTypes from 'prop-types';
import './PositionsPage.scss';

const TableRow = ({ no, symbol, average, quantity, entryDate }) => {
  return (
    <tr>
      <td>{no}</td>
      <td>{symbol}</td>
      <td>{average}</td>
      <td>{quantity}</td>
      <td>{entryDate}</td>
      <td><div className='btn btn-danger'>Exit</div></td>
    </tr>
  )
}

TableRow.propTypes = {
  no: PropTypes.number,
  symbol: PropTypes.string,
  average: PropTypes.number,
  entryDate: PropTypes.string
}

export default TableRow
