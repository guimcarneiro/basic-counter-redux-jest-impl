import React from 'react';

import './AddToTraceButton.css';

const AddToTraceButton = ({ onClick, ...props }) => {
    return (
        <button type="button" className="add-to-trace-button" onClick={ onClick } { ...props }>
            Add To Trace
        </button>
    )
};

export default AddToTraceButton;