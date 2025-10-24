import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import {
    useDashboard,
    useDashboardStats,
    useRecentItems,
    useSkillsCount,
    useCurrentUser
} from '../../hooks/useDashboard';
import { server } from '../../test/mocks/server';

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                gcTime: 0
            }
        }
    });

    return ({ children }: { children: ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

describe('useDashboard', () => {
    it('returns dashboard data successfully', async () => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useDashboard(), { wrapper });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.data).toBeDefined();
        expect(result.current.data?.stats).toBeDefined();
        expect(result.current.data?.recentItems).toBeInstanceOf(Array);
    });

    it('starts with loading state', () => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useDashboard(), { wrapper });

        expect(result.current.isLoading).toBe(true);
        expect(result.current.data).toBeUndefined();
    });
});

describe('useDashboardStats', () => {
    it('returns dashboard stats correctly', async () => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useDashboardStats(), { wrapper });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.data).toBeDefined();
        expect(result.current.data?.skillsCount).toBe(1256);
        expect(typeof result.current.data?.totalApps).toBe('number');
    });
});

describe('useRecentItems', () => {
    it('returns recent items without limit', async () => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useRecentItems(), { wrapper });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.data).toBeInstanceOf(Array);
        expect(result.current.data?.length).toBe(5);
    });

    it('respects limit parameter', async () => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useRecentItems(2), { wrapper });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.data).toBeInstanceOf(Array);
        expect(result.current.data?.length).toBe(2);
    });
});

describe('useSkillsCount', () => {
    it('returns skills count correctly', async () => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useSkillsCount(), { wrapper });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.data?.skillsCount).toBe(1256);
    });
});

describe('useCurrentUser', () => {
    it('returns current user data', async () => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useCurrentUser(), { wrapper });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.data).toBeDefined();
        expect(result.current.data?.name).toBe('Sagar Test');
        expect(result.current.data?.email).toBe('sagar@example.com');
    });
});
