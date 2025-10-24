import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    LayoutGrid,
    Bot,
    Puzzle,
    Database,
    Cpu,
    ShieldCheck,
    Settings,
    Link as LinkIcon,
    BarChart3,
    Github,
    MessageSquare
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '../ui/sidebar';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { UserProfile } from '../../types/dashboard';

interface NavigationItem {
    id: string;
    label: string;
    href: string;
    icon: any;
}

const navigationItems: NavigationItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/',
        icon: LayoutDashboard
    },
    {
        id: 'app-builder',
        label: 'App Builder',
        href: '/app-builder',
        icon: LayoutGrid
    },
    {
        id: 'agent-builder',
        label: 'Agent Builder',
        href: '/agent-builder',
        icon: Bot
    },
    {
        id: 'skills-library',
        label: 'Skills Library',
        href: '/skills-library',
        icon: Puzzle
    },
    {
        id: 'rag',
        label: 'RAG',
        href: '/rag',
        icon: Database
    },
    {
        id: 'model-hub',
        label: 'Model Hub',
        href: '/model-hub',
        icon: Cpu
    },
    {
        id: 'security-monitoring',
        label: 'Security & Monitoring',
        href: '/security-monitoring',
        icon: ShieldCheck
    },
    {
        id: 'config-utils',
        label: 'Config and Utils',
        href: '/config-utils',
        icon: Settings
    },
    {
        id: 'connections',
        label: 'Connections',
        href: '/connections',
        icon: LinkIcon
    },
    {
        id: 'insights',
        label: 'Insights',
        href: '/insights',
        icon: BarChart3
    }
];

interface AppSidebarProps {
    user?: UserProfile;
}

export const AppSidebar = ({ user }: AppSidebarProps) => {
    const location = useLocation();

    return (
        <Sidebar>
            <SidebarContent>
                {/* User Profile Section */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div className='flex items-center gap-3 px-2 py-4'>
                            <Avatar className='h-8 w-8'>
                                <AvatarFallback className='bg-orange-600 text-white text-xs font-medium'>
                                    {user?.initials || 'ST'}
                                </AvatarFallback>
                            </Avatar>
                            <span className='font-medium text-sm'>{user?.name || 'SagarTest'}</span>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Navigation Menu */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationItems.map(item => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.href;

                                return (
                                    <SidebarMenuItem key={item.id}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                        >
                                            <Link
                                                to={item.href}
                                                className='flex items-center gap-3'
                                            >
                                                <Icon className='h-4 w-4' />
                                                <span className='text-sm'>{item.label}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter>
                <div className='px-4 py-4 border-t'>
                    <div className='mb-3'>
                        <p className='text-sm font-medium text-green-600 mb-1'>Join the Community</p>
                        <p className='text-xs text-muted-foreground mb-3'>
                            Share ideas, ask questions, and learn from other builders.
                        </p>
                    </div>

                    <div className='flex gap-2'>
                        <Button
                            variant='ghost'
                            size='sm'
                            className='p-2 h-8 w-8'
                        >
                            <MessageSquare className='h-4 w-4' />
                        </Button>
                        <Button
                            variant='ghost'
                            size='sm'
                            className='p-2 h-8 w-8'
                        >
                            <Github className='h-4 w-4' />
                        </Button>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
};
