import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';
import { userService } from '../services/userService';

export const useDashboard = () => {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: dashboardService.getDashboardData,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000 // 10 minutes
    });
};

export const useDashboardStats = () => {
    return useQuery({
        queryKey: ['dashboard', 'stats'],
        queryFn: dashboardService.getDashboardStats,
        staleTime: 5 * 60 * 1000
    });
};

export const useRecentItems = (limit?: number) => {
    return useQuery({
        queryKey: ['dashboard', 'recent-items', limit],
        queryFn: () => dashboardService.getRecentItems(limit),
        staleTime: 2 * 60 * 1000 // 2 minutes
    });
};

export const useSkillsCount = () => {
    return useQuery({
        queryKey: ['dashboard', 'skills-count'],
        queryFn: dashboardService.getSkillsCount,
        staleTime: 10 * 60 * 1000 // 10 minutes
    });
};

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ['user', 'profile'],
        queryFn: userService.getCurrentUser,
        staleTime: 30 * 60 * 1000 // 30 minutes
    });
};
