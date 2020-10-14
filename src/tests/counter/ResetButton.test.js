import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { ResetButton } from '../../components/counter/components';

describe('resetButton testing', () => {
    const testId = 'resetButtonId';

    afterEach(cleanup);

    it('should render resetButton', () => {
        const { getByTestId } = render(<ResetButton data-testid={testId} onClick={() => jest.fn()} />);

        expect(getByTestId(testId)).toBeDefined();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        
        const { getByTestId } = render(<ResetButton data-testid={testId} onClick={handleClick} />);

        const resetButton = getByTestId(testId);

        fireEvent.click(resetButton);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

});