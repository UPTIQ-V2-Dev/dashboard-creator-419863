import { dashboardService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import { z } from 'zod';

const dashboardStatsSchema = z.object({
    skillsCount: z.number(),
    totalApps: z.number(),
    totalAgents: z.number(),
    activeProjects: z.number()
});

const recentItemSchema = z.object({
    id: z.string(),
    type: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    lastUpdated: z.string(),
    status: z.string(),
    userId: z.number()
});

const quickActionSchema = z.object({
    id: z.string(),
    type: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    primaryColor: z.string()
});

const welcomeVideoSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    duration: z.string(),
    url: z.string()
});

const userProfileSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    avatar: z.string().nullable(),
    initials: z.string()
});

const getDashboardTool: MCPTool = {
    id: 'dashboard_get_complete',
    name: 'Get Complete Dashboard',
    description:
        'Get complete dashboard data including stats, recent items, user info, quick actions, and welcome video',
    inputSchema: z.object({
        userId: z.number().int()
    }),
    outputSchema: z.object({
        stats: dashboardStatsSchema,
        recentItems: z.array(recentItemSchema),
        user: userProfileSchema,
        quickActions: z.array(quickActionSchema),
        welcomeVideo: welcomeVideoSchema.nullable()
    }),
    fn: async (inputs: { userId: number }) => {
        const result = await dashboardService.getDashboardData(inputs.userId);
        return result;
    }
};

const getDashboardStatsTool: MCPTool = {
    id: 'dashboard_get_stats',
    name: 'Get Dashboard Statistics',
    description: 'Get dashboard statistics for a user',
    inputSchema: z.object({
        userId: z.number().int()
    }),
    outputSchema: dashboardStatsSchema,
    fn: async (inputs: { userId: number }) => {
        const result = await dashboardService.getDashboardStats(inputs.userId);
        return result;
    }
};

const getRecentItemsTool: MCPTool = {
    id: 'dashboard_get_recent_items',
    name: 'Get Recent Items',
    description: 'Get recent items for a user with optional limit',
    inputSchema: z.object({
        userId: z.number().int(),
        limit: z.number().int().min(1).max(100).optional()
    }),
    outputSchema: z.object({
        items: z.array(recentItemSchema)
    }),
    fn: async (inputs: { userId: number; limit?: number }) => {
        const result = await dashboardService.getRecentItems(inputs.userId, inputs.limit);
        return { items: result };
    }
};

const getSkillsCountTool: MCPTool = {
    id: 'dashboard_get_skills_count',
    name: 'Get Skills Count',
    description: 'Get skills count for a user',
    inputSchema: z.object({
        userId: z.number().int()
    }),
    outputSchema: z.object({
        skillsCount: z.number()
    }),
    fn: async (inputs: { userId: number }) => {
        const result = await dashboardService.getSkillsCount(inputs.userId);
        return result;
    }
};

const updateDashboardStatsTool: MCPTool = {
    id: 'dashboard_update_stats',
    name: 'Update Dashboard Statistics',
    description: 'Create or update dashboard statistics for a user',
    inputSchema: z.object({
        userId: z.number().int(),
        skillsCount: z.number().int().min(0).optional(),
        totalApps: z.number().int().min(0).optional(),
        totalAgents: z.number().int().min(0).optional(),
        activeProjects: z.number().int().min(0).optional()
    }),
    outputSchema: z.object({
        id: z.number(),
        skillsCount: z.number(),
        totalApps: z.number(),
        totalAgents: z.number(),
        activeProjects: z.number(),
        userId: z.number()
    }),
    fn: async (inputs: {
        userId: number;
        skillsCount?: number;
        totalApps?: number;
        totalAgents?: number;
        activeProjects?: number;
    }) => {
        const { userId, ...statsData } = inputs;
        const result = await dashboardService.createOrUpdateDashboardStats(userId, statsData);
        return result;
    }
};

const createRecentItemTool: MCPTool = {
    id: 'dashboard_create_recent_item',
    name: 'Create Recent Item',
    description: 'Create a new recent item for a user',
    inputSchema: z.object({
        userId: z.number().int(),
        type: z.string(),
        name: z.string(),
        description: z.string().optional(),
        status: z.enum(['draft', 'active', 'inactive', 'completed']).optional()
    }),
    outputSchema: recentItemSchema,
    fn: async (inputs: { userId: number; type: string; name: string; description?: string; status?: string }) => {
        const { userId, ...itemData } = inputs;
        const result = await dashboardService.createRecentItem(userId, itemData);
        return result;
    }
};

export const dashboardTools: MCPTool[] = [
    getDashboardTool,
    getDashboardStatsTool,
    getRecentItemsTool,
    getSkillsCountTool,
    updateDashboardStatsTool,
    createRecentItemTool
];
