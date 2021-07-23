import React, { useEffect, useState, useContext } from 'react';
import {Table, Button} from 'react-bootstrap'

import { getOpenPositons, addOpenPosition, closePosition } from '../../actions/positions';
import { AuthContext } from '../Auth/Auth';

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
  const [openPositions, setOpenPositions] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const uid = currentUser.uid

  useEffect(async () => {
    setOpenPositions(await getOpenPositons(uid));
  }, []);

  const handleAddPosition = async () => {
    const updatedPositions = await addOpenPosition(uid);
    setOpenPositions(updatedPositions);
  };

  const handleDeletePosition = async positionId => {
    console.log("Deleted: ",positionId );
    const updatedPositions = await closePosition(uid, positionId);
    setOpenPositions(updatedPositions);
  }

  return (
    <>
      <div className='PositionsPage'>
        <h1>Open Positions</h1>
        <Button onClick={() => handleAddPosition()}>+</Button>
        <div style={{overflow: 'auto', maxHeight: '30rem'}}>
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
                key={position[0]}
                no={position[1]['no']}
                symbol={position[1]['symbol']}
                average={position[1]['average']}
                quantity={position[1]['quantity']}
                entryDate={position[1]['entryDate']}
                onDelete={() => handleDeletePosition(position[0])}
              />
            )}
          </tbody>
        </Table>
        </div>
      </div>

      <div className='PositionPageMobile'>
        <PositionPageMobile />
      </div>
    </>
  )
};
export default PositionsPage;
