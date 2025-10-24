import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { WelcomeSection } from '../../../components/dashboard/WelcomeSection';
import { render } from '../../../test/test-utils';
import { mockUser } from '../../../test/fixtures/dashboardFixtures';

describe('WelcomeSection', () => {
    it('displays user greeting correctly', () => {
        render(<WelcomeSection user={mockUser} />);
        expect(screen.getByText(`Hello, ${mockUser.name} What would you like to build today?`)).toBeInTheDocument();
    });

    it('displays default greeting when no user provided', () => {
        render(<WelcomeSection />);
        expect(screen.getByText('Hello, User What would you like to build today?')).toBeInTheDocument();
    });

    it('calls onCreateApp when form is submitted with description', () => {
        const mockOnCreateApp = vi.fn();
        render(<WelcomeSection onCreateApp={mockOnCreateApp} />);

        const textarea = screen.getByPlaceholderText('Describe the app you want to create...');
        const sendButton = screen.getByRole('button', { name: /send/i });

        fireEvent.change(textarea, { target: { value: 'Test app description' } });
        fireEvent.click(sendButton);

        expect(mockOnCreateApp).toHaveBeenCalledWith('Test app description');
    });

    it('does not call onCreateApp when description is empty', () => {
        const mockOnCreateApp = vi.fn();
        render(<WelcomeSection onCreateApp={mockOnCreateApp} />);

        const sendButton = screen.getByRole('button', { name: /send/i });
        fireEvent.click(sendButton);

        expect(mockOnCreateApp).not.toHaveBeenCalled();
    });

    it('renders attach and brand guidelines buttons', () => {
        render(<WelcomeSection />);
        expect(screen.getByRole('button', { name: /attach/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /brand guidelines/i })).toBeInTheDocument();
    });
});
