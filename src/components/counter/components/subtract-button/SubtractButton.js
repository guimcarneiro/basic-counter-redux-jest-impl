import React from 'react';

import './SubtractButton.css';

const SubtractButton = ({ onClick, ...props }) => {
    return (
        <button type="button" className="subtract-button" onClick={ onClick } {...props}>
            Minus 1
        </button>
    )
}

export default SubtractButton;