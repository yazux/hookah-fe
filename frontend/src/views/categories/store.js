import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'categories',
      categories: {
        current_page: 1,
        data: [],
        from: 1,
        last_page: 1,
        next_page_url: null,
        per_page: "100",
        prev_page_url: null,
        to: 1,
        total: 1
      },
    },
    actions: {
      getCategories({ state, dispatch, rootState }, options) {
        let params = {
          page:       (options && options.page)  ? options.page  : 1,
          count:      (options && options.count) ? options.count : 100,
          order_by:   (options && options.order_by) ? options.order_by : 'id',
          order_type: (options && options.order_type) ? options.order_type : 'asc',
          filter:     (options && options.filter) ? options.filter : {model: [], relation: []}
        };
        return Vue.http.get(rootState.endpoint + '/category', {params: params}).then(
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
