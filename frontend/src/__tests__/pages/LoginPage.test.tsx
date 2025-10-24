import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginPage } from '../../pages/LoginPage';
import { render } from '../../test/test-utils';
import * as authService from '../../services/auth';

// Mock the authService
vi.mock('../../services/auth', () => ({
    authService: {
        login: vi.fn()
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

describe('LoginPage', () => {
    const user = userEvent.setup();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders login form correctly', () => {
        render(<LoginPage />);

        expect(screen.getByText('Welcome back')).toBeInTheDocument();
        expect(screen.getByText('Sign in to your AI Workbench account')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('displays password visibility toggle', async () => {
        render(<LoginPage />);

        const passwordInput = screen.getByLabelText('Password');
        const toggleButtons = screen.getAllByRole('button');
        const toggleButton = toggleButtons.find(
            button => button.querySelector('.lucide-eye') || button.querySelector('.lucide-eye-off')
        ) as HTMLElement;

        // Initially password should be hidden
        expect(passwordInput).toHaveAttribute('type', 'password');

        // Click to show password
        await user.click(toggleButton);
        expect(passwordInput).toHaveAttribute('type', 'text');

        // Click to hide password again
        await user.click(toggleButton);
        expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('validates email format', async () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText('Email');
        const submitButton = screen.getByRole('button', { name: /sign in/i });

        await user.type(emailInput, 'invalid-email');
        await user.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
        });
    });

    it('validates password length', async () => {
        render(<LoginPage />);

        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: /sign in/i });

        await user.type(passwordInput, '123');
        await user.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
        });
    });

    it('submits login form with valid data', async () => {
        const mockLogin = vi.fn().mockResolvedValue({
            user: { id: 1, email: 'test@example.com', name: 'Test User' },
            tokens: { access: { token: 'test-token', expires: '' }, refresh: { token: 'refresh-token', expires: '' } }
        });

        vi.mocked(authService.authService.login).mockImplementation(mockLogin);

        render(<LoginPage />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: /sign in/i });

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');
        await user.click(submitButton);

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith({
                email: 'test@example.com',
                password: 'password123'
            });
        });

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/');
        });
    });

    it('handles login failure', async () => {
        const mockLogin = vi.fn().mockRejectedValue(new Error('Invalid credentials'));

        vi.mocked(authService.authService.login).mockImplementation(mockLogin);

        render(<LoginPage />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: /sign in/i });

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'wrongpassword');
        await user.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
        });

        expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('shows loading state during login', async () => {
        const mockLogin = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

        vi.mocked(authService.authService.login).mockImplementation(mockLogin);

        render(<LoginPage />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: /sign in/i });

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');
        await user.click(submitButton);

        expect(screen.getByText('Signing in...')).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });

    it('applies error styling to invalid fields', async () => {
        render(<LoginPage />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: /sign in/i });

        await user.type(emailInput, 'invalid-email');
        await user.type(passwordInput, '123');
        await user.click(submitButton);

        await waitFor(() => {
            expect(emailInput).toHaveClass('border-red-500');
            expect(passwordInput).toHaveClass('border-red-500');
        });
    });
});
