import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { authService } from '../../services/auth';
import { mockAuthResponse } from '../../data/mockData';
import { setAuthData, clearAuthData } from '../../lib/api';

// Mock the api module
vi.mock('../../lib/api', () => ({
    api: {
        post: vi.fn()
    },
    setAuthData: vi.fn(),
    clearAuthData: vi.fn(),
    getStoredRefreshToken: vi.fn()
}));

// Mock the utils module
vi.mock('../../lib/utils', () => ({
    mockApiDelay: vi.fn().mockResolvedValue(undefined)
}));

describe('authService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // Set environment variable for non-mock mode by default
        vi.stubEnv('VITE_USE_MOCK_DATA', 'false');
    });

    afterEach(() => {
        vi.unstubAllEnvs();
    });

    describe('login', () => {
        it('calls API and sets auth data on successful login', async () => {
            const { api } = await import('../../lib/api');
            const credentials = { email: 'test@example.com', password: 'password123' };
            const mockResponse = { data: mockAuthResponse };

            vi.mocked(api.post).mockResolvedValue(mockResponse);

            const result = await authService.login(credentials);

            expect(api.post).toHaveBeenCalledWith('/auth/login', credentials);
            expect(setAuthData).toHaveBeenCalledWith(mockAuthResponse);
            expect(result).toEqual(mockAuthResponse);
        });

        it('uses mock data when VITE_USE_MOCK_DATA is true', async () => {
            vi.stubEnv('VITE_USE_MOCK_DATA', 'true');
            const { api } = await import('../../lib/api');
            const credentials = { email: 'test@example.com', password: 'password123' };

            const result = await authService.login(credentials);

            expect(api.post).not.toHaveBeenCalled();
            expect(result).toEqual(mockAuthResponse);
        });

        it('throws error on failed login', async () => {
            const { api } = await import('../../lib/api');
            const credentials = { email: 'test@example.com', password: 'wrongpassword' };
            const error = new Error('Invalid credentials');

            vi.mocked(api.post).mockRejectedValue(error);

            await expect(authService.login(credentials)).rejects.toThrow('Invalid credentials');
            expect(setAuthData).not.toHaveBeenCalled();
        });
    });

    describe('register', () => {
        it('calls API and sets auth data on successful registration', async () => {
            const { api } = await import('../../lib/api');
            const userData = { name: 'Test User', email: 'test@example.com', password: 'password123' };
            const mockResponse = { data: mockAuthResponse };

            vi.mocked(api.post).mockResolvedValue(mockResponse);

            const result = await authService.register(userData);

            expect(api.post).toHaveBeenCalledWith('/auth/register', userData);
            expect(setAuthData).toHaveBeenCalledWith(mockAuthResponse);
            expect(result).toEqual(mockAuthResponse);
        });

        it('uses mock data when VITE_USE_MOCK_DATA is true', async () => {
            vi.stubEnv('VITE_USE_MOCK_DATA', 'true');
            const { api } = await import('../../lib/api');
            const userData = { name: 'Test User', email: 'test@example.com', password: 'password123' };

            const result = await authService.register(userData);

            expect(api.post).not.toHaveBeenCalled();
            expect(result).toEqual(mockAuthResponse);
        });
    });

    describe('refreshToken', () => {
        it('calls API and sets auth data on successful refresh', async () => {
            const { api } = await import('../../lib/api');
            const mockResponse = { data: mockAuthResponse };

            vi.mocked(api.post).mockResolvedValue(mockResponse);

            const result = await authService.refreshToken();

            expect(api.post).toHaveBeenCalledWith('/auth/refresh');
            expect(setAuthData).toHaveBeenCalledWith(mockAuthResponse);
            expect(result).toEqual(mockAuthResponse);
        });

        it('uses mock data when VITE_USE_MOCK_DATA is true', async () => {
            vi.stubEnv('VITE_USE_MOCK_DATA', 'true');
            const { api } = await import('../../lib/api');

            const result = await authService.refreshToken();

            expect(api.post).not.toHaveBeenCalled();
            expect(result).toEqual(mockAuthResponse);
        });
    });

    describe('logout', () => {
        it('calls API with refresh token and clears auth data', async () => {
            const { api, getStoredRefreshToken } = await import('../../lib/api');
            const refreshToken = 'mock-refresh-token';

            vi.mocked(getStoredRefreshToken).mockReturnValue(refreshToken);
            vi.mocked(api.post).mockResolvedValue({ data: { message: 'Logged out successfully' } });

            await authService.logout();

            expect(api.post).toHaveBeenCalledWith('/auth/logout', { refreshToken });
            expect(clearAuthData).toHaveBeenCalled();
        });

        it('throws error when no refresh token found', async () => {
            const { getStoredRefreshToken } = await import('../../lib/api');

            vi.mocked(getStoredRefreshToken).mockReturnValue(null);

            await expect(authService.logout()).rejects.toThrow('No refresh token found');
            expect(clearAuthData).not.toHaveBeenCalled();
        });

        it('uses mock data when VITE_USE_MOCK_DATA is true', async () => {
            vi.stubEnv('VITE_USE_MOCK_DATA', 'true');
            const { api } = await import('../../lib/api');

            await authService.logout();

            expect(api.post).not.toHaveBeenCalled();
        });
    });
});
