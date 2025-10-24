import { PrismaClient, Role } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
    console.log('🌱 Starting database seeding...');
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin',
            password: adminPassword,
            role: Role.ADMIN,
            isEmailVerified: true
        }
    });
    console.log('✅ Created admin user:', admin.email);
    // Create sample dashboard stats for admin
    await prisma.dashboardStats.upsert({
        where: { userId: admin.id },
        update: {},
        create: {
            userId: admin.id,
            skillsCount: 1256,
            totalApps: 24,
            totalAgents: 18,
            activeProjects: 7
        }
    });
    console.log('✅ Created dashboard stats for admin');
    // Create sample recent items for admin
    const recentItem = await prisma.recentItem.upsert({
        where: { id: 'sample-recent-item-1' },
        update: {},
        create: {
            id: 'sample-recent-item-1',
            type: 'agent',
            name: 'X Data Analyzer Agent',
            description: 'Analyze and process data from X platform',
            status: 'active',
            userId: admin.id,
            lastUpdated: new Date()
        }
    });
    console.log('✅ Created recent item:', recentItem.name);
    // Create quick actions
    const quickActions = [
        {
            id: 'qa-app',
            type: 'app',
            title: 'App',
            description: 'Your workspace to create AI-powered apps',
            icon: 'layout-grid',
            primaryColor: 'rgb(34, 197, 94)'
        },
        {
            id: 'qa-agent',
            type: 'agent',
            title: 'Agent',
            description: 'Create intelligent agents for automation',
            icon: 'bot',
            primaryColor: 'rgb(59, 130, 246)'
        },
        {
            id: 'qa-skill',
            type: 'skill',
            title: 'Skill',
            description: 'Build custom skills and capabilities',
            icon: 'zap',
            primaryColor: 'rgb(168, 85, 247)'
        }
    ];
    for (const action of quickActions) {
        await prisma.quickAction.upsert({
            where: { id: action.id },
            update: {},
            create: action
        });
        console.log('✅ Created quick action:', action.title);
    }
    // Create welcome video
    const welcomeVideo = await prisma.welcomeVideo.upsert({
        where: { id: 'welcome-video-1' },
        update: {},
        create: {
            id: 'welcome-video-1',
            title: 'Welcome to Uptiq AI Workbench!',
            description: 'Take a quick tour of the platform and learn how to build your first AI-powered application.',
            thumbnail: '/api/placeholder/300/200',
            duration: '3:24',
            url: '#'
        }
    });
    console.log('✅ Created welcome video:', welcomeVideo.title);
}
main()
    .catch(e => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
