import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'categories',
      categories: [],
    },
    actions: {
      getCategories({ state, dispatch, rootState }) {
        return Vue.http.get(rootState.endpoint + '/category').then(
          response => {
            Vue.set(state, 'categories', response.body.response);
            return response.body.response;
          }, response => {
            Vue.set(state, 'categories', false);
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      },
    }
  }
}