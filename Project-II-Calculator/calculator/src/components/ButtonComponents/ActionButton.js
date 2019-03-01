import React from 'react';
import './Button.css';

function ActionButton() {
    return (
        <div className="actButton">
            <div className="rightButtons">
                <button className="divide">/</button>
                <button className="multiply">*</button>
                <button className="minus">-</button>
                <button className="add">+</button>
                <button className="equal">=</button>
            </div>
            <p>action button</p>
        </div>
    );
}

export default ActionButton;