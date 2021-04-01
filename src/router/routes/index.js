import {
  home,
  login,
} from '@/router/routes/routePaths';

const routes = [
  {
    path: home,
    component: () => import('@/views/Home')
  }
];

export default routes;
