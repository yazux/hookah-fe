import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'profile',
      login: false,
      user: {}
    },
    actions: {
      login({ state, dispatch, rootState }, data) {
        return Vue.http.post(rootState.endpoint + '/login', data).then(
          response => {
            localStorage.setItem('token', response.body.response.token_data.token);
            Vue.set(state, 'login', true);
            Vue.set(state, 'user', response.body.response);
            return response.body.response;
          }, response => {
            Vue.set(state, 'user', {});
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
            return false;
          }
        );
      },
      signup({ state, dispatch, rootState }, data) {
        return Vue.http.post(rootState.endpoint + '/signup', data).then(
          response => {
            localStorage.setItem('token', response.body.response.token_data.token);
            Vue.set(state, 'login', true);
            Vue.set(state, 'user', response.body.response);
            return response.body.response;
          }, response => {
            Vue.set(state, 'user', {});
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
            return false;
          }
        );
      },
      getCurrentUser({ state, dispatch, rootState }, data) {
        return Vue.http.get(rootState.endpoint + '/user/current', data).then(
          response => {
            Vue.set(state, 'user', response.body.response);
            Vue.set(state, 'login', true);
            return response.body.response;
          }, response => {
            Vue.set(state, 'user', {});
            Vue.set(state, 'login', false);
            //this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      },
    }
  }
}
