import { dashboardController } from '../controllers/index.ts';
import { dashboardService } from '../services/index.ts';
import httpStatus from 'http-status';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock the dashboard service
vi.mock('../services/dashboard.service.ts', () => ({
    default: {
        getDashboardData: vi.fn(),
        getDashboardStats: vi.fn(),
        getRecentItems: vi.fn(),
        getSkillsCount: vi.fn(),
        createOrUpdateDashboardStats: vi.fn(),
        createRecentItem: vi.fn()
    }
}));

// Mock pick utility
vi.mock('../utils/pick.ts', () => ({
    default: vi.fn((obj: any, keys: any[]) => {
        const result: any = {};
        keys.forEach((key: string) => {
            if (obj[key] !== undefined) result[key] = obj[key];
        });
        return result;
    })
}));

describe('Dashboard Controller', () => {
    let mockReq: any;
    let mockRes: any;

    beforeEach(() => {
        vi.clearAllMocks();

        mockReq = {
            user: { id: 1 },
            body: {},
            validatedQuery: {}
        };

        mockRes = {
            send: vi.fn(),
            status: vi.fn().mockReturnThis()
        };
    });

    describe('getDashboard', () => {
        const mockDashboardData = {
            stats: {
                skillsCount: 1256,
                totalApps: 24,
                totalAgents: 18,
                activeProjects: 7
            },
            recentItems: [],
            user: {
                id: '1',
                name: 'John Doe',
                email: 'john@example.com',
                avatar: null,
                initials: 'JD'
            },
            quickActions: [],
            welcomeVideo: null
        };

        it('should return complete dashboard data successfully', async () => {
            (dashboardService.getDashboardData as any).mockResolvedValue(mockDashboardData);

            const mockNext = vi.fn();

            // Call the controller function
            dashboardController.getDashboard(mockReq, mockRes, mockNext);

            // Wait for the next tick to allow async operations to complete
            await new Promise(resolve => setImmediate(resolve));

            expect(dashboardService.getDashboardData).toHaveBeenCalledWith(1);
            expect(mockRes.send).toHaveBeenCalledWith(mockDashboardData);
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should handle service errors', async () => {
            const error = new Error('Database error');
            let capturedError: any;
            const mockNext = vi.fn((err: any) => {
                capturedError = err;
            });

            (dashboardService.getDashboardData as any).mockRejectedValue(error);

            await new Promise<void>(resolve => {
                const originalNext = mockNext;
                const wrappedNext = ((err: any) => {
                    originalNext(err);
                    resolve();
                }) as any;
                dashboardController.getDashboard(mockReq, mockRes, wrappedNext);
            });

            expect(capturedError).toBe(error);
            expect(capturedError.message).toBe('Database error');
        });
    });

    describe('getStats', () => {
        const mockStats = {
            skillsCount: 1256,
            totalApps: 24,
            totalAgents: 18,
            activeProjects: 7
        };

        it('should return dashboard stats successfully', async () => {
            (dashboardService.getDashboardStats as any).mockResolvedValue(mockStats);

            const mockNext = vi.fn();
            dashboardController.getStats(mockReq, mockRes, mockNext);

            await new Promise(resolve => setImmediate(resolve));

            expect(dashboardService.getDashboardStats).toHaveBeenCalledWith(1);
            expect(mockRes.send).toHaveBeenCalledWith(mockStats);
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should handle service errors', async () => {
            const error = new Error('Database error');
            let capturedError: any;
            const mockNext = vi.fn((err: any) => {
                capturedError = err;
            });

            (dashboardService.getDashboardStats as any).mockRejectedValue(error);

            await new Promise<void>(resolve => {
                const originalNext = mockNext;
                const wrappedNext = ((err: any) => {
                    originalNext(err);
                    resolve();
                }) as any;
                dashboardController.getStats(mockReq, mockRes, wrappedNext);
            });

            expect(capturedError).toBe(error);
            expect(capturedError.message).toBe('Database error');
        });
    });

    describe('getRecentItems', () => {
        const mockRecentItems = [
            {
                id: 'item1',
                type: 'agent',
                name: 'Test Agent',
                description: 'Test Description',
                lastUpdated: '2023-01-01T00:00:00Z',
                status: 'active',
                userId: 1
            }
        ];

        it('should return recent items with default limit', async () => {
            (dashboardService.getRecentItems as any).mockResolvedValue(mockRecentItems);

            const mockNext = vi.fn();
            dashboardController.getRecentItems(mockReq, mockRes, mockNext);

            await new Promise(resolve => setImmediate(resolve));

            expect(dashboardService.getRecentItems).toHaveBeenCalledWith(1, undefined);
            expect(mockRes.send).toHaveBeenCalledWith(mockRecentItems);
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should return recent items with custom limit', async () => {
            mockReq.validatedQuery = { limit: 5 };
            (dashboardService.getRecentItems as any).mockResolvedValue(mockRecentItems);

            const mockNext = vi.fn();
            dashboardController.getRecentItems(mockReq, mockRes, mockNext);

            await new Promise(resolve => setImmediate(resolve));

            expect(dashboardService.getRecentItems).toHaveBeenCalledWith(1, 5);
            expect(mockRes.send).toHaveBeenCalledWith(mockRecentItems);
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should handle service errors', async () => {
            const error = new Error('Database error');
            let capturedError: any;
            const mockNext = vi.fn((err: any) => {
                capturedError = err;
            });

            (dashboardService.getRecentItems as any).mockRejectedValue(error);

            await new Promise<void>(resolve => {
                const originalNext = mockNext;
                const wrappedNext = ((err: any) => {
                    originalNext(err);
                    resolve();
                }) as any;
                dashboardController.getRecentItems(mockReq, mockRes, wrappedNext);
            });

            expect(capturedError).toBe(error);
            expect(capturedError.message).toBe('Database error');
        });
    });

    describe('getSkillsCount', () => {
        const mockSkillsCount = { skillsCount: 1256 };

        it('should return skills count successfully', async () => {
            (dashboardService.getSkillsCount as any).mockResolvedValue(mockSkillsCount);

            const mockNext = vi.fn();
            dashboardController.getSkillsCount(mockReq, mockRes, mockNext);

            await new Promise(resolve => setImmediate(resolve));

            expect(dashboardService.getSkillsCount).toHaveBeenCalledWith(1);
            expect(mockRes.send).toHaveBeenCalledWith(mockSkillsCount);
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should handle service errors', async () => {
            const error = new Error('Database error');
            let capturedError: any;
            const mockNext = vi.fn((err: any) => {
                capturedError = err;
            });

            (dashboardService.getSkillsCount as any).mockRejectedValue(error);

            await new Promise<void>(resolve => {
                const originalNext = mockNext;
                const wrappedNext = ((err: any) => {
                    originalNext(err);
                    resolve();
                }) as any;
                dashboardController.getSkillsCount(mockReq, mockRes, wrappedNext);
            });

            expect(capturedError).toBe(error);
            expect(capturedError.message).toBe('Database error');
        });
    });

    describe('createOrUpdateStats', () => {
        const mockUpdatedStats = {
            id: 1,
            skillsCount: 100,
            totalApps: 5,
            totalAgents: 3,
            activeProjects: 2,
            userId: 1
        };

        it('should create/update stats successfully', async () => {
            mockReq.body = {
                skillsCount: 100,
                totalApps: 5
            };

            (dashboardService.createOrUpdateDashboardStats as any).mockResolvedValue(mockUpdatedStats);

            const mockNext = vi.fn();
            dashboardController.createOrUpdateStats(mockReq, mockRes, mockNext);

            await new Promise(resolve => setImmediate(resolve));

            expect(dashboardService.createOrUpdateDashboardStats).toHaveBeenCalledWith(1, mockReq.body);
            expect(mockRes.status).toHaveBeenCalledWith(httpStatus.OK);
            expect(mockRes.send).toHaveBeenCalledWith(mockUpdatedStats);
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should handle service errors', async () => {
            const error = new Error('Database error');
            let capturedError: any;
            const mockNext = vi.fn((err: any) => {
                capturedError = err;
            });

            (dashboardService.createOrUpdateDashboardStats as any).mockRejectedValue(error);

            await new Promise<void>(resolve => {
                const originalNext = mockNext;
                const wrappedNext = ((err: any) => {
                    originalNext(err);
                    resolve();
                }) as any;
                dashboardController.createOrUpdateStats(mockReq, mockRes, wrappedNext);
            });

            expect(capturedError).toBe(error);
            expect(capturedError.message).toBe('Database error');
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
            mockReq.body = {
                type: 'agent',
                name: 'New Agent',
                description: 'A new agent'
            };

            (dashboardService.createRecentItem as any).mockResolvedValue(mockRecentItem);

            const mockNext = vi.fn();
            dashboardController.createRecentItem(mockReq, mockRes, mockNext);

            await new Promise(resolve => setImmediate(resolve));

            expect(dashboardService.createRecentItem).toHaveBeenCalledWith(1, mockReq.body);
            expect(mockRes.status).toHaveBeenCalledWith(httpStatus.CREATED);
            expect(mockRes.send).toHaveBeenCalledWith(mockRecentItem);
            expect(mockNext).not.toHaveBeenCalled();
        });

        it('should handle service errors', async () => {
            const error = new Error('Database error');
            let capturedError: any;
            const mockNext = vi.fn((err: any) => {
                capturedError = err;
            });

            (dashboardService.createRecentItem as any).mockRejectedValue(error);

            await new Promise<void>(resolve => {
                const originalNext = mockNext;
                const wrappedNext = ((err: any) => {
                    originalNext(err);
                    resolve();
                }) as any;
                dashboardController.createRecentItem(mockReq, mockRes, wrappedNext);
            });

            expect(capturedError).toBe(error);
            expect(capturedError.message).toBe('Database error');
        });
    });
});
