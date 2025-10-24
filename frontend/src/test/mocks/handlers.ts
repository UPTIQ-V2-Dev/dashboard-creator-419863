import { http, HttpResponse } from 'msw';
import { mockDashboardData } from '../../data/dashboardMockData';

export const handlers = [
    // Dashboard endpoints
    http.get('/api/v1/api/dashboard', () => {
        return HttpResponse.json(mockDashboardData);
    }),

    http.get('/api/v1/api/dashboard/stats', () => {
        return HttpResponse.json(mockDashboardData.stats);
    }),

    http.get('/api/v1/api/dashboard/recent-items', ({ request }) => {
        const url = new URL(request.url);
        const limit = url.searchParams.get('limit');
        const items = limit ? mockDashboardData.recentItems.slice(0, parseInt(limit)) : mockDashboardData.recentItems;

        return HttpResponse.json(items);
    }),

    http.get('/api/v1/api/dashboard/skills-count', () => {
        return HttpResponse.json({ skillsCount: mockDashboardData.stats.skillsCount });
    }),

    // User endpoints
    http.get('/api/v1/api/user/profile', () => {
        return HttpResponse.json(mockDashboardData.user);
    }),

    http.put('/api/v1/api/user/profile', async ({ request }) => {
        const updatedData = (await request.json()) as Record<string, any>;
        return HttpResponse.json({ ...mockDashboardData.user, ...updatedData });
    }),

    // App creation endpoint
    http.post('/api/v1/api/apps', async ({ request }) => {
        const appData = (await request.json()) as Record<string, any>;
        return HttpResponse.json({
            id: '123',
            name: 'New App',
            ...appData,
            createdAt: new Date().toISOString()
        });
    }),

    // Agent creation endpoint
    http.post('/api/v1/api/agents', async ({ request }) => {
        const agentData = (await request.json()) as Record<string, any>;
        return HttpResponse.json({
            id: '456',
            name: 'New Agent',
            ...agentData,
            createdAt: new Date().toISOString()
        });
    })
];
