import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Header from './reuse/Header/Header';
import RiskCalculator from "./RiskCalculator/RiskCalculator";
import PositionsPage from "./PositionsPage/PositionsPage";
import Login from './Login/Login';
import PrivateRoute from './Auth/PrivateRoute';
import SignUp from './Login/SignUp';
import { AuthContext } from './Auth/Auth';
import './App.scss';

const { currentUserState } = AuthContext;
class App extends Component {
  state = {
    currentUser: currentUserState
  }
  render() {
    const { currentUser } = this.state;
    console.log();
    return (
      <div>
        {currentUser && (
          <div className='Header' >
            <Header />
          </div>
        )}
        <PrivateRoute path='/' exact component={RiskCalculator} />
        <PrivateRoute path='/home' exact component={RiskCalculator} />
        <PrivateRoute path='/positions' component={PositionsPage} />
        <PrivateRoute path='/calculator' component={RiskCalculator} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </div>
    );
  };
};
export default App;
