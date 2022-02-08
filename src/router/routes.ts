import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/FeedPage.vue'),
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../views/LearnPage.vue'),
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: () => import('../views/DictionaryPage.vue'),
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: () => import('../views/StatisticPage.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/CategoriesPage.vue'),
  },
];

export default routes;
