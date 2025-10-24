import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '../../test/test-utils';
import { ProtectedRoute } from '../../../components/auth/ProtectedRoute';
import * as api from '../../../lib/api';

// Mock the api module
vi.mock('../../../lib/api', () => ({
    isAuthenticated: vi.fn()
}));

// Mock react-router-dom Navigate component
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        Navigate: ({ to, state, replace }: any) => {
            mockNavigate(to, state, replace);
            return (
                <div
                    data-testid='navigate'
                    data-to={to}
                />
            );
        },
        useLocation: () => ({
            pathname: '/dashboard',
            state: null
        })
    };
});

describe('ProtectedRoute', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders children when user is authenticated', () => {
        vi.mocked(api.isAuthenticated).mockReturnValue(true);

        render(
            <ProtectedRoute>
                <div data-testid='protected-content'>Protected Content</div>
            </ProtectedRoute>
        );

        expect(screen.getByTestId('protected-content')).toBeInTheDocument();
        expect(screen.queryByTestId('navigate')).not.toBeInTheDocument();
    });

    it('redirects to login when user is not authenticated', () => {
        vi.mocked(api.isAuthenticated).mockReturnValue(false);

        render(
            <ProtectedRoute>
                <div data-testid='protected-content'>Protected Content</div>
            </ProtectedRoute>
        );

        expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
        expect(screen.getByTestId('navigate')).toBeInTheDocument();
        expect(screen.getByTestId('navigate')).toHaveAttribute('data-to', '/login');

        expect(mockNavigate).toHaveBeenCalledWith('/login', { from: { pathname: '/dashboard', state: null } }, true);
    });

    it('passes correct location state for redirect', () => {
        vi.mocked(api.isAuthenticated).mockReturnValue(false);

        // Mock a different location
        vi.doMock('react-router-dom', async () => {
            const actual = await vi.importActual('react-router-dom');
            return {
                ...actual,
                Navigate: ({ to, state, replace }: any) => {
                    mockNavigate(to, state, replace);
                    return (
                        <div
                            data-testid='navigate'
                            data-to={to}
                        />
                    );
                },
                useLocation: () => ({
                    pathname: '/settings',
                    search: '?tab=profile',
                    state: { from: 'dashboard' }
                })
            };
        });

        render(
            <ProtectedRoute>
                <div data-testid='protected-content'>Protected Content</div>
            </ProtectedRoute>
        );

        expect(mockNavigate).toHaveBeenCalledWith(
            '/login',
            expect.objectContaining({
                from: expect.objectContaining({
                    pathname: expect.any(String)
                })
            }),
            true
        );
    });
});
