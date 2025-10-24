import { apiClient } from '../lib/api';
import { DashboardData, DashboardStats, RecentItem } from '../types/dashboard';
import { mockDashboardData } from '../data/dashboardMockData';

export const dashboardService = {
    async getDashboardData(): Promise<DashboardData> {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return mockDashboardData;
        }

        const response = await apiClient.get<DashboardData>('/api/dashboard');
        return response.data;
    },

    async getDashboardStats(): Promise<DashboardStats> {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return mockDashboardData.stats;
        }

        const response = await apiClient.get<DashboardStats>('/api/dashboard/stats');
        return response.data;
    },

    async getRecentItems(limit?: number): Promise<RecentItem[]> {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return mockDashboardData.recentItems.slice(0, limit);
        }

        const params = limit ? { limit } : {};
        const response = await apiClient.get<RecentItem[]>('/api/dashboard/recent-items', { params });
        return response.data;
    },

    async getSkillsCount(): Promise<{ skillsCount: number }> {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return { skillsCount: mockDashboardData.stats.skillsCount };
        }

        const response = await apiClient.get<{ skillsCount: number }>('/api/dashboard/skills-count');
        return response.data;
    }
};
