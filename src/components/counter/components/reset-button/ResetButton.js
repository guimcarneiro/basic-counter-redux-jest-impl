import React from 'react';

import './ResetButton.css';

const ResetButton = ({ onClick, ...props }) => {
    return (
        <button type="button" className="reset-button" onClick={ onClick } { ...props }>
           Reset 
        </button>
    );
}

export default ResetButton;