import { describe, it, expect, vi, beforeAll, afterEach, afterAll } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { DashboardPage } from '../../pages/DashboardPage';
import { render } from '../../test/test-utils';
import { server } from '../../test/mocks/server';

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

// Mock console methods to avoid noise in tests
beforeAll(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
});

describe('DashboardPage', () => {
    it('renders loading state initially', () => {
        render(<DashboardPage />);

        // Should show loading skeleton
        const skeletonElements = document.querySelectorAll('.animate-pulse');
        expect(skeletonElements.length).toBeGreaterThan(0);
    });

    it('renders dashboard content after loading', async () => {
        render(<DashboardPage />);

        await waitFor(
            () => {
                expect(screen.getByText('Hello, Sagar Test What would you like to build today?')).toBeInTheDocument();
            },
            { timeout: 3000 }
        );

        expect(screen.getByText('Recently Worked On')).toBeInTheDocument();
        expect(screen.getByText('1,256')).toBeInTheDocument(); // Skills count
    });

    it('renders welcome section with user greeting', async () => {
        render(<DashboardPage />);

        await waitFor(() => {
            expect(screen.getByText('Hello, Sagar Test What would you like to build today?')).toBeInTheDocument();
        });
    });

    it('renders quick actions', async () => {
        render(<DashboardPage />);

        await waitFor(() => {
            expect(screen.getByText('App')).toBeInTheDocument();
            expect(screen.getByText('Agent')).toBeInTheDocument();
        });
    });

    it('renders skills counter', async () => {
        render(<DashboardPage />);

        await waitFor(() => {
            expect(screen.getByText('1,256')).toBeInTheDocument();
            expect(screen.getByText('Skills and Counting...')).toBeInTheDocument();
        });
    });

    it('renders recent items list', async () => {
        render(<DashboardPage />);

        await waitFor(() => {
            expect(screen.getByText('X Data Analyzer Agent')).toBeInTheDocument();
            expect(screen.getByText('Webscraping Data Scraper')).toBeInTheDocument();
        });
    });

    it('renders welcome video section', async () => {
        render(<DashboardPage />);

        await waitFor(() => {
            expect(screen.getByText('Welcome to Uptiq AI Workbench!')).toBeInTheDocument();
        });
    });

    it('renders sidebar navigation', async () => {
        render(<DashboardPage />);

        await waitFor(() => {
            expect(screen.getByText('Dashboard')).toBeInTheDocument();
            expect(screen.getByText('App Builder')).toBeInTheDocument();
            expect(screen.getByText('Agent Builder')).toBeInTheDocument();
        });
    });

    it('renders header with user info', async () => {
        render(<DashboardPage />);

        await waitFor(() => {
            expect(screen.getByText('AI Workbench')).toBeInTheDocument();
            expect(screen.getByText('Marketplace')).toBeInTheDocument();
        });
    });
});
