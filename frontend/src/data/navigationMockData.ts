import { NavigationItem } from '../types/workspace';

export const mockNavigationItems: NavigationItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'layout-dashboard',
        href: '/'
    },
    {
        id: 'app-builder',
        label: 'App Builder',
        icon: 'layout-grid',
        href: '/app-builder'
    },
    {
        id: 'agent-builder',
        label: 'Agent Builder',
        icon: 'bot',
        href: '/agent-builder'
    },
    {
        id: 'skills-library',
        label: 'Skills Library',
        icon: 'puzzle',
        href: '/skills-library'
    },
    {
        id: 'rag',
        label: 'RAG',
        icon: 'database',
        href: '/rag'
    },
    {
        id: 'model-hub',
        label: 'Model Hub',
        icon: 'cpu',
        href: '/model-hub'
    },
    {
        id: 'security-monitoring',
        label: 'Security & Monitoring',
        icon: 'shield-check',
        href: '/security-monitoring'
    },
    {
        id: 'config-utils',
        label: 'Config and Utils',
        icon: 'settings',
        href: '/config-utils'
    },
    {
        id: 'connections',
        label: 'Connections',
        icon: 'link',
        href: '/connections'
    },
    {
        id: 'insights',
        label: 'Insights',
        icon: 'bar-chart-3',
        href: '/insights'
    }
];
