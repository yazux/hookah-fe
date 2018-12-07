import Vue from 'vue';
import Vuex from 'vuex';
import {stores as ModuleStores} from './views';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    endpoint: 'http://coub.lets-code.ru/api',
    snackbar: {
      show: false,
      duration: 4000,
      message: ''
    },
    title: '',
    progress: false,
    backButton: false,
    routeAfterAuth: {name: 'Categories'}
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    showProgressBar(state) {
      state.progress = true;
    },
    hideProgressBar(state) {
      state.progress = false;
    },
    toggleProgressBar(state) {
      state.progress = !(state.progress);
    },
    showSnackbar(state, data) {
      let timeOut = (data[1]) ? data[1] : 4000;
      state.snackbar.duration = timeOut;
      state.snackbar.message  = data[0];
      state.snackbar.show     = true;
      setTimeout(function () {
        state.snackbar.show = false;
        state.snackbar.message = '';
      }, timeOut);
    },
    hideSnackbar(state) {
      state.snackbar.show    = false;
      state.snackbar.message = '';
    },
    showBackBtn(state, value) {
      state.backButton = (value) ? true : false;
    },
    setRouteAfterAuth(state, route) {
      Vue.set(state, 'routeAfterAuth', Object.assign({}, route));
    }
  },
  actions: {
    init({ dispatch }) {
      dispatch('profile/getCurrentUser');
      //dispatch('vendors/getVendors');
      //dispatch('categories/getCategories');
    }
  },
  modules: ModuleStores
});
