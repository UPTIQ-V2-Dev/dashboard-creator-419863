import { DashboardData, RecentItem, DashboardStats, UserProfile, QuickAction, WelcomeVideo } from '../types/dashboard';

export const mockDashboardStats: DashboardStats = {
    skillsCount: 1256,
    totalApps: 24,
    totalAgents: 18,
    activeProjects: 7
};

export const mockUserProfile: UserProfile = {
    id: '1',
    name: 'Sagar Test',
    email: 'sagar@example.com',
    initials: 'ST'
};

export const mockQuickActions: QuickAction[] = [
    {
        id: '1',
        type: 'app',
        title: 'App',
        description: 'Your workspace to create AI-powered apps, agents, and workflows in minutes',
        icon: 'layout-grid',
        primaryColor: 'rgb(34, 197, 94)' // green
    },
    {
        id: '2',
        type: 'agent',
        title: 'Agent',
        description: 'Create intelligent agents for automation and AI-powered workflows',
        icon: 'bot',
        primaryColor: 'rgb(59, 130, 246)' // blue
    }
];

export const mockRecentItems: RecentItem[] = [
    {
        id: '1',
        type: 'agent',
        name: 'X Data Analyzer Agent',
        description: 'Analyze and process data from X platform',
        lastUpdated: 'Oct 16, 2025',
        status: 'active'
    },
    {
        id: '2',
        type: 'agent',
        name: 'Webscraping Data Scraper',
        description: 'Extract data from web pages automatically',
        lastUpdated: 'Oct 16, 2025',
        status: 'active'
    },
    {
        id: '3',
        type: 'agent',
        name: 'Resume Data Extractor',
        description: 'Parse and extract information from resumes',
        lastUpdated: 'Oct 15, 2025',
        status: 'active'
    },
    {
        id: '4',
        type: 'agent',
        name: 'Test Agent',
        description: 'Testing and validation agent',
        lastUpdated: 'Oct 14, 2025',
        status: 'draft'
    },
    {
        id: '5',
        type: 'agent',
        name: 'Summery Provider Bot',
        description: 'Generate summaries from various content sources',
        lastUpdated: 'Oct 14, 2025',
        status: 'active'
    }
];

export const mockWelcomeVideo: WelcomeVideo = {
    id: '1',
    title: 'Welcome to Uptiq AI Workbench!',
    description: "Take a quick tour of Uptiq's AI Workbench to explore how AI...",
    thumbnail: '/api/placeholder/300/200',
    duration: '3:24',
    url: '#'
};

export const mockDashboardData: DashboardData = {
    stats: mockDashboardStats,
    recentItems: mockRecentItems,
    user: mockUserProfile,
    quickActions: mockQuickActions,
    welcomeVideo: mockWelcomeVideo
};
