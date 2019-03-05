import React from 'react';
import './Button.css';

import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

function ButtonContainer() {
    return (
        <div className="buttonCont">
            <div className="buttonNumbers">
                <ActionButton text="clear" buttonStyle="bigButtonCss" />

                <NumberButton text="7" buttonStyle="numCss" />
                <NumberButton text="8" buttonStyle="numCss" />
                <NumberButton text="9" buttonStyle="numCss" />
                <NumberButton text="4" buttonStyle="numCss" />
                <NumberButton text="5" buttonStyle="numCss" />
                <NumberButton text="6" buttonStyle="numCss" />
                <NumberButton text="1" buttonStyle="numCss" />
                <NumberButton text="2" buttonStyle="numCss" />
                <NumberButton text="3" buttonStyle="numCss" />

                <ActionButton text="0" buttonStyle="bigButtonCss" />
            </div>

            <div className="buttonSymbols">
                <NumberButton text="÷" buttonStyle="symbolCss" />
                <NumberButton text="x" buttonStyle="symbolCss" />
                <NumberButton text="-" buttonStyle="symbolCss" />
                <NumberButton text="+" buttonStyle="symbolCss" />
                <NumberButton text="=" buttonStyle="symbolCss" />
            </div>
        </div>
    );
}

export default ButtonContainer;