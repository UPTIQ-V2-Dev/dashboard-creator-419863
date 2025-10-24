import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardPage } from './pages/DashboardPage';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { LoginPage } from './pages/LoginPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            gcTime: 10 * 60 * 1000 // 10 minutes
        }
    }
});

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route
                        path='/login'
                        element={<LoginPage />}
                    />
                    <Route
                        path='/'
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/app-builder'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/agent-builder'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/skills-library'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/rag'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/model-hub'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/security-monitoring'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/config-utils'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/connections'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/insights'
                        element={
                            <ProtectedRoute>
                                <ComingSoonPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};
