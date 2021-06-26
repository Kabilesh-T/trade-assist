import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'

import { getOpenPositons } from '../../actions/positions';

import TableRow from './TableRow';
import PositionPageMobile from './PositionPageMobile';
import './PositionsPage.scss';

const tableHeader = [
  '#',
  'Symbol',
  'Price',
  'Quantity',
  'Date',
  'Action'
];

const PositionsPage = () => {
  const [openPositions, setOpenPositions] = useState([])

  useEffect(async () => {
    setOpenPositions(await getOpenPositons());
  }, []);
  return (
    <>
      <div className='PositionsPage'>
        <h1>Open Positions</h1>
        <Table>
          <thead>
            <tr>
              {tableHeader.map(header =>
                <th>{header}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {openPositions.map(position =>
              <TableRow
                no={position.no}
                symbol={position.symbol}
                average={position.average}
                quantity={position.quantity}
                entryDate={position.entryDate}
              />
            )}
          </tbody>
        </Table>
      </div>

      <div className='PositionPageMobile'>
        <PositionPageMobile />
      </div>
    </>
  )
};
export default PositionsPage;
