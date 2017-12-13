import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

import Layout from '../pages/layout';
import Dashboard from '../pages/dashboard';

// Items
import Items from '../pages/items';
import Item from '../pages/items/form';
import Login from '../pages/auth/login';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          alias: '',
          component: Dashboard,
          name: 'Dasboard',
          hasMenu: true,
        },
        { path: 'items', name: 'Items', hasMenu: true, component: Items },
        { path: 'item-crear', component: Item },
        { path: 'item-editar', component: Item },
      ],
    },
    { path: '/login', component: Login },
  ],
});

router.afterEach((to) => {
  store.commit('currentView', to);
});

export default router;
