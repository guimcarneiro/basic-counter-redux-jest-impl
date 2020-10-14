import { COUNTER } from '../actionTypes';

const initialState = {
    value: 0,
}

const counterReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case COUNTER.INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
        case COUNTER.DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }
        case COUNTER.RESET:
            return {
                ...state,
                value: 0
            }
        default:
            return state;
    }
}

export const getCounterValue = (state) => {
    return state.counter.value;
}

export default counterReducer;