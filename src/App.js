import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserDashboard from './Views/UserDashboard';



function App() {
  const queryClient = new QueryClient()
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <UserDashboard />
    </QueryClientProvider>
  );
}

export default App;
