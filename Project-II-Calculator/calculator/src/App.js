import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay text="0" displayStyle="displayCss" />
      <ButtonContainer />
    </div>
  );
};

export default App;
