import React from 'react';
import './Card.css';

import CardBanner from "./CardBanner";

function CardContent() {
    return (
        <a href="https://www.reactjs.org">
            <div className="cardContent">
                <CardBanner />
                <div className="cardText">
                    <h2 className="getStart">Get started with React</h2>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                    <h3 className="website">reactjs.org</h3>
                </div>
            </div>
        </a>
    );
}

export default CardContent;