import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes as ModuleRoutes, stores as ModuleStores} from './views';
import { store } from './store';
import { sync } from 'vuex-router-sync';
import VueOnsen from 'vue-onsenui';
import Toolbar from './components/toolbar/index.vue';

import './../node_modules/onsenui/css/onsenui-core.min.css';
import './../node_modules/onsenui/css/onsenui-fonts.css';
import './../node_modules/onsenui/css/onsenui.min.css';
import './../node_modules/onsenui/css/onsen-css-components.min.css';

Vue.use(VueResource);
Vue.use(VueOnsen);
Vue.use(VueRouter);
Vue.component('toolbar', Toolbar);

let router = new VueRouter({
  'mode': 'hash',
  assetsPublicPath: '',
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'router-link-active active',
  routes: [
    /*{
      path: '/',
      name: 'Index',
      component: Index
    }*/
  ].concat(ModuleRoutes)
});
const unsync = sync(store, router);

new Vue({
  store,
  router,
  el: '#app',
  created: function () {
    this.$nextTick(() => {
      this.$store.dispatch('init');
    });
  },
  render: h => h(App)
});
