import { QueryClient, QueryClientProvider } from "react-query";
import User from "./components/user";
import Form from "./components/form";
import "./App.css";

const queryClient = new QueryClient();

const App: React.FC<{}> = () => (
  <QueryClientProvider client={queryClient}>
    <Form />
    <User />
  </QueryClientProvider>
);

export default App;
