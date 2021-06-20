import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Header from './reuse/Header/Header';
import RiskCalculator from "./RiskCalculator/RiskCalculator";
import PositionsPage from "./PositionsPage/PositionsPage";

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Route path='/' exact>
          <RiskCalculator />
        </Route>
        <Route path='/positions' component={PositionsPage}>
        </Route>
        <Route path='/calculator'>
          <RiskCalculator />
        </Route>
      </div>
    );
  };
};
export default App;
