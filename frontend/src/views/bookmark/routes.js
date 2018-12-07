import Bookmarks from './views/bookmarks/index.vue';
export default {
  routes: [
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      component: Bookmarks,
      children: []
    }
  ]
}
