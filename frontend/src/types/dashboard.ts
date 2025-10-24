export interface DashboardStats {
    skillsCount: number;
    totalApps: number;
    totalAgents: number;
    activeProjects: number;
}

export interface RecentItem {
    id: string;
    type: 'agent' | 'app';
    name: string;
    description?: string;
    lastUpdated: string;
    status: 'active' | 'draft' | 'archived';
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    initials: string;
}

export interface QuickAction {
    id: string;
    type: 'app' | 'agent';
    title: string;
    description: string;
    icon: string;
    primaryColor: string;
}

export interface WelcomeVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    url: string;
}

export interface DashboardData {
    stats: DashboardStats;
    recentItems: RecentItem[];
    user: UserProfile;
    quickActions: QuickAction[];
    welcomeVideo: WelcomeVideo;
}
