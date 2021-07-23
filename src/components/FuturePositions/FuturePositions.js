import React, {useContext, useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import { getFuturePositons, addFuturePosition, removeFuturePosition } from "../../actions/futurePositions";
import { AuthContext } from "../Auth/Auth";

const tableHeader = [
    '#',
    'Symbol',
    'Entry',
    'Stoploss',
    'Quantity',
    'Capital',
    'Risk',
    ''
];

const FuturePositions = () => {
    const [futurePositions, setFuturePositions] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { uid } = currentUser;

    useEffect(async () => {
        setFuturePositions(await getFuturePositons(uid));
    },[]);

    const handleAddPosition = async() => {
        const updatedFuturePositions = await addFuturePosition(uid);
        setFuturePositions(updatedFuturePositions);
    };

    const handleDeletePosition = async positionId => {
        console.log("Deleted: ",positionId );
        const updatedPositions = await removeFuturePosition(uid, positionId);
        setFuturePositions(updatedPositions);
    }

    return(
        <div>
            <h1>Future Positions</h1>
            <Button onClick={() => handleAddPosition()}>+</Button>
            <Table>
                <thead>
                    <tr>
                        {tableHeader.map(header => <th>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                {
                    futurePositions.map( (futurePosition, index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{futurePosition[1]['symbol']}</td>
                            <td>{futurePosition[1]['entry']}</td>
                            <td>{futurePosition[1]['stoploss']}</td>
                            <td>{futurePosition[1]['quantity']}</td>
                            <td>{futurePosition[1]['capital']}</td>
                            <td>{futurePosition[1]['risk']}</td>
                            <td><Button variant='danger' onClick={() => handleDeletePosition(futurePosition[0])}>X</Button></td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    );
};
export default FuturePositions;