import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div className="actButton">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>
    );
} 

export default ActionButton; 