import { AppLayout } from '../components/layout/AppLayout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useDashboard';

export const ComingSoonPage = () => {
    const { data: currentUser } = useCurrentUser();
    const location = useLocation();

    const getPageTitle = () => {
        const path = location.pathname.slice(1);
        return (
            path
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ') || 'Page'
        );
    };

    return (
        <AppLayout user={currentUser}>
            <div className='p-6 max-w-4xl mx-auto'>
                <div className='flex items-center justify-center min-h-[60vh]'>
                    <Card className='w-full max-w-md text-center'>
                        <CardHeader>
                            <CardTitle className='text-2xl'>{getPageTitle()}</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <div className='text-6xl'>🚧</div>
                            <p className='text-muted-foreground'>
                                This feature is currently under development and will be available soon.
                            </p>
                            <Button
                                asChild
                                variant='outline'
                            >
                                <Link
                                    to='/'
                                    className='gap-2'
                                >
                                    <ArrowLeft className='h-4 w-4' />
                                    Back to Dashboard
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};
