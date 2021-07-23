import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Header from './reuse/Header/Header';
import RiskCalculator from "./RiskCalculator/RiskCalculator";
import PositionsPage from "./PositionsPage/PositionsPage";
import FuturePositions from "./FuturePositions/FuturePositions";
import Login from './Login/Login';
import PrivateRoute from './Auth/PrivateRoute';
import SignUp from './Login/SignUp';
import './App.scss';
class App extends Component {

  render() {
    return (
      <div>
        <div className='Header' >
          <Header />
        </div>
        <PrivateRoute path='/' exact component={RiskCalculator} />
        <PrivateRoute path='/home' exact component={RiskCalculator} />
        <PrivateRoute path='/positions' component={PositionsPage} />
        <PrivateRoute path='/calculator' component={RiskCalculator} />
        <PrivateRoute path='/future-positions' component={FuturePositions} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </div>
    );
  };
};
export default App;
