import { Paperclip, BookOpen, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { UserProfile } from '../../types/dashboard';

interface WelcomeSectionProps {
    user?: UserProfile;
    onCreateApp?: (description: string) => void;
}

export const WelcomeSection = ({ user, onCreateApp }: WelcomeSectionProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const description = formData.get('description') as string;
        if (description.trim() && onCreateApp) {
            onCreateApp(description);
        }
    };

    return (
        <div className='space-y-6'>
            {/* Greeting */}
            <div className='space-y-2'>
                <h1 className='text-2xl font-semibold'>
                    Hello, <span className='text-green-600'>{user?.name || 'User'}</span> What would you like to build
                    today?
                </h1>
            </div>

            {/* App Creation Form */}
            <form
                onSubmit={handleSubmit}
                className='space-y-4'
            >
                <div className='relative'>
                    <Textarea
                        name='description'
                        placeholder='Describe the app you want to create...'
                        className='min-h-[120px] pr-20 resize-none'
                    />
                    <div className='absolute bottom-3 right-3 flex items-center gap-2'>
                        <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            className='h-8 w-8 p-0'
                        >
                            <Paperclip className='h-4 w-4' />
                        </Button>
                        <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            className='h-8 w-8 p-0'
                        >
                            <BookOpen className='h-4 w-4' />
                        </Button>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <Button
                        variant='ghost'
                        size='sm'
                        className='gap-2'
                    >
                        <Paperclip className='h-4 w-4' />
                        Attach
                    </Button>
                    <Button
                        variant='ghost'
                        size='sm'
                        className='gap-2'
                    >
                        <BookOpen className='h-4 w-4' />
                        Brand Guidelines
                    </Button>
                    <div className='flex-1'></div>
                    <Button
                        type='submit'
                        className='bg-green-600 hover:bg-green-700 gap-2'
                    >
                        Send
                        <Send className='h-4 w-4' />
                    </Button>
                </div>
            </form>
        </div>
    );
};
