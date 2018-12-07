import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes as ModuleRoutes, stores as ModuleStores} from './views';
import { store } from './store';
import { sync } from 'vuex-router-sync';
import VueOnsen from 'vue-onsenui';
import Toolbar from './components/toolbar/index.vue';
import gapi from './assets/js/gapi.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faListUl, faLayerGroup, faBookmark, faStar,
  faStream, faFlask, faFire
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLayerGroup);
library.add(faListUl);
library.add(faBookmark);
library.add(faStar);
library.add(faStream);
library.add(faFlask);
library.add(faFire);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


import 'onsenui/css/onsenui-core.min.css';
//import 'onsenui/css/onsenui-fonts.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './assets/css/main.css';

Vue.prototype.gapi = gapi;

Vue.use(VueResource);
Vue.use(VueOnsen);
Vue.use(VueRouter);
Vue.component('toolbar', Toolbar);

Vue.http.headers.common['Authorization']    = localStorage.getItem('token');
Vue.http.headers.common['Accept']           = 'application/json, text/plain, */*';
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.options.emulateHTTP = true;
//Vue.prototype.moment = Moment;

let router = new VueRouter({
  'mode': 'hash',
  assetsPublicPath: '',
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'router-link-active active',
  routes: [].concat(ModuleRoutes)
});
const unsync = sync(store, router);

new Vue({
  store,
  router,
  el: '#app',
  data() {
    return {}
  },
  created: function () {
    this.$nextTick(() => {
      this.$store.dispatch('init');
    });
  },
  computed: {
    snackbar() {
      return this.$store.state.snackbar.show;
    },
    login() {
      return this.$store.state.profile.login;
    }
  },
  watch: {
    'snackbar'(value) {
      if (value) this.$ons.notification.toast(
        this.$store.state.snackbar.message,
        {timeout: this.$store.state.snackbar.duration}
      )
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
    },
    checkAuth(routeAfterAuth) {
      this.$nextTick(() => {
        if(routeAfterAuth) this.$store.commit('setRouteAfterAuth', routeAfterAuth);
        if (!this.login) this.$router.push({name: 'Login'});
      });
      return this.login;
    }
  },
  render: h => h(App)
});
