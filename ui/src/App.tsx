import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import { useMergeRoutes } from './router';

function App() {
  const routes = useMergeRoutes();
  console.log(routes);
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
