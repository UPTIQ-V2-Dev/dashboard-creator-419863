import { AppLayout } from '../components/layout/AppLayout';
import { WelcomeSection } from '../components/dashboard/WelcomeSection';
import { QuickActions } from '../components/dashboard/QuickActions';
import { SkillsCounter } from '../components/dashboard/SkillsCounter';
import { VideoTutorial } from '../components/dashboard/VideoTutorial';
import { RecentlyWorkedOn } from '../components/dashboard/RecentlyWorkedOn';
import { useDashboard, useCurrentUser } from '../hooks/useDashboard';
import { QuickAction, RecentItem, WelcomeVideo } from '../types/dashboard';

export const DashboardPage = () => {
    const { data: dashboardData, isLoading: isDashboardLoading } = useDashboard();
    const { data: currentUser } = useCurrentUser();

    const handleCreateApp = (description: string) => {
        console.log('Creating app with description:', description);
        // TODO: Implement app creation logic
    };

    const handleQuickActionClick = (action: QuickAction) => {
        console.log('Quick action clicked:', action);
        // TODO: Navigate to appropriate builder page
    };

    const handleRecentItemClick = (item: RecentItem) => {
        console.log('Recent item clicked:', item);
        // TODO: Navigate to item details or editor
    };

    const handleVideoPlay = (video: WelcomeVideo) => {
        console.log('Playing video:', video);
        // TODO: Open video player or navigate to video
    };

    if (isDashboardLoading) {
        return (
            <AppLayout user={currentUser}>
                <div className='p-6'>
                    <div className='space-y-6'>
                        <div className='h-32 bg-gray-100 rounded-lg animate-pulse'></div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            <div className='lg:col-span-2 h-64 bg-gray-100 rounded-lg animate-pulse'></div>
                            <div className='h-64 bg-gray-100 rounded-lg animate-pulse'></div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout user={currentUser || dashboardData?.user}>
            <div className='p-6 max-w-7xl mx-auto'>
                <div className='space-y-8'>
                    {/* Welcome Section */}
                    <WelcomeSection
                        user={currentUser || dashboardData?.user}
                        onCreateApp={handleCreateApp}
                    />

                    {/* Quick Actions */}
                    <QuickActions
                        actions={dashboardData?.quickActions || []}
                        onActionClick={handleQuickActionClick}
                    />

                    {/* Main Content Grid */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        {/* Left Column - Recent Items */}
                        <div className='lg:col-span-2'>
                            <RecentlyWorkedOn
                                items={dashboardData?.recentItems || []}
                                onItemClick={handleRecentItemClick}
                            />
                        </div>

                        {/* Right Column - Stats and Video */}
                        <div className='space-y-6'>
                            {/* Skills Counter */}
                            <SkillsCounter
                                skillsCount={dashboardData?.stats?.skillsCount || 0}
                                isLoading={isDashboardLoading}
                            />

                            {/* Welcome Video */}
                            {dashboardData?.welcomeVideo && (
                                <VideoTutorial
                                    video={dashboardData.welcomeVideo}
                                    onPlay={handleVideoPlay}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};
