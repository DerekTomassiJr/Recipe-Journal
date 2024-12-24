import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/RecipeTiming.css';

const RecipeTiming = ({ timingHeader, timingValue }) => {
    return (
        <div className="recipe-timer-container">
            <h5 className="timing-header">{timingHeader}</h5>
            <p className="timing-value">{timingValue}</p>
        </div>
    );
}

RecipeTiming.defaultProps = {
    timingHeader: "Null",
    timingValue: 0,
}

RecipeTiming.propTypes = {
    timingHeader: PropTypes.string,
    timingValue: PropTypes.number,
}

export default RecipeTiming;
