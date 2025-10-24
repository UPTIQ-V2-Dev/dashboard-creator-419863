import { Play } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { WelcomeVideo } from '../../types/dashboard';

interface VideoTutorialProps {
    video: WelcomeVideo;
    onPlay?: (video: WelcomeVideo) => void;
}

export const VideoTutorial = ({ video, onPlay }: VideoTutorialProps) => {
    return (
        <Card className='overflow-hidden'>
            <CardContent className='p-0'>
                <div className='relative bg-gradient-to-br from-green-50 to-green-100'>
                    {/* Video Thumbnail Area */}
                    <div className='p-6'>
                        <div className='relative bg-white rounded-lg p-4 mb-4 border border-green-200'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='h-2 w-16 bg-green-500 rounded-full'></div>
                            </div>
                            <div className='space-y-2 mb-4'>
                                <div className='h-3 bg-gray-200 rounded w-3/4'></div>
                                <div className='h-3 bg-gray-200 rounded w-1/2'></div>
                                <div className='h-3 bg-gray-200 rounded w-2/3'></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-6 w-6 bg-blue-500 rounded'></div>
                                <div className='h-6 w-6 bg-gray-300 rounded'></div>
                                <div className='h-6 w-6 bg-purple-500 rounded'></div>
                            </div>
                        </div>

                        {/* Play Button */}
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <Button
                                onClick={() => onPlay?.(video)}
                                className='h-16 w-16 rounded-full bg-red-600 hover:bg-red-700 p-0'
                            >
                                <Play className='h-8 w-8 text-white ml-1' />
                            </Button>
                        </div>
                    </div>

                    {/* Video Info */}
                    <div className='px-6 pb-6'>
                        <h3 className='font-semibold text-gray-900 mb-2'>{video.title}</h3>
                        <p className='text-sm text-gray-600 mb-3'>{video.description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
