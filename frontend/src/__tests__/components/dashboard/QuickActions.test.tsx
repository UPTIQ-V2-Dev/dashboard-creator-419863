import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { QuickActions } from '../../../components/dashboard/QuickActions';
import { render } from '../../../test/test-utils';
import { mockDashboardDataFixture } from '../../../test/fixtures/dashboardFixtures';

describe('QuickActions', () => {
    const mockActions = mockDashboardDataFixture.quickActions;

    it('renders all quick actions', () => {
        render(<QuickActions actions={mockActions} />);

        expect(screen.getByText('App')).toBeInTheDocument();
        expect(screen.getByText('Agent')).toBeInTheDocument();
    });

    it('calls onActionClick when action is clicked', () => {
        const mockOnActionClick = vi.fn();
        render(
            <QuickActions
                actions={mockActions}
                onActionClick={mockOnActionClick}
            />
        );

        const appButton = screen.getByText('App');
        fireEvent.click(appButton);

        expect(mockOnActionClick).toHaveBeenCalledWith(mockActions[0]);
    });

    it('applies correct styling for app action', () => {
        render(<QuickActions actions={mockActions} />);

        const appButton = screen.getByText('App').closest('button');
        expect(appButton).toHaveClass('border-green-200');
    });

    it('applies correct styling for agent action', () => {
        render(<QuickActions actions={mockActions} />);

        const agentButton = screen.getByText('Agent').closest('button');
        expect(agentButton).toHaveClass('border-gray-200');
    });

    it('renders empty state when no actions provided', () => {
        render(<QuickActions actions={[]} />);

        expect(screen.queryByText('App')).not.toBeInTheDocument();
        expect(screen.queryByText('Agent')).not.toBeInTheDocument();
    });
});
