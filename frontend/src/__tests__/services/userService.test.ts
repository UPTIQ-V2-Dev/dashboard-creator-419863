import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { userService } from '../../services/userService';
import { server } from '../../test/mocks/server';

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

describe('userService', () => {
    describe('getCurrentUser', () => {
        it('returns current user profile', async () => {
            const user = await userService.getCurrentUser();

            expect(user).toBeDefined();
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('name');
            expect(user).toHaveProperty('email');
            expect(user).toHaveProperty('initials');
        });

        it('returns expected user data', async () => {
            const user = await userService.getCurrentUser();

            expect(user.name).toBe('Sagar Test');
            expect(user.email).toBe('sagar@example.com');
            expect(user.initials).toBe('ST');
        });
    });

    describe('updateUserProfile', () => {
        it('updates user profile successfully', async () => {
            const updateData = { name: 'Updated Name' };
            const updatedUser = await userService.updateUserProfile(updateData);

            expect(updatedUser.name).toBe('Updated Name');
            expect(updatedUser.email).toBe('sagar@example.com'); // Should preserve existing data
        });

        it('merges update data with existing profile', async () => {
            const updateData = { email: 'new@example.com' };
            const updatedUser = await userService.updateUserProfile(updateData);

            expect(updatedUser.name).toBe('Sagar Test'); // Should preserve existing data
            expect(updatedUser.email).toBe('new@example.com');
        });
    });
});
