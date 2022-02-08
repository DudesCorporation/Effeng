import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/LoginPage.vue'),
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../pages/FeedPage.vue'),
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../pages/LearnPage.vue'),
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: () => import('../pages/DictionaryPage.vue'),
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: () => import('../pages/StatisticPage.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../pages/CategoriesPage.vue'),
  },
];

export default routes;
