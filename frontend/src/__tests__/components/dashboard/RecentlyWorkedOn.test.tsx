import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { RecentlyWorkedOn } from '../../../components/dashboard/RecentlyWorkedOn';
import { render } from '../../../test/test-utils';
import { mockRecentItems } from '../../../test/fixtures/dashboardFixtures';

describe('RecentlyWorkedOn', () => {
    it('renders recent items correctly', () => {
        render(<RecentlyWorkedOn items={mockRecentItems} />);

        expect(screen.getByText('Test Agent')).toBeInTheDocument();
        expect(screen.getByText('Test App')).toBeInTheDocument();
    });

    it('displays item details correctly', () => {
        render(<RecentlyWorkedOn items={mockRecentItems} />);

        expect(screen.getByText('A test agent for testing')).toBeInTheDocument();
        expect(screen.getByText('Last updated on Oct 16, 2025')).toBeInTheDocument();
        expect(screen.getByText('active')).toBeInTheDocument();
    });

    it('calls onItemClick when item is clicked', () => {
        const mockOnItemClick = vi.fn();
        render(
            <RecentlyWorkedOn
                items={mockRecentItems}
                onItemClick={mockOnItemClick}
            />
        );

        const firstItem = screen.getByText('Test Agent');
        fireEvent.click(firstItem);

        expect(mockOnItemClick).toHaveBeenCalledWith(mockRecentItems[0]);
    });

    it('renders empty state when no items', () => {
        render(<RecentlyWorkedOn items={[]} />);

        expect(screen.getByText('No recent items to show')).toBeInTheDocument();
        expect(screen.queryByText('Test Agent')).not.toBeInTheDocument();
    });

    it('displays correct status badges', () => {
        render(<RecentlyWorkedOn items={mockRecentItems} />);

        expect(screen.getByText('active')).toBeInTheDocument();
        expect(screen.getByText('draft')).toBeInTheDocument();
    });

    it('shows item type badges', () => {
        render(<RecentlyWorkedOn items={mockRecentItems} />);

        expect(screen.getByText('agent')).toBeInTheDocument();
        expect(screen.getByText('app')).toBeInTheDocument();
    });

    it('renders Recently Worked On title', () => {
        render(<RecentlyWorkedOn items={mockRecentItems} />);
        expect(screen.getByText('Recently Worked On')).toBeInTheDocument();
    });
});
