import { DashboardData, RecentItem, UserProfile } from '../../types/dashboard';

export const mockUser: UserProfile = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    initials: 'TU'
};

export const mockRecentItems: RecentItem[] = [
    {
        id: '1',
        type: 'agent',
        name: 'Test Agent',
        description: 'A test agent for testing',
        lastUpdated: 'Oct 16, 2025',
        status: 'active'
    },
    {
        id: '2',
        type: 'app',
        name: 'Test App',
        description: 'A test application',
        lastUpdated: 'Oct 15, 2025',
        status: 'draft'
    }
];

export const mockDashboardDataFixture: DashboardData = {
    stats: {
        skillsCount: 1256,
        totalApps: 24,
        totalAgents: 18,
        activeProjects: 7
    },
    recentItems: mockRecentItems,
    user: mockUser,
    quickActions: [
        {
            id: '1',
            type: 'app',
            title: 'App',
            description: 'Create AI-powered apps',
            icon: 'layout-grid',
            primaryColor: 'rgb(34, 197, 94)'
        },
        {
            id: '2',
            type: 'agent',
            title: 'Agent',
            description: 'Create intelligent agents',
            icon: 'bot',
            primaryColor: 'rgb(59, 130, 246)'
        }
    ],
    welcomeVideo: {
        id: '1',
        title: 'Welcome to Uptiq AI Workbench!',
        description: "Take a quick tour of Uptiq's AI Workbench",
        thumbnail: '/test-thumbnail.png',
        duration: '3:24',
        url: '#'
    }
};
