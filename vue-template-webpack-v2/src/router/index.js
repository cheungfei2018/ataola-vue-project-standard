import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/App')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/Home'),
    children: []
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/business/Login')
  },
  {
    path: '/tool',
    name: 'Tool',
    component: () => import('@/pages/tool/Tool'),
    children: [
      {
        path: '/tool/icon-list',
        name: 'IconList',
        component: () => import('@/components/common/IconList')
      }
    ]
  }
];

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});

router.beforeEach(function(to, from, next) {
  const is_login = localStorage.getItem('is_login');
  if (to.path === '/') {
    if (!is_login) {
      next({ path: '/login' });
    }
  }
  next();
});

export default router;
