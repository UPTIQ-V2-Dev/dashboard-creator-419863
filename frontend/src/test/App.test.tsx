import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from '../App';
import { render } from './test-utils';

describe('App', () => {
    it('should render without crashing', async () => {
        render(<App />);

        // Look for dashboard specific elements instead
        expect(screen.getByText('AI Workbench')).toBeInTheDocument();
    });
});
