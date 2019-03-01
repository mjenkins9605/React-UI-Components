import React from 'react';
import './Button.css';

function NumberButton() {
    return (
        <div className="numButton">
            <button className="one">1</button>
            <button className="two">2</button>
            <button className="three">3</button>
            <button className="four">4</button>
            <button className="five">5</button>
            <button className="six">6</button>
            <button className="seven">7</button>
            <button className="eight">8</button>
            <button className="nine">9</button>
            <button className="zero">0</button>
        </div>
    );
}

export default NumberButton;