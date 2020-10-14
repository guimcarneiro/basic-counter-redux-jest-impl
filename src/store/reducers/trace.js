import { TRACE } from '../actionTypes';

const initialState = {
    values: []
}

const traceReducer = (state = initialState, { type, value }) => {
    
    switch(type){
        case TRACE.INSERT:
            return {
                ...state,
                values: [...state.values, value ]
            };
        default:
            return state;
    }
}

export const getTraceValues = (state) => {
    return state.trace.values;
}

export default traceReducer;