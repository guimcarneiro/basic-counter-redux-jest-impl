import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';

import { Counter } from '../../components';
import { renderWithDependencies } from '../utils';

describe('counter testing', () => {
    const testId = 'counterId';

    const addButtonText = 'Plus 1';
    const subtractButtonText = 'Minus 1';
    const resetButtonText = 'Reset';

    afterEach(cleanup);

    it('should render component', () => {
        const { getByTestId } = renderWithDependencies(<Counter data-testid={testId} />);

        expect(getByTestId(testId)).toBeDefined();
    });

    it('should display counter value output', () => {
        const { getByText } = renderWithDependencies(<Counter data-testid={testId} />);

        const counterValueOutput = getByText('0');
        expect(counterValueOutput).toBeDefined();
    })

    it('should add on click addButton', () => {
        const { getByText } = renderWithDependencies(<Counter data-testid={testId} />);

        //Get counter value output
        const counterValueOutput = getByText('0');

        //Get add button
        const addButton = getByText(addButtonText);

        //Expect to add 1
        fireEvent.click(addButton);
        expect(counterValueOutput.innerHTML).toMatch('1');

        //Expect to add 1 more
        fireEvent.click(addButton);
        expect(counterValueOutput.innerHTML).toMatch('2');
    });

    it('should subtract on click subtractButton', () => {
        const { getByText } = renderWithDependencies(<Counter data-testid={testId} />);

        const counterValueOutput = getByText('0');

        const subtractButton = getByText(subtractButtonText);

        fireEvent.click(subtractButton);
        expect(counterValueOutput.innerHTML).toMatch('-1');

        fireEvent.click(subtractButton);
        expect(counterValueOutput.innerHTML).toMatch('-2');
    });

    it('should reset on click resetButton', () => {
        const { getByText } = renderWithDependencies(<Counter data-testid={testId} />);

        const counterValueOutput = getByText('0');

        const addButton = getByText(addButtonText);
        const resetButton = getByText(resetButtonText);

        fireEvent.click(resetButton);
        expect(counterValueOutput.innerHTML).toMatch('0');

        //Add 2 to counter
        fireEvent.click(addButton);
        fireEvent.click(addButton);

        //Reset
        fireEvent.click(resetButton);
        expect(counterValueOutput.innerHTML).toMatch('0');
    })
});