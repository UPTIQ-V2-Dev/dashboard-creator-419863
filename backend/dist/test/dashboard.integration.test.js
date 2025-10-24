import { describe, it } from 'vitest';
// Integration tests disabled due to missing supertest dependency
// To enable, install: pnpm add -D supertest @types/supertest
describe.skip('Dashboard Integration Tests', () => {
    it('should be implemented when supertest is available', () => {
        // This test suite is skipped until supertest dependency is added
        // Add integration tests for:
        // - GET /api/v1/dashboard
        // - GET /api/v1/dashboard/stats
        // - GET /api/v1/dashboard/recent-items
        // - GET /api/v1/dashboard/skills-count
        // - PUT /api/v1/dashboard/stats
        // - POST /api/v1/dashboard/recent-items
    });
});
