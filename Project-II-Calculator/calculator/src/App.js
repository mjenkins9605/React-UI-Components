import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay />
      <ActionButton />
      <ButtonContainer />
    </div>
  );
};

export default App;
