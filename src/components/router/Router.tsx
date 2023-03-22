import React, { lazy, ReactNode, Suspense } from 'react';
import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import { Layout } from '../domain/layouts/Layout';
import UserLayout from '../domain/layouts/user/UserLayout';

const Loading = () => <p className="w-full h-full p-4 text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));
const UserDashboardScreen = lazy(() => import('~/components/screens/user/UserDashboard'));

const iconClasses = `h-6 w-6`;

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

// add attribute in the existing type for typescript
type RouteChildrenCustom<T> = Partial<T> & { icon?: ReactNode; name: string };
type RouteObjectCustom = Omit<RouteObject, 'children'> & { children?: RouteChildrenCustom<RouteObject>[] };

export const userDashboardRoutes = {
  path: '/user/dashboard',
  element: <UserLayout />,
  children: [
    {
      index: true,
      element: <UserDashboardScreen />,
      icon: <Squares2X2Icon className={iconClasses} />,
      name: 'Dashboard',
    },
    {
      path: '*',
      element: <Page404Screen />,
      name: '404',
    },
  ],
} satisfies RouteObjectCustom;

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
    userDashboardRoutes,
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
