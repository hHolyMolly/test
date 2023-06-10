import { routerType } from '../@type/router.types';

import { Home, Favorite, NotFound } from '../pages';

const routes: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
  {
    path: '/favorite',
    element: <Favorite />,
    title: 'favorite',
  },
  {
    path: '*',
    element: <NotFound />,
    title: 'not found',
  },
];

export default routes;
