import prisma from "../client.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
/**
 * Get complete dashboard data for authenticated user
 * @param {number} userId
 * @returns {Promise<Object>}
 */
const getDashboardData = async (userId) => {
    // Get user data
    const user = await prisma.user.findUnique({
        where: { id: userId },
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
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    // Get all quick actions (global data)
    const quickActions = await prisma.quickAction.findMany();
    // Get welcome video (assuming there's one active video)
    const welcomeVideo = await prisma.welcomeVideo.findFirst();
    // Transform user data
    const transformedUser = {
        id: user.id.toString(),
        name: user.name || '',
        email: user.email,
        avatar: null, // Not in schema yet
        initials: user.name
            ? user.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
            : user.email[0].toUpperCase()
    };
    // Transform stats
    const stats = user.dashboardStats || {
        skillsCount: 0,
        totalApps: 0,
        totalAgents: 0,
        activeProjects: 0
    };
    return {
        stats: {
            skillsCount: stats.skillsCount,
            totalApps: stats.totalApps,
            totalAgents: stats.totalAgents,
            activeProjects: stats.activeProjects
        },
        recentItems: user.recentItems,
        user: transformedUser,
        quickActions: quickActions,
        welcomeVideo: welcomeVideo
    };
};
/**
 * Get dashboard statistics for authenticated user
 * @param {number} userId
 * @returns {Promise<DashboardStats>}
 */
const getDashboardStats = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            dashboardStats: true
        }
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    // Return default stats if none exist
    if (!user.dashboardStats) {
        return {
            skillsCount: 0,
            totalApps: 0,
            totalAgents: 0,
            activeProjects: 0
        };
    }
    return {
        skillsCount: user.dashboardStats.skillsCount,
        totalApps: user.dashboardStats.totalApps,
        totalAgents: user.dashboardStats.totalAgents,
        activeProjects: user.dashboardStats.activeProjects
    };
};
/**
 * Get recent items for authenticated user
 * @param {number} userId
 * @param {number} limit
 * @returns {Promise<RecentItem[]>}
 */
const getRecentItems = async (userId, limit = 10) => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    const recentItems = await prisma.recentItem.findMany({
        where: { userId: userId },
        take: limit,
        orderBy: { lastUpdated: 'desc' }
    });
    return recentItems;
};
/**
 * Get skills count for authenticated user
 * @param {number} userId
 * @returns {Promise<Object>}
 */
const getSkillsCount = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            dashboardStats: {
                select: {
                    skillsCount: true
                }
            }
        }
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    return {
        skillsCount: user.dashboardStats?.skillsCount || 0
    };
};
/**
 * Create or update dashboard stats for a user
 * @param {number} userId
 * @param {Object} statsData
 * @returns {Promise<DashboardStats>}
 */
const createOrUpdateDashboardStats = async (userId, statsData) => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    const dashboardStats = await prisma.dashboardStats.upsert({
        where: { userId: userId },
        update: statsData,
        create: {
            userId: userId,
            skillsCount: statsData.skillsCount || 0,
            totalApps: statsData.totalApps || 0,
            totalAgents: statsData.totalAgents || 0,
            activeProjects: statsData.activeProjects || 0
        }
    });
    return dashboardStats;
};
/**
 * Create a recent item for a user
 * @param {number} userId
 * @param {Object} itemData
 * @returns {Promise<RecentItem>}
 */
const createRecentItem = async (userId, itemData) => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    const recentItem = await prisma.recentItem.create({
        data: {
            userId: userId,
            type: itemData.type,
            name: itemData.name,
            description: itemData.description,
            status: itemData.status || 'draft',
            lastUpdated: new Date()
        }
    });
    return recentItem;
};
export default {
    getDashboardData,
    getDashboardStats,
    getRecentItems,
    getSkillsCount,
    createOrUpdateDashboardStats,
    createRecentItem
};
