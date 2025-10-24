import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test/test-utils';
import { Header } from '../../../components/layout/Header';
import * as authService from '../../../services/auth';

// Mock the authService
vi.mock('../../../services/auth', () => ({
    authService: {
        logout: vi.fn()
    }
}));

// Mock react-router-dom navigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate
    };
});

const mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    initials: 'JD',
    avatar: 'https://example.com/avatar.jpg'
};

describe('Header', () => {
    const user = userEvent.setup();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders header with brand and navigation elements', () => {
        render(<Header user={mockUser} />);

        expect(screen.getByText('AI Workbench')).toBeInTheDocument();
        expect(screen.getByText('Marketplace')).toBeInTheDocument();
        expect(screen.getByText('News & Alerts')).toBeInTheDocument();
        expect(screen.getByText('Help and Documentation')).toBeInTheDocument();
    });

    it('displays user information in dropdown', async () => {
        render(<Header user={mockUser} />);

        const avatarButton = screen.getByRole('button', { name: /john doe/i });
        await user.click(avatarButton);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    });

    it('shows user initials in avatar when no image provided', () => {
        const userWithoutAvatar = { ...mockUser, avatar: undefined };
        render(<Header user={userWithoutAvatar} />);

        expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles logout successfully', async () => {
        const mockLogout = vi.fn().mockResolvedValue(undefined);
        vi.mocked(authService.authService.logout).mockImplementation(mockLogout);

        render(<Header user={mockUser} />);

        // Open user dropdown
        const avatarButton = screen.getByRole('button', { name: /john doe/i });
        await user.click(avatarButton);

        // Click logout
        const logoutButton = screen.getByText('Sign Out');
        await user.click(logoutButton);

        await waitFor(() => {
            expect(mockLogout).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });

    it('handles logout failure gracefully', async () => {
        const mockLogout = vi.fn().mockRejectedValue(new Error('Logout failed'));
        vi.mocked(authService.authService.logout).mockImplementation(mockLogout);

        render(<Header user={mockUser} />);

        // Open user dropdown
        const avatarButton = screen.getByRole('button', { name: /john doe/i });
        await user.click(avatarButton);

        // Click logout
        const logoutButton = screen.getByText('Sign Out');
        await user.click(logoutButton);

        await waitFor(() => {
            expect(mockLogout).toHaveBeenCalled();
            // Should still navigate to login even on error
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });

    it('shows loading state during logout', async () => {
        const mockLogout = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
        vi.mocked(authService.authService.logout).mockImplementation(mockLogout);

        render(<Header user={mockUser} />);

        // Open user dropdown
        const avatarButton = screen.getByRole('button', { name: /john doe/i });
        await user.click(avatarButton);

        // Click logout
        const logoutButton = screen.getByText('Sign Out');
        await user.click(logoutButton);

        expect(screen.getByText('Signing out...')).toBeInTheDocument();

        // Wait for logout to complete
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });

    it('disables logout button during logout process', async () => {
        const mockLogout = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
        vi.mocked(authService.authService.logout).mockImplementation(mockLogout);

        render(<Header user={mockUser} />);

        // Open user dropdown
        const avatarButton = screen.getByRole('button', { name: /john doe/i });
        await user.click(avatarButton);

        // Click logout
        const logoutButton = screen.getByText('Sign Out');
        await user.click(logoutButton);

        // The logout menu item should be disabled
        const loadingLogoutButton = screen.getByText('Signing out...');
        expect(loadingLogoutButton).toBeInTheDocument();

        // Wait for logout to complete
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });

    it('renders profile menu items', async () => {
        render(<Header user={mockUser} />);

        // Open user dropdown
        const avatarButton = screen.getByRole('button', { name: /john doe/i });
        await user.click(avatarButton);

        expect(screen.getByText('Profile Settings')).toBeInTheDocument();
        expect(screen.getByText('Workspace Settings')).toBeInTheDocument();
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    });

    it('renders with default values when no user provided', () => {
        render(<Header />);

        expect(screen.getByText('AI Workbench')).toBeInTheDocument();
        expect(screen.getByText('U')).toBeInTheDocument(); // Default initials
        expect(screen.getByText('User')).toBeInTheDocument(); // Default name
    });
});
