import { combineReducers } from 'redux';

import counterReducer, { getCounterValue } from './counter';
import traceReducer, { getTraceValues } from './trace';

const rootReducer = combineReducers({
    counter: counterReducer,
    trace: traceReducer
  });
  

export { counterReducer, traceReducer, rootReducer, getTraceValues, getCounterValue };