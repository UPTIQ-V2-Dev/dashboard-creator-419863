import { describe, it, expect } from 'vitest';

describe('Simple test', () => {
    it('should work without React testing', () => {
        expect(1 + 1).toBe(2);
    });

    it('should test basic JavaScript functionality', () => {
        const mockData = { name: 'test', count: 42 };
        expect(mockData.name).toBe('test');
        expect(mockData.count).toBe(42);
    });
});
