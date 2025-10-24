import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardPage } from './pages/DashboardPage';
import { ComingSoonPage } from './pages/ComingSoonPage';

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
                        path='/'
                        element={<DashboardPage />}
                    />
                    <Route
                        path='/app-builder'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/agent-builder'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/skills-library'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/rag'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/model-hub'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/security-monitoring'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/config-utils'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/connections'
                        element={<ComingSoonPage />}
                    />
                    <Route
                        path='/insights'
                        element={<ComingSoonPage />}
                    />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};
