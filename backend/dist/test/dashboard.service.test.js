import prisma from "../client.js";
import { dashboardService } from "../services/index.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
import { beforeEach, describe, expect, it, vi } from 'vitest';
// Mock the prisma client
vi.mock('../client.ts', () => ({
    default: {
        user: {
            findUnique: vi.fn()
        },
        dashboardStats: {
            upsert: vi.fn()
        },
        recentItem: {
            findMany: vi.fn(),
            create: vi.fn()
        },
        quickAction: {
            findMany: vi.fn()
        },
        welcomeVideo: {
            findFirst: vi.fn()
        }
    }
}));
describe('Dashboard Service', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('getDashboardData', () => {
        const mockUser = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            dashboardStats: {
                skillsCount: 1256,
                totalApps: 24,
                totalAgents: 18,
                activeProjects: 7
            },
            recentItems: [
                {
                    id: 'item1',
                    type: 'agent',
                    name: 'Test Agent',
                    description: 'Test Description',
                    lastUpdated: new Date('2023-01-01'),
                    status: 'active',
                    userId: 1
                }
            ]
        };
        const mockQuickActions = [
            {
                id: 'qa1',
                type: 'app',
                title: 'App',
                description: 'Create apps',
                icon: 'grid',
                primaryColor: 'green'
            }
        ];
        const mockWelcomeVideo = {
            id: 'wv1',
            title: 'Welcome Video',
            description: 'Welcome to the platform',
            thumbnail: 'thumb.jpg',
            duration: '3:24',
            url: 'video.mp4'
        };
        it('should return complete dashboard data for valid user', async () => {
            prisma.user.findUnique.mockResolvedValue(mockUser);
            prisma.quickAction.findMany.mockResolvedValue(mockQuickActions);
            prisma.welcomeVideo.findFirst.mockResolvedValue(mockWelcomeVideo);
            const result = await dashboardService.getDashboardData(1);
            expect(result).toEqual({
                stats: {
                    skillsCount: 1256,
                    totalApps: 24,
                    totalAgents: 18,
                    activeProjects: 7
                },
                recentItems: mockUser.recentItems,
                user: {
                    id: '1',
                    name: 'John Doe',
                    email: 'john@example.com',
                    avatar: null,
                    initials: 'JD'
                },
                quickActions: mockQuickActions,
                welcomeVideo: mockWelcomeVideo
            });
            expect(prisma.user.findUnique).toHaveBeenCalledWith({
                where: { id: 1 },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    dashboardStats: true,
                    recentItems: {
                        take: 10,
                        orderBy: { lastUpdated: 'desc' }
                    }
                }
            });
        });
        it('should handle user with no dashboard stats', async () => {
            const userWithoutStats = { ...mockUser, dashboardStats: null };
            prisma.user.findUnique.mockResolvedValue(userWithoutStats);
            prisma.quickAction.findMany.mockResolvedValue(mockQuickActions);
            prisma.welcomeVideo.findFirst.mockResolvedValue(mockWelcomeVideo);
            const result = await dashboardService.getDashboardData(1);
            expect(result.stats).toEqual({
                skillsCount: 0,
                totalApps: 0,
                totalAgents: 0,
                activeProjects: 0
            });
        });
        it('should generate initials from email when name is null', async () => {
            const userWithoutName = { ...mockUser, name: null };
            prisma.user.findUnique.mockResolvedValue(userWithoutName);
            prisma.quickAction.findMany.mockResolvedValue([]);
            prisma.welcomeVideo.findFirst.mockResolvedValue(null);
            const result = await dashboardService.getDashboardData(1);
            expect(result.user.initials).toBe('J');
        });
        it('should throw ApiError when user not found', async () => {
            prisma.user.findUnique.mockResolvedValue(null);
            await expect(dashboardService.getDashboardData(999)).rejects.toThrow(new ApiError(httpStatus.NOT_FOUND, 'User not found'));
        });
    });
    describe('getDashboardStats', () => {
        it('should return user stats when they exist', async () => {
            const mockUser = {
                dashboardStats: {
                    skillsCount: 100,
                    totalApps: 5,
                    totalAgents: 3,
                    activeProjects: 2
                }
            };
            prisma.user.findUnique.mockResolvedValue(mockUser);
            const result = await dashboardService.getDashboardStats(1);
            expect(result).toEqual({
                skillsCount: 100,
                totalApps: 5,
                totalAgents: 3,
                activeProjects: 2
            });
        });
        it('should return default stats when user has no stats', async () => {
            const mockUser = { dashboardStats: null };
            prisma.user.findUnique.mockResolvedValue(mockUser);
            const result = await dashboardService.getDashboardStats(1);
            expect(result).toEqual({
                skillsCount: 0,
                totalApps: 0,
                totalAgents: 0,
                activeProjects: 0
            });
        });
        it('should throw ApiError when user not found', async () => {
            prisma.user.findUnique.mockResolvedValue(null);
            await expect(dashboardService.getDashboardStats(999)).rejects.toThrow(new ApiError(httpStatus.NOT_FOUND, 'User not found'));
        });
    });
    describe('getRecentItems', () => {
        const mockRecentItems = [
            {
                id: 'item1',
                type: 'agent',
                name: 'Agent 1',
                description: 'First agent',
                lastUpdated: new Date(),
                status: 'active',
                userId: 1
            }
        ];
        it('should return recent items with default limit', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 1 });
            prisma.recentItem.findMany.mockResolvedValue(mockRecentItems);
            const result = await dashboardService.getRecentItems(1);
            expect(result).toEqual(mockRecentItems);
            expect(prisma.recentItem.findMany).toHaveBeenCalledWith({
                where: { userId: 1 },
                take: 10,
                orderBy: { lastUpdated: 'desc' }
            });
        });
        it('should return recent items with custom limit', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 1 });
            prisma.recentItem.findMany.mockResolvedValue(mockRecentItems);
            await dashboardService.getRecentItems(1, 5);
            expect(prisma.recentItem.findMany).toHaveBeenCalledWith({
                where: { userId: 1 },
                take: 5,
                orderBy: { lastUpdated: 'desc' }
            });
        });
        it('should throw ApiError when user not found', async () => {
            prisma.user.findUnique.mockResolvedValue(null);
            await expect(dashboardService.getRecentItems(999)).rejects.toThrow(new ApiError(httpStatus.NOT_FOUND, 'User not found'));
        });
    });
    describe('getSkillsCount', () => {
        it('should return skills count when user has stats', async () => {
            const mockUser = {
                dashboardStats: {
                    skillsCount: 42
                }
            };
            prisma.user.findUnique.mockResolvedValue(mockUser);
            const result = await dashboardService.getSkillsCount(1);
            expect(result).toEqual({ skillsCount: 42 });
        });
        it('should return zero when user has no stats', async () => {
            const mockUser = { dashboardStats: null };
            prisma.user.findUnique.mockResolvedValue(mockUser);
            const result = await dashboardService.getSkillsCount(1);
            expect(result).toEqual({ skillsCount: 0 });
        });
        it('should throw ApiError when user not found', async () => {
            prisma.user.findUnique.mockResolvedValue(null);
            await expect(dashboardService.getSkillsCount(999)).rejects.toThrow(new ApiError(httpStatus.NOT_FOUND, 'User not found'));
        });
    });
    describe('createOrUpdateDashboardStats', () => {
        const mockStats = {
            id: 1,
            skillsCount: 100,
            totalApps: 5,
            totalAgents: 3,
            activeProjects: 2,
            userId: 1
        };
        it('should create or update dashboard stats successfully', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 1 });
            prisma.dashboardStats.upsert.mockResolvedValue(mockStats);
            const statsData = {
                skillsCount: 100,
                totalApps: 5
            };
            const result = await dashboardService.createOrUpdateDashboardStats(1, statsData);
            expect(result).toEqual(mockStats);
            expect(prisma.dashboardStats.upsert).toHaveBeenCalledWith({
                where: { userId: 1 },
                update: statsData,
                create: {
                    userId: 1,
                    skillsCount: 100,
                    totalApps: 5,
                    totalAgents: 0,
                    activeProjects: 0
                }
            });
        });
        it('should throw ApiError when user not found', async () => {
            prisma.user.findUnique.mockResolvedValue(null);
            await expect(dashboardService.createOrUpdateDashboardStats(999, { skillsCount: 10 })).rejects.toThrow(new ApiError(httpStatus.NOT_FOUND, 'User not found'));
        });
    });
    describe('createRecentItem', () => {
        const mockRecentItem = {
            id: 'item1',
            type: 'agent',
            name: 'New Agent',
            description: 'A new agent',
            status: 'draft',
            userId: 1,
            lastUpdated: new Date()
        };
        it('should create recent item successfully', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 1 });
            prisma.recentItem.create.mockResolvedValue(mockRecentItem);
            const itemData = {
                type: 'agent',
                name: 'New Agent',
                description: 'A new agent'
            };
            const result = await dashboardService.createRecentItem(1, itemData);
            expect(result).toEqual(mockRecentItem);
            expect(prisma.recentItem.create).toHaveBeenCalledWith({
                data: {
                    userId: 1,
                    type: 'agent',
                    name: 'New Agent',
                    description: 'A new agent',
                    status: 'draft',
                    lastUpdated: expect.any(Date)
                }
            });
        });
        it('should create recent item with custom status', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 1 });
            prisma.recentItem.create.mockResolvedValue(mockRecentItem);
            const itemData = {
                type: 'agent',
                name: 'Active Agent',
                status: 'active'
            };
            await dashboardService.createRecentItem(1, itemData);
            expect(prisma.recentItem.create).toHaveBeenCalledWith({
                data: {
                    userId: 1,
                    type: 'agent',
                    name: 'Active Agent',
                    description: undefined,
                    status: 'active',
                    lastUpdated: expect.any(Date)
                }
            });
        });
        it('should throw ApiError when user not found', async () => {
            prisma.user.findUnique.mockResolvedValue(null);
            await expect(dashboardService.createRecentItem(999, { type: 'agent', name: 'Test' })).rejects.toThrow(new ApiError(httpStatus.NOT_FOUND, 'User not found'));
        });
    });
});
