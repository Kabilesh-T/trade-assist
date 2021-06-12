import React, { Component } from 'react'
import Header from './reuse/Header/Header';
import RiskCalculator from "./RiskCalculator/RiskCalculator";
import PositionsPage from "./PositionsPage/PositionsPage";

class App extends Component {

  renderPage = () => {
    const route = window.location.pathname;
    if(route === '/positions') {
      return <PositionsPage/>
    }
    return <RiskCalculator/>
  };

  render() {
    return (
      <div>
        <Header/>
        {this.renderPage()}
      </div>
    );
  };
};
export default App;
