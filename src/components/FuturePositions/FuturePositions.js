import React, {useContext, useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import { getFuturePositons, addFuturePosition, removeFuturePosition } from "../../actions/futurePositions";
import { AuthContext } from "../Auth/Auth";
import FuturePositionsTableRow from "./FuturePositionsTableRow";
import AddFuturePositionModal from "./AddFuturePositionModal";
import './FuturePositions.scss'

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
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const { uid } = currentUser;

    useEffect(async () => {
        setFuturePositions(await getFuturePositons(uid));
    },[]);

    const handleAddPosition = string => {
        // setAddModalOpen(true);
        // const updatedFuturePositions = await addFuturePosition(uid);
        // setFuturePositions(updatedFuturePositions);
        setAddModalOpen(false);
        console.log(string)
    };

    const handleDeletePosition = async positionId => {
        console.log("Deleted: ",positionId );
        const updatedPositions = await removeFuturePosition(uid, positionId);
        setFuturePositions(updatedPositions);
    }

    return(
        <div className="FuturePositions">
            <h1>Future Positions</h1>
            <div>
                <Button onClick={() => setAddModalOpen(true)}>+</Button>
                <Table responsive>
                    <thead>
                        <tr>
                            {tableHeader.map(header => <th>{header}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        futurePositions.map( (futurePosition, index) => (
                            <FuturePositionsTableRow
                                index={index}
                                futurePosition={futurePosition}
                                onDelete={() => handleDeletePosition(futurePosition[0])}
                            />
                        ))
                    }
                    </tbody>
                </Table>
            </div>
            <AddFuturePositionModal
                show={isAddModalOpen}
                onHide={() => setAddModalOpen(false)}
                onAddPosition={handleAddPosition}
            />
        </div>
    );
};
export default FuturePositions;