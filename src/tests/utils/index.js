import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from '../../store/reducers';


const renderWithDependencies = (component) => {
    const store = createStore(rootReducer);
    
    const container = (
        <Provider store={store}>
            {component}
        </Provider>
    )

    return render(container);
}

export { renderWithDependencies };