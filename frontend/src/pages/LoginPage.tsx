import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { authService } from '@/services/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { LoginRequest } from '@/types/user';

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const loginMutation = useMutation({
        mutationFn: (credentials: LoginRequest) => authService.login(credentials),
        onSuccess: () => {
            navigate('/');
        },
        onError: error => {
            console.error('Login failed:', error);
        }
    });

    const onSubmit = (data: LoginFormData) => {
        loginMutation.mutate(data);
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
            <Card className='w-full max-w-md'>
                <CardHeader className='space-y-2 text-center'>
                    <CardTitle className='text-2xl font-bold'>Welcome back</CardTitle>
                    <CardDescription>Sign in to your AI Workbench account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        <div className='space-y-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='Enter your email'
                                {...register('email')}
                                className={errors.email ? 'border-red-500' : ''}
                            />
                            {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='password'>Password</Label>
                            <div className='relative'>
                                <Input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    {...register('password')}
                                    className={errors.password ? 'border-red-500 pr-10' : 'pr-10'}
                                />
                                <Button
                                    type='button'
                                    variant='ghost'
                                    size='sm'
                                    className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className='h-4 w-4 text-gray-500' />
                                    ) : (
                                        <Eye className='h-4 w-4 text-gray-500' />
                                    )}
                                </Button>
                            </div>
                            {errors.password && <p className='text-sm text-red-600'>{errors.password.message}</p>}
                        </div>

                        {loginMutation.error && (
                            <Alert variant='destructive'>
                                <AlertDescription>
                                    {loginMutation.error instanceof Error
                                        ? loginMutation.error.message
                                        : 'Failed to sign in. Please check your credentials and try again.'}
                                </AlertDescription>
                            </Alert>
                        )}

                        <Button
                            type='submit'
                            className='w-full'
                            disabled={loginMutation.isPending}
                        >
                            {loginMutation.isPending ? (
                                <>
                                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn className='h-4 w-4 mr-2' />
                                    Sign in
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
