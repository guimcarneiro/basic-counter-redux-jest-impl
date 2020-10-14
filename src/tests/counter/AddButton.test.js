import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { AddButton } from '../../components/counter/components';

describe('addButton testing', () => {
    const testId = 'addButtonId';

    afterEach(cleanup);

    it('should render the component', () => {
        const { getByTestId } = render(<AddButton data-testid={testId} onClick={ () => jest.fn()} />);
        const addButton = getByTestId(testId);
        
        expect(addButton).toBeDefined();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<AddButton data-testid={testId} onClick={ handleClick } />);

        const addButton = getByTestId(testId);
        fireEvent.click(addButton);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

});