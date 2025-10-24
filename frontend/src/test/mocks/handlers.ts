import { http, HttpResponse } from 'msw';
import { mockDashboardData } from '../../data/dashboardMockData';
import { mockAuthResponse } from '../../data/mockData';

export const handlers = [
    // Auth endpoints
    http.post('/api/v1/auth/login', async ({ request }) => {
        const credentials = (await request.json()) as { email: string; password: string };

        // Simulate login failure for specific email
        if (credentials.email === 'fail@example.com') {
            return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        return HttpResponse.json(mockAuthResponse);
    }),

    http.post('/api/v1/auth/register', async () => {
        return HttpResponse.json(mockAuthResponse);
    }),

    http.post('/api/v1/auth/refresh', () => {
        return HttpResponse.json(mockAuthResponse);
    }),

    http.post('/api/v1/auth/refresh-tokens', () => {
        return HttpResponse.json(mockAuthResponse);
    }),

    http.post('/api/v1/auth/logout', () => {
        return HttpResponse.json({ message: 'Logged out successfully' });
    }),

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
