import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, afterAll } from 'vitest';
import { server } from './mocks/server';
import './react-act-polyfill';

// Start server before all tests
beforeAll(() => {
    server.listen({
        onUnhandledRequest: 'warn'
    });
});

// Cleanup after each test case
afterEach(() => {
    cleanup();
    server.resetHandlers();
});

// Clean up after all tests
afterAll(() => server.close());
