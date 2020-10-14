import React from 'react';

import './AddButton.css';

const AddButton = ({ onClick, ...props }) => {
    return (
        <button type="button" className="add-button" onClick={ onClick } {...props}>
            Plus 1
        </button>
    );
}

export default AddButton;