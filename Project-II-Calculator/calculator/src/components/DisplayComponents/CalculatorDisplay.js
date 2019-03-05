import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
        <div className="calcDisplay">
            <h1 className={props.displayStyle}>{props.text}</h1>
        </div>
    );
}

export default CalculatorDisplay;
