import { describe, it, expect, afterEach, beforeAll, afterAll } from 'vitest';
import { dashboardService } from '../../services/dashboardService';
import { server } from '../../test/mocks/server';

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

describe('dashboardService', () => {
    describe('getDashboardData', () => {
        it('returns dashboard data successfully', async () => {
            const data = await dashboardService.getDashboardData();

            expect(data).toBeDefined();
            expect(data.stats).toBeDefined();
            expect(data.recentItems).toBeInstanceOf(Array);
            expect(data.user).toBeDefined();
            expect(data.quickActions).toBeInstanceOf(Array);
            expect(data.welcomeVideo).toBeDefined();
        });

        it('includes correct user data', async () => {
            const data = await dashboardService.getDashboardData();

            expect(data.user.name).toBe('Sagar Test');
            expect(data.user.email).toBe('sagar@example.com');
            expect(data.user.initials).toBe('ST');
        });
    });

    describe('getDashboardStats', () => {
        it('returns stats with correct structure', async () => {
            const stats = await dashboardService.getDashboardStats();

            expect(stats).toHaveProperty('skillsCount');
            expect(stats).toHaveProperty('totalApps');
            expect(stats).toHaveProperty('totalAgents');
            expect(stats).toHaveProperty('activeProjects');
            expect(typeof stats.skillsCount).toBe('number');
        });

        it('returns expected skills count', async () => {
            const stats = await dashboardService.getDashboardStats();
            expect(stats.skillsCount).toBe(1256);
        });
    });

    describe('getRecentItems', () => {
        it('returns all recent items without limit', async () => {
            const items = await dashboardService.getRecentItems();

            expect(items).toBeInstanceOf(Array);
            expect(items.length).toBe(5); // Based on mock data
        });

        it('respects limit parameter', async () => {
            const items = await dashboardService.getRecentItems(3);

            expect(items).toBeInstanceOf(Array);
            expect(items.length).toBe(3);
        });

        it('returns items with correct structure', async () => {
            const items = await dashboardService.getRecentItems();

            const firstItem = items[0];
            expect(firstItem).toHaveProperty('id');
            expect(firstItem).toHaveProperty('type');
            expect(firstItem).toHaveProperty('name');
            expect(firstItem).toHaveProperty('lastUpdated');
            expect(firstItem).toHaveProperty('status');
        });
    });

    describe('getSkillsCount', () => {
        it('returns skills count object', async () => {
            const result = await dashboardService.getSkillsCount();

            expect(result).toHaveProperty('skillsCount');
            expect(typeof result.skillsCount).toBe('number');
            expect(result.skillsCount).toBe(1256);
        });
    });
});
