import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast' 
// import PropTypes from 'prop-types'

const FormContainer = () => {

  const [entryPrice, setEntryPrice] = useState(0);
  const [stopLoss, setStoploss] = useState(0);
  const [risk, setRisk] = useState(0);
  const [qty, setQty] = useState(0);
  const [capitalNeeded, setCapitalNeeded] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const onReset = () => {
    setEntryPrice(0);
    setStoploss(0);
    setRisk(0);
    setShowToast(false)
  };

  const onCalculate = () => {
    const riskPerShare = Math.abs( parseFloat(entryPrice) - parseFloat(stopLoss));
    const quantity = parseInt(risk/riskPerShare)
    setQty(quantity);
    setCapitalNeeded(quantity*entryPrice);
    toggleToast();
  };

  const toggleToast = () => {
    setShowToast(!showToast);
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Form>
      <Form.Label>Entry Price:</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Rs</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl 
          value={entryPrice}
          aria-label="Amount of entry" 
          onChange={e => setEntryPrice(e.target.value)}
        />
      </InputGroup>

      <Form.Label>Stoploss:</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Rs</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl 
          value={stopLoss}
          aria-label="Stoploss" 
          onChange={e => setStoploss(e.target.value)}
        />
      </InputGroup>

      <Form.Label>Risk:</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Rs</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl 
          value={risk}
          aria-label="Risk amount" 
          onChange={e => setRisk(e.target.value)}
        />
      </InputGroup>

      <Toast show={showToast} onClose={toggleToast}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Trade Details</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body>
          <p><strong>Quantity: </strong>Rs.{numberWithCommas(qty)}</p>
          <p><strong>Capital Required: </strong>Rs.{numberWithCommas(capitalNeeded)}</p>
        </Toast.Body>
      </Toast>

      <Button 
        variant="primary" 
        onClick={onCalculate}
      >
        Calculate
      </Button>{' '}{' '}
      <Button 
        variant="outline-primary" 
        onClick={onReset}
      >
        Reset
      </Button>
    </Form>
  )
}

// FormContainer.propTypes = {

// }

export default FormContainer;

