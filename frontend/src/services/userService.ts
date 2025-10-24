import { apiClient } from '../lib/api';
import { UserProfile } from '../types/dashboard';
import { mockUserProfile } from '../data/dashboardMockData';

export const userService = {
    async getCurrentUser(): Promise<UserProfile> {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return mockUserProfile;
        }

        const response = await apiClient.get<UserProfile>('/api/user/profile');
        return response.data;
    },

    async updateUserProfile(userData: Partial<UserProfile>): Promise<UserProfile> {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return { ...mockUserProfile, ...userData };
        }

        const response = await apiClient.put<UserProfile>('/api/user/profile', userData);
        return response.data;
    }
};
