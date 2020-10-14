import React from 'react';
import './Counter.css';

import { connect } from 'react-redux';
import { COUNTER, TRACE } from '../../store/actionTypes';

import { AddButton, AddToTraceButton, CounterTrace, ResetButton, SubtractButton } from './components';
import { getCounterValue, getTraceValues } from '../../store/reducers';

const Counter = (props) => {

    const { counter, trace, onIncrement, onDecrement, onReset, addToTrace, ...other } = props;

    return (
        <div className="counter-container" { ...other }>
            <h1>Simple Counter</h1>
            <h1 className="counter-text">{ counter }</h1>
            <div className="buttons-container">
                <AddButton onClick={ onIncrement } />
                <ResetButton onClick={ onReset } />
                <SubtractButton onClick={ onDecrement } />
            </div>
            <div className="add-to-trace-button-container">
                <AddToTraceButton onClick={ () => addToTrace(counter) } />
            </div>
            <CounterTrace values={ trace } />
        </div>
    );
}


// Métodos "dispatch", que lançam Actions
const onIncrement = () => {
    return { type: COUNTER.INCREMENT };
};
const onDecrement = () => {
    return { type: COUNTER.DECREMENT };
};
const onReset = () => {
    return { type: COUNTER.RESET };
}
const addToTrace = value => {
    return { type: TRACE.INSERT, value }
}

// Mapeia a parte(slice) do state global desejado para ser injetado via props
const mapStateToProps = state => {
    return {
        counter: getCounterValue(state),
        trace: getTraceValues(state)
    }
}

// Mapeia as funções que alteram o state global para ser injetado via props
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(onIncrement()),
        onDecrement: () => dispatch(onDecrement()),
        onReset: () => dispatch(onReset()),
        addToTrace: value => dispatch(addToTrace(value))
    }
}

// Injeta via component HOC os "slices" do state global necessários ao componente,
// e injeta também as funções "dispatch", que lançam Actions, que alterarão o state
// global de maneira previsível.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);