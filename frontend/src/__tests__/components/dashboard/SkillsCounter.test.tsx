import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { SkillsCounter } from '../../../components/dashboard/SkillsCounter';
import { render } from '../../../test/test-utils';

describe('SkillsCounter', () => {
    it('displays skills count correctly', () => {
        render(<SkillsCounter skillsCount={1256} />);
        expect(screen.getByText('1,256')).toBeInTheDocument();
    });

    it('displays "Skills and Counting..." text', () => {
        render(<SkillsCounter skillsCount={1256} />);
        expect(screen.getByText('Skills and Counting...')).toBeInTheDocument();
    });

    it('shows loading state', () => {
        render(
            <SkillsCounter
                skillsCount={0}
                isLoading
            />
        );

        // Should show skeleton loading elements
        const skeletonElements = document.querySelectorAll('.animate-pulse');
        expect(skeletonElements.length).toBeGreaterThan(0);
    });

    it('formats large numbers with commas', () => {
        render(<SkillsCounter skillsCount={123456} />);
        expect(screen.getByText('123,456')).toBeInTheDocument();
    });

    it('handles zero skills count', () => {
        render(<SkillsCounter skillsCount={0} />);
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('has proper gradient styling', () => {
        render(<SkillsCounter skillsCount={1256} />);

        const card = screen.getByText('1,256').closest('div')?.closest('div');
        expect(card).toHaveClass('bg-gradient-to-br');
    });
});
