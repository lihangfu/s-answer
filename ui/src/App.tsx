import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Layout from './pages/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
