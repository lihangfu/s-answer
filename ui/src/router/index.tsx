import { useEffect, useState } from 'react';
import { RouteObject } from 'react-router';
import baseRoutes, { RouteNode } from './routes';

const routeWrapper = (routeNodes: RouteNode[], root: RouteNode[]) => {
  routeNodes.forEach((rn) => {
    root.push(rn);
  });
};

function useMergeRoutes() {
  const [routesState, setRoutes] = useState<RouteObject[]>([]);

  const init = () => {
    const routes: RouteObject[] = [];
    routeWrapper(baseRoutes, routes);
    setRoutes(routes);
  };

  useEffect(() => {
    init();
  }, []);

  return routesState;
}

export { useMergeRoutes };
