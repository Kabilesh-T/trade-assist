import React from 'react';
import Table from 'react-bootstrap/Table'
import './PositionsPage.css';

const PositionsPage = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Voltas</td>
            <td>1004</td>
            <td>20</td>
            <td>12-05-21</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mindtree</td>
            <td>773</td>
            <td>33</td>
            <td>19-04-21</td>
          </tr>
          <tr>
            <td>3</td>
            <td>ICICI Bank</td>
            <td>635.70</td>
            <td>10</td>
            <td>25-05-21</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default PositionsPage;
