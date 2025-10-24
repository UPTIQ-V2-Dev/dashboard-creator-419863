import { TrendingUp, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';

interface SkillsCounterProps {
    skillsCount: number;
    isLoading?: boolean;
}

export const SkillsCounter = ({ skillsCount, isLoading }: SkillsCounterProps) => {
    if (isLoading) {
        return (
            <Card className='bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white'>
                <CardContent className='p-6'>
                    <div className='space-y-4'>
                        <div className='h-12 w-24 bg-slate-600 rounded animate-pulse'></div>
                        <div className='h-4 w-32 bg-slate-600 rounded animate-pulse'></div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className='bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden'>
            <CardContent className='p-6 relative z-10'>
                <div className='space-y-4'>
                    {/* Skills Count */}
                    <div>
                        <div className='text-4xl font-bold tracking-tight'>{skillsCount.toLocaleString()}</div>
                        <div className='text-slate-300 text-sm font-medium'>Skills and Counting...</div>
                    </div>

                    {/* Progress Bar */}
                    <div className='space-y-2'>
                        <Progress
                            value={75}
                            className='h-2 bg-slate-600'
                        />
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className='absolute top-4 right-4 opacity-20'>
                    <Sparkles className='h-8 w-8' />
                </div>
                <div className='absolute bottom-4 right-6 opacity-10'>
                    <TrendingUp className='h-12 w-12' />
                </div>

                {/* Decorative gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10'></div>
            </CardContent>
        </Card>
    );
};
