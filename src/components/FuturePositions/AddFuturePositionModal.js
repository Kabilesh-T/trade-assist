import React, {useCallback} from "react";
import {Modal, Button, Form} from 'react-bootstrap'
import firebase from "../../config/Firebase";

const AddFuturePositionModal = (props) => {

    // const handleAddPosition = useCallback(async event => {
    //     event.preventDefault();
    //     console.log(event);
    //     props.onAddPosition("Print something")
    // }, [history]);
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new position plan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Symbol</Form.Label>
                        <Form.Control type="string" placeholder="Enter Symbol"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Entry</Form.Label>
                        <Form.Control type="number" placeholder="Enter buy price"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Stoploss</Form.Label>
                        <Form.Control type="number" placeholder="Enter Stoploss"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Risk</Form.Label>
                        <Form.Control type="number" placeholder="Enter Risk"/>
                    </Form.Group>
                    <Button type='submit'>Add</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='light' onClick={props.onHide}>Close</Button>
                <Button type='submit'>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default AddFuturePositionModal;
