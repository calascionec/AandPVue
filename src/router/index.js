import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Collections from '@/components/Collections';
import Collection from '@/components/Collection/Collection';
import Financing from '@/components/Financing';
import WhereToBuy from '@/components/WhereToBuy';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections,
    },
    {
      path: '/collections/:collection',
      name: 'Collection',
      component: Collection,
    },
    {
      path: '/financing',
      name: 'Financing',
      component: Financing,
    },
    {
      path: '/where-to-buy',
      name: 'WhereToBuy',
      component: WhereToBuy,
    },
    {
      path: '/contact',
      name: 'Contat',
      component: Contact,
    },
  ],
});
