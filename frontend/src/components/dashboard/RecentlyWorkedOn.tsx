import { Bot, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { RecentItem } from '../../types/dashboard';

interface RecentlyWorkedOnProps {
    items: RecentItem[];
    onItemClick?: (item: RecentItem) => void;
}

export const RecentlyWorkedOn = ({ items, onItemClick }: RecentlyWorkedOnProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'draft':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'archived':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    if (items.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className='text-lg font-semibold'>Recently Worked On</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='text-center py-8 text-gray-500'>
                        <Bot className='h-12 w-12 mx-auto mb-3 text-gray-300' />
                        <p className='text-sm'>No recent items to show</p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-lg font-semibold'>Recently Worked On</CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
                <div className='divide-y divide-border'>
                    {items.map(item => (
                        <div
                            key={item.id}
                            className='p-4 hover:bg-accent/50 cursor-pointer transition-colors'
                            onClick={() => onItemClick?.(item)}
                        >
                            <div className='flex items-start justify-between gap-4'>
                                <div className='flex items-start gap-3 flex-1 min-w-0'>
                                    <div className='mt-1 flex-shrink-0'>
                                        <div className='flex items-center justify-center w-6 h-6 rounded-md bg-blue-100 text-blue-600'>
                                            <Bot className='h-4 w-4' />
                                        </div>
                                    </div>

                                    <div className='flex-1 min-w-0'>
                                        <div className='flex items-center gap-2 mb-1'>
                                            <Badge
                                                variant='secondary'
                                                className='text-xs px-2 py-0.5'
                                            >
                                                {item.type}
                                            </Badge>
                                            <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                                                <Calendar className='h-3 w-3' />
                                                <span>Last updated on {item.lastUpdated}</span>
                                            </div>
                                        </div>

                                        <h4 className='font-medium text-sm text-foreground mb-1 truncate'>
                                            {item.name}
                                        </h4>

                                        {item.description && (
                                            <p className='text-xs text-muted-foreground line-clamp-2'>
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <Badge
                                    variant='outline'
                                    className={`text-xs ${getStatusColor(item.status)} flex-shrink-0`}
                                >
                                    {item.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
