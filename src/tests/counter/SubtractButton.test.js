import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { SubtractButton } from '../../components/counter/components';

describe('subtractButton testing', () => {
    const testId = 'subtractButtonId';
    
    afterEach(cleanup);

    it('should render component', () => {
        const { getByTestId } = render(<SubtractButton data-testid={testId} onClick={ () => jest.fn() }/>);
        const subtractButton = getByTestId(testId);

        expect(subtractButton).toBeDefined();
    });

    it('should call onClick when clicked', () => {
        const handleClick = jest.fn();

        const { getByTestId } = render(<SubtractButton data-testid={testId} onClick={ handleClick }/>);
        const subtractButton = getByTestId(testId);

        fireEvent.click(subtractButton);

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})