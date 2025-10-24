import { LayoutGrid, Bot } from 'lucide-react';
import { Button } from '../ui/button';
import { QuickAction } from '../../types/dashboard';

interface QuickActionsProps {
    actions: QuickAction[];
    onActionClick?: (action: QuickAction) => void;
}

export const QuickActions = ({ actions, onActionClick }: QuickActionsProps) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'layout-grid':
                return LayoutGrid;
            case 'bot':
                return Bot;
            default:
                return LayoutGrid;
        }
    };

    return (
        <div className='flex gap-4'>
            {actions.map(action => {
                const Icon = getIcon(action.icon);
                const isApp = action.type === 'app';

                return (
                    <Button
                        key={action.id}
                        variant='outline'
                        className={`
              h-auto p-0 overflow-hidden border-2 hover:border-current transition-colors
              ${isApp ? 'border-green-200 hover:border-green-400' : 'border-gray-200 hover:border-gray-400'}
            `}
                        onClick={() => onActionClick?.(action)}
                    >
                        <div className='flex items-center gap-3 p-4'>
                            <div
                                className={`
                p-2 rounded-md
                ${isApp ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}
              `}
                            >
                                <Icon className='h-5 w-5' />
                            </div>
                            <div className='text-left'>
                                <div className='font-medium text-sm'>{action.title}</div>
                            </div>
                        </div>
                    </Button>
                );
            })}
        </div>
    );
};
