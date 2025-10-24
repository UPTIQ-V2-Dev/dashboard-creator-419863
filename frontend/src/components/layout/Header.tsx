import { Bell, Grid3x3, HelpCircle, LogOut } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { UserProfile } from '../../types/dashboard';
import { authService } from '@/services/auth';

interface HeaderProps {
    user?: UserProfile;
}

export const Header = ({ user }: HeaderProps) => {
    const navigate = useNavigate();

    const logoutMutation = useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            navigate('/login');
        },
        onError: error => {
            console.error('Logout failed:', error);
            // Even if logout fails on server, clear local data and redirect
            navigate('/login');
        }
    });

    const handleLogout = () => {
        logoutMutation.mutate();
    };

    return (
        <header className='border-b bg-background px-6 py-4'>
            <div className='flex items-center justify-between'>
                {/* Left side - Logo and Brand */}
                <div className='flex items-center gap-2'>
                    <div className='flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white text-xs font-bold'>
                        ⚡
                    </div>
                    <span className='text-lg font-semibold'>AI Workbench</span>
                </div>

                {/* Right side - Actions and User Menu */}
                <div className='flex items-center gap-2'>
                    {/* Marketplace */}
                    <Button
                        variant='ghost'
                        size='sm'
                        className='gap-2'
                    >
                        <Grid3x3 className='h-4 w-4' />
                        Marketplace
                    </Button>

                    {/* News & Alerts */}
                    <Button
                        variant='ghost'
                        size='sm'
                        className='gap-2'
                    >
                        <Bell className='h-4 w-4' />
                        News & Alerts
                    </Button>

                    {/* Help & Documentation */}
                    <Button
                        variant='ghost'
                        size='sm'
                        className='gap-2'
                    >
                        <HelpCircle className='h-4 w-4' />
                        Help and Documentation
                    </Button>

                    {/* User Avatar */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant='ghost'
                                className='h-8 w-8 rounded-full p-0'
                            >
                                <Avatar className='h-8 w-8'>
                                    <AvatarImage
                                        src={user?.avatar}
                                        alt={user?.name}
                                    />
                                    <AvatarFallback className='bg-green-600 text-white text-xs font-medium'>
                                        {user?.initials || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align='end'
                            className='w-56'
                        >
                            <DropdownMenuItem>
                                <div className='flex flex-col'>
                                    <span className='font-medium'>{user?.name || 'User'}</span>
                                    <span className='text-sm text-muted-foreground'>{user?.email}</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                            <DropdownMenuItem>Workspace Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={handleLogout}
                                disabled={logoutMutation.isPending}
                                className='text-red-600 focus:text-red-600 cursor-pointer'
                            >
                                <LogOut className='h-4 w-4 mr-2' />
                                {logoutMutation.isPending ? 'Signing out...' : 'Sign Out'}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};
