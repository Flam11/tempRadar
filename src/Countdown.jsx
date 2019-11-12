import React from 'react';
import propTypes from "prop-types";

import "./Countdown.css";

const Countdown = props => (
    <div className="countdown">
        <strong>{props.id + 1}: {props.name}</strong> - {props.time}
    </div>
);

Countdown.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    time: propTypes.string
};

export default Countdown;