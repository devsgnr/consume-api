import { QueryClient, QueryClientProvider } from 'react-query';
import  User from './components/user';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <User/>
    </QueryClientProvider>
    
  );
}



export default App;
