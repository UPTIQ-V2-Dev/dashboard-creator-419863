import { describe, it, expect } from 'vitest';
import { dashboardService } from '../../services/dashboardService';

// Simple test without React rendering
describe('dashboardService - simple tests', () => {
    it('should return mock data when VITE_USE_MOCK_DATA is true', async () => {
        // Set environment variable for test
        import.meta.env.VITE_USE_MOCK_DATA = 'true';

        const data = await dashboardService.getDashboardData();

        expect(data).toBeDefined();
        expect(data.stats).toBeDefined();
        expect(data.stats.skillsCount).toBe(1256);
        expect(data.user.name).toBe('Sagar Test');
        expect(data.recentItems).toHaveLength(5);
    });

    it('should return mock stats correctly', async () => {
        import.meta.env.VITE_USE_MOCK_DATA = 'true';

        const stats = await dashboardService.getDashboardStats();

        expect(stats.skillsCount).toBe(1256);
        expect(stats.totalApps).toBe(24);
        expect(stats.totalAgents).toBe(18);
        expect(stats.activeProjects).toBe(7);
    });

    it('should return limited recent items', async () => {
        import.meta.env.VITE_USE_MOCK_DATA = 'true';

        const items = await dashboardService.getRecentItems(3);

        expect(items).toHaveLength(3);
        expect(items[0].name).toBe('X Data Analyzer Agent');
    });

    it('should return skills count object', async () => {
        import.meta.env.VITE_USE_MOCK_DATA = 'true';

        const result = await dashboardService.getSkillsCount();

        expect(result.skillsCount).toBe(1256);
    });
});
