import React from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
import './FuturePositions.scss'

const FuturePositionsTableRow = ({ index, futurePosition, onDelete }) => (
    <tr>
        <td>{index+1}</td>
        <td>{futurePosition[1]['symbol']}</td>
        <td>{futurePosition[1]['entry']}</td>
        <td>{futurePosition[1]['stoploss']}</td>
        <td>{futurePosition[1]['quantity']}</td>
        <td>{futurePosition[1]['capital']}</td>
        <td>{futurePosition[1]['risk']}</td>
        <td><Button variant='danger' onClick={() => onDelete()}>X</Button></td>
    </tr>
);

FuturePositionsTableRow.propTypes = {
    index: PropTypes.number,
    futurePosition: PropTypes.array,
    onDelete: PropTypes.func
};

export default FuturePositionsTableRow;