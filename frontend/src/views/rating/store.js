import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'rating',
      ratings: []
    },
    actions: {
      getMixRatings({ state, dispatch, rootState }, options) {
        return Vue.http.get(rootState.endpoint + '/rating/mix', options).then(
          response => {
            Vue.set(state, 'ratings', response.body.response);
            return response.body.response;
          }, response => {
            Vue.set(state, 'ratings', false);
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      },

      postMixRatings({ state, dispatch, rootState }, data) {
        return Vue.http.post(rootState.endpoint + '/rating/mix', data).then(
          response => {
            return response.body.response;
          }, response => {
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      },

      putMixRatings({ state, dispatch, rootState }, data) {
        data['_method'] = 'put';
        return Vue.http.post(rootState.endpoint + '/rating/mix', data).then(
          response => {
            return response.body.response;
          }, response => {
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      }

    }
  }
}
