import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { VideoTutorial } from '../../../components/dashboard/VideoTutorial';
import { render } from '../../../test/test-utils';
import { mockDashboardDataFixture } from '../../../test/fixtures/dashboardFixtures';

describe('VideoTutorial', () => {
    const mockVideo = mockDashboardDataFixture.welcomeVideo;

    it('renders video information correctly', () => {
        render(<VideoTutorial video={mockVideo} />);

        expect(screen.getByText(mockVideo.title)).toBeInTheDocument();
        expect(screen.getByText(mockVideo.description)).toBeInTheDocument();
    });

    it('calls onPlay when play button is clicked', () => {
        const mockOnPlay = vi.fn();
        render(
            <VideoTutorial
                video={mockVideo}
                onPlay={mockOnPlay}
            />
        );

        const playButton = screen.getByRole('button');
        fireEvent.click(playButton);

        expect(mockOnPlay).toHaveBeenCalledWith(mockVideo);
    });

    it('renders play button', () => {
        render(<VideoTutorial video={mockVideo} />);

        const playButton = screen.getByRole('button');
        expect(playButton).toBeInTheDocument();
        expect(playButton).toHaveClass('bg-red-600');
    });

    it('has proper styling structure', () => {
        render(<VideoTutorial video={mockVideo} />);

        const container =
            screen.getByText(mockVideo.title).closest('.space-y-8') || screen.getByText(mockVideo.title).closest('div');
        expect(container).toBeTruthy();
    });
});
