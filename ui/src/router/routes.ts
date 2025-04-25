import { IndexRouteObject, NonIndexRouteObject } from 'react-router';
import Layout from '../pages/Layout';

type IndexRouteNode = Omit<IndexRouteObject, 'children'>;
type NonIndexRouteNode = Omit<NonIndexRouteObject, 'children'>;
type UnionRouteNode = IndexRouteNode | NonIndexRouteNode;

export type RouteNode = UnionRouteNode & {
  children?: RouteNode[];
};

const routes: RouteNode[] = [
  {
    path: '/',
    Component: Layout,
  },
];
export default routes;
