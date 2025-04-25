import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import { useMergeRoutes } from './router';
import InitialLoadingPlaceholder from './components/InitialLoadingPlaceholder';

function App() {
  const routes = useMergeRoutes();
  // useMergeRoutes 中的 useEffect 是异步执行的
  // App 组件的首次渲染会立即执行，此时 routes 数组还是初始空值
  // 您的代码在此时返回 loading 状态，避免了使用空数组创建 router
  // 但在 useEffect 中 setRoutes 异步加载路由后，会重新渲染 App 组件
  // 此时 routes 数组已经有值，您可以使用 createBrowserRouter 创建 router
  if (routes.length === 0) {
    return <InitialLoadingPlaceholder />;
  }
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
