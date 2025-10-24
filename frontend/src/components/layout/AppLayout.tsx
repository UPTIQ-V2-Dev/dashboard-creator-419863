import { ReactNode } from 'react';
import { SidebarProvider } from '../ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Header } from './Header';
import { UserProfile } from '../../types/dashboard';

interface AppLayoutProps {
    children: ReactNode;
    user?: UserProfile;
}

export const AppLayout = ({ children, user }: AppLayoutProps) => {
    return (
        <SidebarProvider>
            <div className='min-h-screen flex w-full'>
                <AppSidebar user={user} />
                <div className='flex flex-col flex-1'>
                    <Header user={user} />
                    <main className='flex-1 overflow-auto'>{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
};
