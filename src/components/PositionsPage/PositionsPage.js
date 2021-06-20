import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'

import { getOpenPositons } from '../../actions/positions';

import TableRow from './TableRow';
import './PositionsPage.css';

const PositionsPage = () => {
  useEffect(() => {
    getOpenPositons();
  }, []);
  return (
    <div className='PositionsPage'>
      <h1>Open Positions</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow no={1} symbol='Voltas' average={1001} quantity={20} entryDate='12-05-21' />
          <TableRow no={2} symbol='Mindtree' average={773} quantity={33} entryDate='19-04-21' />
          <TableRow no={3} symbol='ICICI Bank' average={635.70} quantity={10} entryDate='25-05-21' />
        </tbody>
      </Table>
    </div>
  )
}
export default PositionsPage;
