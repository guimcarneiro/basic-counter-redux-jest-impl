import React from 'react';

import './CounterTrace.css';

const CounterTrace = ({ values }) => {

    const renderListOfValues = () => values? values.map( (value, index) => <h4 key={index}>{ value }, </h4> ) : <p>None</p>

    return (
        <div className="counter-trace">
            { renderListOfValues() }
        </div>
    );
}

export default CounterTrace;